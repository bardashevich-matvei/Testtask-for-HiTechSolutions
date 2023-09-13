import { getDb } from './connect';

const defaultGenres = [{name: 'horror'}, {name: 'comedy'}]

export const createDefaultGenres = async () => {
  const db = await getDb();
  const data = await db.collection('genres').count();
  if (!data) {
    db.collection('genres').insertMany(defaultGenres);
  }
};