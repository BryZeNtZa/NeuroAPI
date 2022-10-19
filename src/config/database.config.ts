import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?directConnection=true`,
  useCreateIndex: true,
}));
