import { Link } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="flex items-center p-4 bg-red-600 font-Anta top-0">
            <img className="ml-4 w-14 h-14" src="https://cdn-icons-png.freepik.com/512/44/44594.png" alt="Lock Icon" />
            <div className="grow text-3xl cursor-default">MyVault</div>
            {!user && <div className="text-2xl mr-8 hover:text-white cursor-pointer duration-150"><Link to="/">Home</Link></div>}
            {!user && <div className="text-2xl mr-8 hover:text-white cursor-pointer duration-150"><Link to="/signup">Sign Up</Link></div>}
            {!user && <div className="text-2xl mr-8 hover:text-white cursor-pointer duration-150"><Link to="/login">Login</Link></div>}
            {user && <div className="text-xl mr-8 cursor-default">Welcome Back! {user.email}</div>}
            {user && <div className="text-2xl mr-8 hover:text-white cursor-pointer duration-150"><Link to="/login" onClick={handleClick}>Logout</Link></div>}
        </div>
    )
}

export default Navbar