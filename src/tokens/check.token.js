import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config';
import statusCode from '../common/status.code';

/**
 * Intermediate function
 * Checks for a valid token
 * @param req first argument request
 * @param res second argument response
 * @param next for next
 * @returns void
 */
const checkToken = (req, res, next) => {
  const textError = 'Authorization Error!';
  const path = req.path;
  const autHeader = req.headers.authorization;

  if (
    path === '/login/registration' ||
    path === '/login/authorization' ||
    path === '/'
  ) {
    return next();
  }

  if (autHeader === undefined) {
    console.error(textError);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.FORBIDDEN).send(textError);
    return;
  } else {
    const [type, token] = autHeader.split(' ');

    if (type === 'Bearer' && token) {
      try {
        jwt.verify(token, JWT_SECRET_KEY);
      } catch (error) {
        console.error(textError);
        res.header('Access-Control-Allow-Origin', '*');
        res.status(statusCode.FORBIDDEN).send(textError);
        return;
      }
    } else {
      console.error(textError);
      res.header('Access-Control-Allow-Origin', '*');
      res.status(statusCode.FORBIDDEN).send(textError);
      return;
    }
  }

  next();
};

export { checkToken };
