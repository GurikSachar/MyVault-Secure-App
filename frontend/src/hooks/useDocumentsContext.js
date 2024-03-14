import { useContext } from "react";
import { DocumentsContext } from '../context/DocumentsContext'

export const useDocumentsContext = () => {
    const context = useContext(DocumentsContext)

    if (!context) {
        throw Error('useDocumentsContex must be used inside an DocumentsContextProvider')
    }

    return context
}