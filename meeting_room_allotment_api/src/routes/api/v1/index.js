import {Router} from 'express';

import accounts from './accounts.router';

const urlpatterns = new Map([
  ['/accounts', accounts],
]);

// eslint-disable-next-line new-cap
const v1 = Router();
urlpatterns.forEach((router, path) => {
  v1.use(path, router);
});

export default v1;
