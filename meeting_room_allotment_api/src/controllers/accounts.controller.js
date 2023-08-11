import {
  detailSerivce,
  loginService,
  logoutService,
} from '../services/accounts.service';

/**
 * Login Controller
 * @param {Request} request Express Request
 * @param {Response} response Express Response
 * @return {Response} 400s or 201.
 */
export async function loginController(request, response) {
  try {
    const data = await loginService(request.body);
    if (!data) {
      return response.status(400).json({detail: 'Invalid credentials!'});
    }
    return response.status(201).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}

/**
 * Detail Controller
 * @param {Request} request Express Request
 * @param {Response} response Express Response
 * @return {Response} 400s or 200.
 */
export async function detailController(request, response) {
  const data = await detailSerivce(request.user);
  return response.status(200).json(data);
}

/**
 * Logout Controller
 * @param {Request} request Express Request
 * @param {Response} response Express Response
 * @return {Response} 400s or 204.
 */
export async function logoutController(request, response) {
  const data = await logoutService(request.user);
  return response.status(204).json(data);
}
