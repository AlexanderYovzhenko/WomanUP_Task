import User from './login.model';

/**
 * Returns object user with login user equal login
 * @param {string} login first argument login of user
 * @returns {object} Object user with login user or null
 */
const getUserDb = async (login) => {
  const user = await User.find({ login });
  return user;
};

/**
 * Add object new user in array users(User)
 * @param {object} newUser first argument new user
 * @returns {object} new user
 */
const addUserDb = async (newUser) => {
  const user = await User.create({
    ...newUser,
  });
  return user;
};

export { getUserDb, addUserDb };
