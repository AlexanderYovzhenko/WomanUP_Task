import * as bcrypt from 'bcrypt';
// import { SALT_HASH_PASSWORD_ROUNDS } from '../common/config';

/**
 * Hashing password for a new user
 * @param password password of user
 * @returns hash password
 */
const setHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
};

/**
 * Check password of user and password hash of user of db
 * @param password password of user
 * @param checkPassword password of user of db
 * @returns boolean check
 */
const checkHashPassword = async (password, checkPassword) => {
  const validPassword = await bcrypt.compare(password, checkPassword);

  return validPassword;
};

export { setHashPassword, checkHashPassword };
