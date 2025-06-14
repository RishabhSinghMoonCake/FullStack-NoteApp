import { useNavigate } from 'react-router'
import './header.css'
export default function Header(props)
{
  const navigate = useNavigate()
  function handleNewNote()
  {
    if(!Number.isInteger(props.id))
    {
      navigate('/home')
    }
    navigate(`/note/${props.id}`)
  }

  return(
    <header className='header-body'>
      <button onClick={handleNewNote} className='new-note-btn'>
        ➕New Note
      </button>
    </header>
  )
}