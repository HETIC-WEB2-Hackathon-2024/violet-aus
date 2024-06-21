import { Request, Response, NextFunction } from 'express';

function validator(dto: any) {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(400).json({ error: 'Request body is missing' });
    }

    console.log(req.body)

    for (let key in dto) {
      const { required, type } = dto[key];

      if (required && !(key in req.body)) {
        return res.status(400).json({ error: `Missing required field: ${key}` });
      }

      if (req.body[key] !== undefined && typeof req.body[key] !== type) {
        return res.status(400).json({ error: `Field ${key} must be of type ${type}` });
      }
    }

    next();
  };
}

export default validator;

