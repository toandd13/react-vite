import './header.css'
const Header = () => {
    return (
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/products">Product</a></li>
            <li><a href="/users">User</a></li>
        </ul>

    )
}
export default Header