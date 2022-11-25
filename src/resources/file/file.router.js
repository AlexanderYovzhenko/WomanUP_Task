import express from 'express';
import { uploadFile } from './file.controller';

const router = express.Router();

router.post('/file', uploadFile);

export default router;
