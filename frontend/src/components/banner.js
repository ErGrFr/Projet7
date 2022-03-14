import logo from '../assets/icon-left-font.png'
import '../styles/Banner.css'

function Banner() {
    return (
    <div className="mybanner">
        <img src={logo} alt='Groupomania' className='logo' />
        <a href="../../public/login.html">Login</a>
    </div>
    );
}
export default Banner