import * as bcrypt from 'bcrypt';
import { SALT_HASH_PASSWORD_ROUNDS } from '../common/config';

const setHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(+SALT_HASH_PASSWORD_ROUNDS);
  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
};

const checkHashPassword = async (password, checkPassword) => {
  const validPassword = await bcrypt.compare(password, checkPassword);

  return validPassword;
};

export { setHashPassword, checkHashPassword };
