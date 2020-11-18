import { Link } from 'react-router-dom'
import '../assets/styles/button.css'

const Button = () => {
  return (
    <Link to='/'>
      <button className='btn'>Sign up</button>
    </Link>
  )
}

export default Button
