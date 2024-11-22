import { Router } from 'express';
import { ArchivedNewsController } from '../controllers/archivedNews';

export const archivedNewsRoutes = Router()

archivedNewsRoutes.get('/', ArchivedNewsController.getAll)
// archivedNewsRoutes.put('/:id',
//     param('id').isMongoId().withMessage('Not valid ID'),
//     handleInputErrors,
//      ArchivedNewsController.updateNew)
// archivedNewsRoutes.delete('/:id', 
//     param('id').isMongoId().withMessage('Not valid ID'),
//     handleInputErrors,
//     ArchivedNewsController.deleteNew)