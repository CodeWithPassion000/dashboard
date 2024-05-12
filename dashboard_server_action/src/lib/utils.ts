import mongoose from 'mongoose';

export const connectToDB = async () => {
  const connection: any = {
    isConnected: false
  };

  try {
    if (connection?.isConnected) return;
    if (process.env.MONGO) {
      const db = await mongoose.connect(process.env.MONGO);
        console.log('DB connected')
      connection.isConnected = db.connections[0].readyState;
    }

  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
};
