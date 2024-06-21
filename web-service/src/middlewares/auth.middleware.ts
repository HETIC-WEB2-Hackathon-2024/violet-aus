import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import Candidat from "../entities/Candidat.entity";
import candidatRepository from "../repositories/candidat.repository";

interface User {
  id: number;
  nom: string | null;
  prenom: string | null;
  telephone: string | null;
  email: string;
  pays: string;
  date_naissance: Date;
  login: string;
  picture: string;
  updated_at: Date;
  email_verified: boolean;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}

const jwtCheck = auth({
  audience: "api.violet.aus.floless.fr",
  issuerBaseURL: "https://violet-aus.eu.auth0.com/",
  tokenSigningAlg: "RS256",
});

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  jwtCheck(req, res, async (err) => {
    if (err) {
      return res
        .status(401)
        .json({ error: "Unauthorized", message: "Invalid or missing token" });
    }

    fetch("https://violet-aus.eu.auth0.com/userinfo", {
      headers: {
        Authorization: `Bearer ${req.auth?.token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("");
        }
        return res.json();
      })
      .then(async (res) => {
        const user = await candidatRepository.findByEmail(res.email);

        if (!user.rows[0].id) {
          console.error("User not found in the database");
        }

        req.user = {
          ...user.rows[0],
          login: res.name,
          picture: res.picture,
          updated_at: res.updated_at,
          email_verified: res.email_verified,
        };
      })
      .catch((err) => {
        console.log("res not ok");
      })
      .finally(() => {
        next();
      });
  });
};

export default authMiddleware;
