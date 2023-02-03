import * as crypto from 'crypto';

export default function encrypt(password: string, salt: string): string {
  let key: string;

  try {
    key = crypto
      .pbkdf2Sync(password, salt, 100000, 512, 'sha512')
      .toString('hex');
  } catch (err) {
    throw err;
  }
  return key;
}
