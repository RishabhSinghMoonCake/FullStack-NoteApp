import { useState,useEffect } from 'react'
import '../css/home.css'
import Header from './components/Home/header.jsx'
import NoteContainer from './components/Home/noteCont.jsx'

export default function Home()
{
  const apiBase = 'http://localhost:8000/noteAuth/'

  const [notes, setNotes] = useState([])
  const [noteId, setNoteId] = useState(1)

  let allNotes

  useEffect(() => {
      async function fetchNote() {
        try {
          const response = await fetch(apiBase + 'count', {
            headers:{'Authorization': localStorage.getItem('token')}
          })
          if (!response.ok) return
          const data = await response.json()
          
          setNoteId(data.count+1)

        } catch (error) {
          console.error(error)
        }
      }
      fetchNote()
    }, [])

  useEffect(()=>{
    async function fetchAllNotes()
    {
      try 
      {
        const response = await fetch(apiBase,{
          headers:{'Authorization':localStorage.getItem('token')}
        })
        if(!response.ok) return
        allNotes = await response.json()
        setNotes(allNotes)
      } catch (error) {
        console.error(error)
        return
      }
    }
    fetchAllNotes()
  }, [])


  

  return(
    <>
      <Header id={noteId}/>
      <div className='note-container'>
        {
          notes.map(note=>(
            <NoteContainer
              id={note.id}
              noteName = {note.note_name}
              text = {note.note_text}
            />
          ))
        }
        
      </div>
    </>
  )
}