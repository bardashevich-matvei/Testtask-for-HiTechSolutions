import { getDb } from './connect';
import { v4 as uuidv4 } from 'uuid';


const defaultGenres = [{_id: uuidv4(), name: 'horror'}, {_id: uuidv4(), name: 'comedy'}];

export const createDefaultGenres = async () => {
  const db = await getDb();
  const data = await db.collection('genres').count();
  if (!data) {
    db.collection('genres').insertMany(defaultGenres);
  }
};