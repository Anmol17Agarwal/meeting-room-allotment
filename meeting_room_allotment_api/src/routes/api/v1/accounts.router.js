import {Router} from 'express';

import {
  detailController,
  loginController,
  logoutController,
} from '../../../controllers/accounts.controller';

// eslint-disable-next-line new-cap
const accounts = Router();
accounts.route('/login').post(loginController);
accounts.route('/detail').get(detailController);
accounts.route('/logout').delete(logoutController);

export default accounts;
