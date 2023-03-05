import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const MONGO_DB_CONNECTION_STRING = process.env.MONGODB_URL;
      mongoose.set('strictQuery', false);

      return mongoose.connect(MONGO_DB_CONNECTION_STRING);
    },
  },
];
