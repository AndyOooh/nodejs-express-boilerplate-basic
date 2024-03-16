import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response): Promise<any> => {
  try {
    // const users = await User.find();
    const users: string = 'sasd';
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send;
  }
};
