import { Request, Response, NextFunction } from 'express';
import favoritesRepository from '../repositories/favorites.repository';

export const getFavoritesDataByCandidatId = async  (req: Request, res: Response, next: NextFunction) => {
    try {
        const candidat_id: number | undefined = req.user?.id;
        if (!candidat_id) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const favorites = await favoritesRepository.findFavoritesDataByCandidatId(candidat_id);
        res.status(200).json({ message: 'Successfully', favorites: favorites});
    } catch(error: any) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const removeFavoriteByFavoriteId = async  (req: Request, res: Response, next: NextFunction) => {
    try {
        const candidat_id: number | undefined = req.user?.id;
        const favorite_id = parseInt(req.params.favorite_id);

        if (!candidat_id || isNaN(favorite_id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const favorites = await favoritesRepository.removeFavoriteByFavoriteId(favorite_id, candidat_id);
        res.status(200).json({ message: 'Successfully', favorites: favorites});
    } catch(error: any) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
