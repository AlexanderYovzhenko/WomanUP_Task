import * as bcrypt from 'bcrypt';
import { SALT_HASH_PASSWORD_ROUNDS } from '../common/config.js';

/**
 * Hashing password for a new user
 * @param {string} password password of user
 * @returns {string} hash password
 */
const setHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(+SALT_HASH_PASSWORD_ROUNDS);
  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
};

/**
 * Check password of user and password hash of user of db
 * @param {string} password password of user
 * @param {string} checkPassword password of user of db
 * @returns {boolean} boolean check
 */
const checkHashPassword = async (password, checkPassword) => {
  const validPassword = await bcrypt.compare(password, checkPassword);

  return validPassword;
};

export { setHashPassword, checkHashPassword };
