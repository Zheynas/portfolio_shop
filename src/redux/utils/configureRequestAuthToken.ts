import { configure } from 'redux-and-the-rest';

/**
 * Configure redux-and-the-rest globally with an authentication token
 * @param {string} authenticationToken The new authentication token to be used for all requests
 */
export default function configureRequestAuthToken(authenticationToken?: string) {
  if (authenticationToken) {
    configure({
      request: {
        headers: {
          Authorization: `Token token="${authenticationToken}"`,
        },
      },
    });
  }
}
