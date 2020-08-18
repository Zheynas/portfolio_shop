import Jsona from 'jsona';

const serializeRequest = (requestBody: Record<string, any>) => {
  const jsonSerializer = new Jsona();
  return jsonSerializer.serialize({stuff: requestBody});
};

export default serializeRequest;
