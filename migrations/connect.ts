import { MongoClient } from 'mongodb';

export const getDb = async () => {
  const client: any = await MongoClient.connect('mongodb://127.0.0.1:27017/Testtask');
  return client.db();
};