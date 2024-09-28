import mongoose from 'mongoose';
import createDatabaseConnection from './createConnection';

const resetDatabase = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 1) {
    await createDatabaseConnection();
  }

  await mongoose.connection.db.dropDatabase();
};

export default resetDatabase;
