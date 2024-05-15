import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/">
                <div>Main</div>
            </Link>
            <Link to="/profile">
                <div>Profile</div>
            </Link>
        </div>
    )
}

export default Nav