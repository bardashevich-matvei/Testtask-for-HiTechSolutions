import { getDb } from './connect';

const defaultGenres = [{name: 'horror'}, {name: 'comedy'}]

export const createDefaultGenres = async () => {
  const db = await getDb();
  db.collection('genres').insertMany(defaultGenres);
};