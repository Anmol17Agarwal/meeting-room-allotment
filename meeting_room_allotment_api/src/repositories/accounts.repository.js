import {User} from '../models';
import {generateKey} from '../utils/token';

/**
 * Finds active authentic user.
 * @param {string} email user email
 * @param {string} password user passowrd
 * @return {User} user object
 */
export async function findActiveUserByEmail(email, password) {
  const user = await User.findOne({email: email, isActive: true});
  if (!user) return null;
  const match = await user.validatePassword(password);
  if (!match) return null;
  if (!user.token) {
    user.token = {key: generateKey()};
    user.lastLogin = new Date();
    await user.save();
  }
  return user;
}
