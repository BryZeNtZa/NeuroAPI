import { registerAs } from '@nestjs/config';

export default registerAs('security', () => ({
  key: process.env.API_KEY,
  expires: process.env.API_KEY_EXPIRES,
}));
