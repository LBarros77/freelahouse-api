import { Router, Request, Response } from 'express';
import {
	createUser,
	getUser,
	getUsers,
	updateUser,
	deleteUser
} from '../controllers/user.controllers';

const userRouters = Router();

userRouters.post('/create', createUser);
userRouters.get('/user/:id', getUser);
userRouters.get('/users', getUsers);
userRouters.put('/update/:id', updateUser);
userRouters.delete('/delete/:id', deleteUser);

export default userRouters;