import { Router } from 'express';
import { ArchivedNewsController } from '../controllers/archivedNews';

export const archivedNewsRoutes = Router()

archivedNewsRoutes.get('/', ArchivedNewsController.getAll)
