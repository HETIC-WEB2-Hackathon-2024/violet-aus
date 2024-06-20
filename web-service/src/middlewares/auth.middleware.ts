import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';


declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

const jwtCheck = auth({
  audience: 'api.violet.aus.floless.fr',
  issuerBaseURL: 'https://violet-aus.eu.auth0.com/',
  tokenSigningAlg: 'RS256'
});


const authMiddleware =  async (req: Request, res: Response, next: NextFunction)  => {
  
  jwtCheck(req, res, async err => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Invalid or missing token' });
    }

    try {
      const userinfoResponse = await fetch(
        'https://violet-aus.eu.auth0.com/userinfo',
        {
          headers: {
            Authorization: `Bearer ${req.auth?.token}`,
          },
        }
      );

      if (!userinfoResponse.ok) {
        return res.status(401).json({ error: 'Unauthorized', message: 'Failed to fetch user info' });
      }

      const userinfo = await userinfoResponse.json();
      req.user = userinfo; 
      
      next();

    } catch (error) {
      console.error('Error fetching user info:', error);
      return res.status(500).json({ error: 'Internal Server Error', message: 'Failed to fetch user info' });
    }
  });
};

export default authMiddleware;