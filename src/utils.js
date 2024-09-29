// db.js
import Dexie from 'dexie';

const db = new Dexie('MyDatabase');
db.version(1).stores({
  columnVisibility: 'id,value',
});

export default db;
