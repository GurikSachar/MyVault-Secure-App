import { useEffect, useState } from "react"
import DocumentDetails from '../components/DocumentDetails'
import { useDocumentsContext } from '../hooks/useDocumentsContext'
import { useAuthContext } from '../hooks/useAuthContext'

function DocumentForm() {
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')
    const { documents, dispatch } = useDocumentsContext()
    const { user } = useAuthContext()

    const handleClick = async (e) => {
        e.preventDefault()

        if(!user){
            return 
        }
        
        const document = { title, username, password, category }

        const response = await fetch('https://myvault-secure-app-api.onrender.com/api/documents', {
            method: 'POST',
            body: JSON.stringify(document),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setTimeout(() => {setError('')},2000)
        }

        if (response.ok) {
            console.log(json)
            setTitle('')
            setUsername('')
            setPassword('')
            setCategory('')
            dispatch({ type: 'CREATE_DOCUMENT', payload: json })
        }
    }

    useEffect(() => {
        const fetchDocuments = async () => {
            const docs = await fetch('https://myvault-secure-app-api.onrender.com/api/documents', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await docs.json()

            if (docs.ok) {
                dispatch({ type: 'SET_DOCUMENTS', payload: json })
            }
        }

        if (user) {
            fetchDocuments()
        }
    }, [dispatch, user])

    return (
        <>
            <div className="flex justify-center ml-8">
                <div className="inline-block justify-center mt-10 h-64 overflow-scroll overflow-x-hidden">
                    <div>
                        {documents && documents.map((document) => (
                            <DocumentDetails key={document._id} document={document} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mr-12 items-center mt-8">
                <div className="flex-col justify-center items-center h-60 font-Anta">
                {error && <div className='ml-10 m-2 text-center text-xl w-60 bg-red-200 border-red-700 border-2 p-2 rounded-xl text-red-700'>{error}</div>}
                    <div className="flex text-white justify-center items-center w-80 h-16 bg-red-600 rounded-t-2xl text-3xl">
                        Enter Credentials
                    </div>
                    <div className="flex justify-center items-center w-80 h-80 p-4 rounded-b-2xl text-black bg-gray-300">
                        <form>
                            <label className="text-2xl">Title:</label><br />
                            <input
                                className="border-xl"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            /><br />
                            <label className="text-2xl">Username:</label><br />
                            <input
                                className="border-xl"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            /><br />
                            <label className="text-2xl">Password:</label><br />
                            <input
                                className="border-xl"
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            /><br />
                            <label className="text-2xl">Category:</label><br />
                            <input
                                className="border-xl"
                                type="text"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            /><br />
                            <button className="hover:bg-red-700 duration-100 ml-16 text-white mt-4 bg-red-600 p-2 rounded-xl text-xl" onClick={handleClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentForm
