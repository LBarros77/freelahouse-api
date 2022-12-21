import { Request, Response } from 'express';
import { User } from '../entities/User';

export const createUser = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName } = req.body;
		const user = new User();

		user.firstName = firstName;
		user.lastName = lastName;

		await user.save();

		return res.json(user);
	} catch(error) {
		if(error instanceof Error) {
		  return res.status(500).json({message: error.message});
		}
	}
};

export const getUser = async (req: Request, res: Response) => {
	try{
		const userId = parseInt(req.params.id);
		const user = await User.findOneBy({ id: userId });

		if(!user) return res.status(404).json({ message: 'User not found' });
		
		return res.json(user);
	} catch(error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		return res.json(users);
	} catch(error) {
		if(error instanceof Error) {
			return res.status(500);
		}
	}
};

export const updateUser = async (req: Request, res: Response) => {
	try {
		const userId = parseInt(req.params.id);
		const user = await User.findOneBy({ id: userId });

		if(!user) return res.status(404).json({ message: 'User does not exists'});

		await User.update({ id: userId }, req.body);

	  return res.sendStatus(204);
	} catch(error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message});
		}
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	try {
		const userId = parseInt(req.params.id);
		const result = await User.delete({ id: userId });

		if(!result) {
			return res.status(404).json({ message: 'User not found.'});
		}

		return res.sendStatus(204);
	} catch(error) {
		if(error instanceof Error) {
			return res.status(500).json({ message: error.message });
		}
	}
};