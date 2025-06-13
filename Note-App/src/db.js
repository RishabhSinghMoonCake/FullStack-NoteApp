import {DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync(':memory:')

//execute sql statement from strings

//For user info
db.exec(`
  CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
  `)


//For user data table
db.exec(`
  CREATE TABLE notes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    note-name TEXT,
    note-text TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )
  `)

export default db