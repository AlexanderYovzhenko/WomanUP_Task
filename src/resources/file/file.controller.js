import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import statusCode from '../../common/status.code';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Upload file
 * @param {object} req request
 * @param {object} res response
 * @returns void
 */
const uploadFile = async (req, res) => {
  try {
    const file = req.files.file;
    const pathFile = path.join(__dirname, `../../public/${file.name}`);

    if (fs.existsSync(pathFile)) {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(statusCode.BAD_REQUEST).send('File already exist');
      return;
    }

    file.mv(pathFile);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.CREATED).send(`File ${file.name} upload`);
  } catch (error) {
    console.error(error);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.INTERNAL_SERVER_ERROR).send('Upload error');
  }
};

export { uploadFile };
