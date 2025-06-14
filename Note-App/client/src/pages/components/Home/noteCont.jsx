import { useNavigate } from 'react-router'
import './noteCont.css'
export default function NoteContainer(props)
{
  const noteName = props.noteName || "New Note"
  const text = props.text
  const id = props.id || 1

  const navigate = useNavigate()

  function EditButton()
  {
    navigate(`/note/${id}`)
  }

  return (
    <div className='note-cont'>
      <h1>{noteName.substring(0,15)}</h1>
      <p>{text.substring(0,20)}...</p>
      <div>
        <button onClick={EditButton}>Edit</button>
      </div>
    </div>
  )
}