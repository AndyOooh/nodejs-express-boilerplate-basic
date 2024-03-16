import express from 'express';
import { usersRoutes } from './user';

const router = express.Router();

// router.use('/', authRoutes);
router.use('/users', usersRoutes);
// router.use('/posts', postsRoutes);

export { router as apiRoutes };

// export const apiRoutes: string = 'sadsfsdf';
// export default router;
// export const apiRoutes = 'sadasd'
// = router;
// export apiRoutes
