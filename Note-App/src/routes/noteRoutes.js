import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const prep = db.prepare('SELECT * FROM notes WHERE user_id = ?')
    const allNotes = prep.all(req.userId)
    res.json(allNotes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

router.get('/count', (req, res) => {
  try {
    const stmt = db.prepare('SELECT COUNT(*) AS total FROM notes WHERE user_id = ?');
    const result = stmt.get(req.userId);
    res.json({ count: result.total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/saveNote', (req, res) => {
  const { noteId, noteName, noteText } = req.body

  try {
    const availableNotes = db.prepare('SELECT * FROM notes WHERE id = ?')
    const presentNote = availableNotes.get(noteId)

    if (!presentNote) {
      const newSave = db.prepare('INSERT INTO notes (id, note_name, note_text, user_id) VALUES (?, ?, ?, ?)')
      newSave.run(noteId, noteName, noteText, req.userId)
      res.sendStatus(201)
    } else {
      const updatedSave = db.prepare('UPDATE notes SET note_name = ?, note_text = ? WHERE id = ?')
      updatedSave.run(noteName, noteText, noteId)
      res.sendStatus(200)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
})

export default router
