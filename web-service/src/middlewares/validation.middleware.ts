import { Request, Response, NextFunction } from 'express';

const validateFields = (requiredFields: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {

      return res.status(400).json({
        error: 'Validation Error',
        message: `Body fields: ${missingFields.join(', ')}`,
      });
    }

    // TODO VALIDATION TYPE
    

    next();
  };
};

export default validateFields;