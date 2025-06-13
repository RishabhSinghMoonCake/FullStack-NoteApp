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
  
  `)

export default db