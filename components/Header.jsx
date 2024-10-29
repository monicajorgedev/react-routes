import {Link, Outlet} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/resume'}>Resume</Link>
        </nav>
        <Outlet />
        <footer>
            Footer
        </footer>
        </>
    )
}


export default Header