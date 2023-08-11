import {findActiveUserByEmail} from '../repositories/accounts.repository';
import {loginValidator} from '../validators/accounts.validator';

/**
 * Perform Login Service
 * @param {Object} payload user login credentials
 * @return {Object} token
 */
export async function loginService(payload) {
  const validatedData = await loginValidator.validateAsync(payload);
  const user = await findActiveUserByEmail(
      validatedData.email, validatedData.password,
  );
  return {token: user.token.key};
}

/**
 * Retrieve User Detail Service
 * @param {User} user object
 * @return {Object} relevant user details
 */
export async function detailSerivce(user) {
  const detail = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    dateJoined: user.dateJoined,
  };
  return detail;
}

/**
 * Perform Logout Service
 * @param {User} user object
 * @return {Object} empty object
 */
export async function logoutService(user) {
  user.set('token', undefined, {strict: false});
  await user.save();
  return {};
}
