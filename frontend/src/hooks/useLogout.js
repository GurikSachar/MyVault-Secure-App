import { useAuthContext } from '../hooks/useAuthContext'
import { useDocumentsContext } from '../hooks/useDocumentsContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch:documentsDispatch} = useDocumentsContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        documentsDispatch({type: 'SET_DOCUMENTS', payload: null})
    }

    return {logout}
}