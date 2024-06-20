import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import Candidat from '../entities/Candidat.entity';
import candidatRepository from '../repositories/candidat.repository';

interface User {
  id: number,
  nom: string | null,
  prenom: string | null,
  telephone: string | null,
  email: string,
  pays: string,
  date_naissance: Date,
  login: string,
  picture: string,
  updated_at: Date,
  email_verified: boolean
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
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
      const user = await candidatRepository.findByEmail(userinfo.email)
      req.user = {
        ...user.rows[0],
        id: user.rows[0].id,
        login: userinfo.name,
        picture: userinfo.picture, 
        updated_at: userinfo.updated_at,
        email_verified: userinfo.email_verified,
      };
      
      next();

    } catch (error) {
      console.error('Error fetching user info:', error);
      return res.status(500).json({ error: 'Internal Server Error', message: 'Failed to fetch user info' });
    }
  });
};

export default authMiddleware;