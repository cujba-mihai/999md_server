import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      const MONO_DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@999clonedev.gs1u1cg.mongodb.net/?retryWrites=true&w=majority`;

      return mongoose.connect(MONO_DB_CONNECTION_STRING);
    },
  },
];
