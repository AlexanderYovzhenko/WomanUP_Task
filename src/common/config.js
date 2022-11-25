import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const PORT = process.env.PORT || 4000,
  JWT_SECRET_KEY = process.env.JWT_SECRET_KEY,
  SALT_HASH_PASSWORD_ITERATION = process.env.SALT_HASH_PASSWORD_ITERATION,
  URL_DB = process.env.URL_DB;

export { PORT, JWT_SECRET_KEY, SALT_HASH_PASSWORD_ITERATION, URL_DB };
