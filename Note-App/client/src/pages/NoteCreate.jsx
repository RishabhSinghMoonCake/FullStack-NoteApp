import { useNavigate } from 'react-router'
import '../css/noteCreate.css'
import React, { useEffect, useState } from 'react'

export default function NoteCreate() {
  const url = window.location.href
  const id = parseInt(url.substring(url.lastIndexOf('/') + 1), 10)

  const [noteName, setNoteName] = useState(`New Note-${id}`)
  const [noteText, setNoteText] = useState('')
  const apiBase = 'http://localhost:8000/noteAuth/'
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await fetch(apiBase, {
          headers:{'Authorization': localStorage.getItem('token')}
        })
        if (!response.ok) return
        const json = await response.json()
        const match = json.find(element => element.id === id)
        if (match) {
          setNoteName(match.note_name)
          setNoteText(match.note_text)
        } else {
          setNoteName(`New Note - ${id}`)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchNote()
  }, [id])

  function handleNameChange(e) {
    setNoteName(e.target.value)
  }

  function handleNoteChange(e) {
    setNoteText(e.target.value)
  }

  async function saveNote() {
    try {
      const response = await fetch(apiBase + 'saveNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({
          noteId: id,
          noteName: noteName,
          noteText: noteText,
        }),
      })

      if (!response.ok) {
        console.error('Failed to save note')
        return
      }

      navigate('/home')
    } catch (error) {
      console.error('Error saving note:', error)
    }
  }

  return (
    <div className='container'>
      <nav>
        <button onClick={() => navigate('/home')}>Home</button>
        <input value={noteName} onChange={handleNameChange} type="text" />
      </nav>
      <section className="note-area">
        <textarea
          value={noteText}
          onChange={handleNoteChange}
          rows={45}
          id="text-box-id"
          placeholder='Start Typing Here'
        />
      </section>

      <button className='save-btn' onClick={saveNote}>
        Save
      </button>
    </div>
  )
}
