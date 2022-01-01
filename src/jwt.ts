import * as CryptoJS from 'crypto-js';

export const base64url = (source: any): string => {
  let encodedSource = CryptoJS.enc.Base64.stringify(source);

  encodedSource = encodedSource.replace(/=+$/, '');

  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
};

export const generateJWTToken = (payload: any, secret: string): string => {
  // Define token header
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  // Stringify and encode the header
  const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
  const encodedHeader = base64url(stringifiedHeader);

  // Stringify and encode the payload
  const stringifiedPayload = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
  const encodedPayload = base64url(stringifiedPayload);

  // Sign the encoded header and mock-api
  let signature: any = encodedHeader + '.' + encodedPayload;
  signature = CryptoJS.HmacSHA256(signature, secret);
  signature = base64url(signature);

  // Build and return the token
  return encodedHeader + '.' + encodedPayload + '.' + signature;
};

export const verifyJWTToken = (token: string, secret: string): boolean => {
  // Split the token into parts
  const parts = token.split('.');
  const header = parts[0];
  const payload = parts[1];
  const signature = parts[2];

  // Re-sign and encode the header and payload using the secret
  const signatureCheck = base64url(CryptoJS.HmacSHA256(header + '.' + payload, secret));

  // Verify that the resulting signature is valid
  return signature === signatureCheck;
};

export const decodeToken = (token: string): any => {
  // Return if there is no token
  if (!token) {
    return null;
  }

  // Split the token
  const parts = token.split('.');

  if (parts.length !== 3) {
    throw new Error(
      "The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.",
    );
  }

  // Decode the token using the Base64 decoder
  const decoded = urlBase64Decode(parts[1]);

  if (!decoded) {
    throw new Error('Cannot decode the token.');
  }

  return JSON.parse(decoded);
};

const urlBase64Decode = (str: string): string => {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0: {
      break;
    }
    case 2: {
      output += '==';
      break;
    }
    case 3: {
      output += '=';
      break;
    }
    default: {
      throw Error('Illegal base64url string!');
    }
  }
  return b64DecodeUnicode(output);
};

const b64DecodeUnicode = (str: any): string => {
  return decodeURIComponent(
    Array.prototype.map
      .call(b64decode(str), (c: any) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  );
};

const b64decode = (str: string): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';

  str = String(str).replace(/=+$/, '');

  if (str.length % 4 === 1) {
    throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  }

  /* eslint-disable */
  for (
    // initialize result and counters
    let bc = 0, bs: any, buffer: any, idx = 0;
    // get next character
    (buffer = str.charAt(idx++));
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer &&
    ((bs = bc % 4 ? bs * 64 + buffer : buffer),
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  /* eslint-enable */

  return output;
};

export const isBearerToken = (token: string, secret: string): boolean => {
  try {
    const split = token.split(' ');
    return split[0] === 'Bearer' && verifyJWTToken(split[1], secret);
  } catch (e) {
    return false;
  }
};

export const extractJwtFromBearerToken = (token: string): string => {
  return token.split(' ')[1];
};
