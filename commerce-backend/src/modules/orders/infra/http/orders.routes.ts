import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OrdersController from './OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.index);
ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      client_id: Joi.string().uuid().required(),
      products: Joi.array().required(),
    },
  }),
  ordersController.create,
);

export default ordersRouter;
