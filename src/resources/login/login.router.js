import express from 'express';
import { userAuthorization, userRegistration } from './login.controller.js';

const router = express.Router();

router.post('/login/registration', userRegistration);
router.post('/login/authorization', userAuthorization);

export default router;
