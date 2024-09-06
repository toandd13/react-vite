import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <ul>
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/users">User</Link></li>
        </ul>

    )
}
export default Header