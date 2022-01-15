import express from 'express';
import { UsersController } from '../controllers/users.controller';
import { UsersMockRepository } from '../repositories/users-mock-repository';

const repository = new UsersMockRepository();
const controller = new UsersController(repository);

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
  return res.json(controller.findUserByName(req.params.name));
});


export default router;