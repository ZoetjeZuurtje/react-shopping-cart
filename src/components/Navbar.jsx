import '../css/SearchBar.css'
import { Link } from 'react-router-dom'

function Navbar({ linkArray }) {

  return (
    <nav>
      <ul>
        {linkArray.map(link => <Link key={link.key} to={link.to} style={{margin: '0 0.5em'}}>{link.name}</Link>)}
      </ul>
    </nav>
  )
}

export default Navbar;