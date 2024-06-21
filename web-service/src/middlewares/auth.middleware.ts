import { auth } from 'express-oauth2-jwt-bearer';
import { Request, Response, NextFunction } from 'express';

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
      
    next();

  });
};
export default authMiddleware;
