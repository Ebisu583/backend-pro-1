import express from 'express';
import { ProductsController } from '../controllers/products.controller';
import { ProductsMockRepository } from '../repositories/products-mock-repository';

const repository = new ProductsMockRepository();
const controller = new ProductsController(repository);

const router = express.Router();

router.post('', (req, res) => {
   try {
       return res.json(controller.addItem(req.body));
   } catch (error) {
       res.status(500).json(error);
   }
});

router.get('', (_, res) => {
  return res.json(controller.getAllItems());
});

router.get('/:id', (req, res) => {  
  return res.json(controller.getItemById(req.params.id));
});

router.get('/find/:name', (req, res) => {  
  return res.json(controller.findProductByName(req.params.name));
});

export default router;

