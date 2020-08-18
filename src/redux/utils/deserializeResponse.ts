import Jsona from 'jsona';
import {TJsonApiBody} from 'jsona/lib/JsonaTypes';

/**
 * Deserialize a response from an external API which has been serialized using the JSON API spec to
 * make the data easier to manage within the app.
 * @param responseBody {Object} The body of the response from an external API
 * @see Input format: https://jsonapi.org/
 * @see Output format: https://github.com/olosegres/jsona
 */
const deserializeResponse = (responseBody: TJsonApiBody) => {
  const jsondeserializer = new Jsona();

  /**
   * Handle individual resource responses
   */
  return {
    values: jsondeserializer.deserialize(responseBody),
  };
};

export default deserializeResponse;
