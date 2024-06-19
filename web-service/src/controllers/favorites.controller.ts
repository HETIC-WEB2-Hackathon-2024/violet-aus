import { Request, Response, NextFunction } from 'express';
import favoritesRepository from '../repositories/favorites.repository';

export const getFavoritesByCandidatId = async  (req: Request, res: Response, next: NextFunction) => {
    try {
        const candidat_id = parseInt(req.params.id, 10);
        if (isNaN(candidat_id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }
        const favorites = await favoritesRepository.findById(candidat_id);
        res.status(200).json({ message: 'Successfully', favorites: favorites });
    } catch(error: any) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
