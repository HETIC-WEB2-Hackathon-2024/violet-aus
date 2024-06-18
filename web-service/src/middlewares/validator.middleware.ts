import { Request, Response, NextFunction } from 'express';

const validator = (dto: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const missingFields = Object.keys(dto).filter(field => dto[field] !== undefined && !(field in req.body));
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Validation Error',
        message: `Missing fields: ${missingFields.join(', ')}`,
      });
    }

    const invalidTypes = Object.keys(dto).filter(field => typeof req.body[field] !== typeof dto[field]);
    if (invalidTypes.length > 0) {
      return res.status(400).json({
        error: 'Validation Error',
        message: `Invalid types for fields: ${invalidTypes.join(', ')}`,
      });
    }

    next();
  };
};

export default validator;