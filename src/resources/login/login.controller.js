import jwt from 'jsonwebtoken';
import statusCode from '../../common/status.code.js';
import { addUserDb, getUserDb } from './login.repository.js';
import { JWT_SECRET_KEY } from '../../common/config.js';
import { checkHashPassword, setHashPassword } from '../../bcrypt/bcrypt.js';

/**
 * Registration new user or error if login is busy
 * @param {object} req request
 * @param {object} res response
 * @returns void
 */
const userRegistration = async (req, res) => {
  const newUser = req.body;
  const user = await getUserDb(newUser.login);
  if (user.length) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(statusCode.BAD_REQUEST).send('Login is busy!');
  } else {
    const hashPassword = await setHashPassword(newUser.password);
    const user = await addUserDb({ ...newUser, password: hashPassword });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(statusCode.CREATED).send(user);
  }
};

/**
 * Check login and password user. Get token correct user
 * @param {object} req request
 * @param {object} res response
 * @returns void
 */
const userAuthorization = async (req, res) => {
  const notCorrectAuthorization = 'Wrong login/password combination!';
  const { login, password } = req.body;
  const userArr = await getUserDb(login);

  if (!userArr.length) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(statusCode.UNAUTHORIZED).send(notCorrectAuthorization);
    return;
  } else {
    const validPassword = await checkHashPassword(
      password,
      userArr[0].password
    );
    if (validPassword) {
      const token = jwt.sign({ id: userArr[0]._id }, JWT_SECRET_KEY, {
        expiresIn: 86400,
      });
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
      res.status(statusCode.OK).send({ token });
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Cache-Control', 's-max-age=1, stale-while-revalidate');
      res.status(statusCode.UNAUTHORIZED).send(notCorrectAuthorization);
    }
  }
};

export { userRegistration, userAuthorization };
