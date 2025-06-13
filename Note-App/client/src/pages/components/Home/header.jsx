import { useNavigate } from 'react-router'
import './header.css'
export default function Header()
{
  const navigate = useNavigate()
  function handleNewNote()
  {
    navigate('/note')
  }

  return(
    <header className='header-body'>
      <button onClick={handleNewNote} className='new-note-btn'>
        ➕New Note
      </button>
    </header>
  )
}