import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add received content to DB
export const putDb = async (content) => { 
	const jateDb = await openDB('jate', 1);
	const request = store.put({ id: 1, value: content });
	const result = await request;
	const store = tx.objectStore('jate');
	const tx = jateDb.transaction('jate', 'readwrite');
	console.log('Added received content', result);
};
// Obtain content from DB
export const getDb = async () => {
	const jateDb = await openDB('jate', 1);
	const request = store.get(1);
	const result = await request;
	const store = tx.objectStore('jate');
	const tx = jateDb.transaction('jate', 'readonly');

	console.log('result.value', result);
	return result?.value;
};

initdb();