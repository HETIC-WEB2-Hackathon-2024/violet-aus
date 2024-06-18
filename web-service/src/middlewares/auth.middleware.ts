import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: 'api.aus.floless.fr',
  issuerBaseURL: 'https://adopte-un-stagiaire.eu.auth0.com/',
  tokenSigningAlg: 'RS256',
});

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  jwtCheck(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Invalid or missing token' });
    }
    next();
  });
};

export default authMiddleware;