import express from 'express';
import { getUsers } from 'src/controllers/users';
// import { getUsers } from 'src/controllers/users';

const router = express.Router();

router.route('/').get(getUsers);
// .post(usersValidator.register, createUser);

export { router as usersRoutes };
