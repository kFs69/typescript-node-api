import { Router } from 'express';

import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/:id', UserController.show);
routes.post('/users/:id', UserController.delete);
routes.post('/users/:id', UserController.update);

export default routes;
