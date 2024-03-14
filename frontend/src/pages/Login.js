import { useState } from "react"
import { useLogin } from '../hooks/useLogin'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleClick = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="flex justify-center items-center mt-32">
            <div className="flex-col justify-center items-center h-60 font-Anta">
                <div className="flex text-white justify-center items-center w-80 h-16 bg-red-600 rounded-t-2xl text-3xl">
                    Login
                </div>
                <div className="flex justify-center items-center w-80 h-48 p-4 rounded-b-2xl text-black bg-gray-300">
                    <form>
                        <label className="text-2xl">Email:</label><br />
                        <input
                            className="border-xl"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br />
                        <label className="text-2xl">Password:</label><br />
                        <input
                            className="border-xl"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br />
                        <button className="hover:bg-red-700 duration-200 ml-16 text-white mt-2 bg-red-600 p-2 rounded-xl" onClick={handleClick} disabled={isLoading}>Submit</button>
                    </form>
                </div>
                {error && <div className='ml-10 m-2 text-center text-xl w-60 bg-red-200 border-red-700 border-2 p-2 rounded-xl text-red-700'>{error}</div>}
            </div>
        </div>
    )
}

export default Login