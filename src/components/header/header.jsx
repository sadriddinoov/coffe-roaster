import './header.scss'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import burger from '../../assets/burger.svg'

function Header() {
    return (
       <header className='header'>
        <div className="container">
            <div className="header_container">
                <img className='header_img' src={Logo} alt="" />

                <ul className="header_list">
                   <Link className='header_link' to={'/'}>
                   Home
                   </Link>

                   <Link className='header_link' to={'/about'}>
                   About Us
                   </Link>

                   <Link className='header_link' to={'/plan'}>
                    Create Your Plan
                   </Link>
                </ul>

                <Link className='header_none' to={'/menyu'}>
                    <button className='hero_r-btn'>
                        <img src={burger} alt="" />
                    </button>
                </Link>
            </div>
        </div>
       </header>
    )
}

export default Header