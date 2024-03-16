import { getUsers } from '@controllers/users';
import express from 'express';

const router = express.Router();

router.route('/').get(getUsers);
// .post(usersValidator.register, createUser);

export { router as usersRoutes };
