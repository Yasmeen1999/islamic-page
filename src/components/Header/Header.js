import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-dark'>
            <div className='d-flex justify-content-between p-3 text-white font-weight-bold'>
                <div>Mohammed Mudassir Sulaimani</div>
                <Link to='/contact' className='text-white text-decoration-none'>Contact</Link>
            </div>
        </div>
    )
}

export default Header;