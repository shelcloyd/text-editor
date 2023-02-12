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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // creates a connection to the database
  const db = await openDB('jate', 1);
  // creates a new transaction specifying which database and what privileges to use
  const tx = db.transaction('jate', 'readwrite');
  // opens desired object store
  const store = tx.objectStore('jate');
  // uses .add() method to pass content into the object store
  const request = store.add({ content })
  // confirmation of request
  const response = await request;
  console.log('successfully saved', response);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // creates a connection to the database
  const db = await openDB('jate', 1);
  // creates a new transaction specifying which database and what privileges to use
  const tx = db.transaction('jate', 'readonly');
  // opens desired object store
  const store = tx.objectStore('jate');
  // uses .getAll() method to get all data from database
  const request = store.getAll();
  // confirmation of request
  const response = await request;
  console.log('response: ', response);
  return response;
};

initdb();
