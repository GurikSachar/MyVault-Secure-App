import { useAuthContext } from "../hooks/useAuthContext"
import { useDocumentsContext } from "../hooks/useDocumentsContext"

const DocumentDetails = ({ document }) => {
    const { dispatch } = useDocumentsContext()
    const { user } = useAuthContext()


    if (!user) {
        console.log('Not authorized user')
        return
    }

    const handleDelete = async () => {
        const response = await fetch(process.env.API_URL + 'api/documents/' + document._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            console.log(json.error)
        }

        if (response.ok) {
            dispatch({ type: 'DELETE_DOCUMENT', payload: json })
        }
    }

    return (
        <>
            <div className="flex-col items-center text-white mt-2 mb-20 w-96 h-48 text-center rounded-2xl font-Anta">
                <div className="flex justify-center items-center w-80 h-16 bg-red-600 rounded-t-2xl text-2xl">
                    {document.title}
                </div>

                <div className="flex-col justify-center items-center w-80 h-42 p-4 bg-white rounded-b-2xl text-black text-xl">
                    Username: {document.username}<br />
                    Password: {document.password}<br />
                    Category: {document.category}<br />
                    <button className="hover:bg-red-700 duration-100 text-white m-2 bg-red-600 p-2 rounded-xl" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default DocumentDetails
