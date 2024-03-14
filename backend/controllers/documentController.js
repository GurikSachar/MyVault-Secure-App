const mongoose = require('mongoose')
const document = require('../models/documentModel')

const getDocuments = async (req, res) => {
    const user_id = req.user._id
    
    const response = await document.find({user_id}).sort({ createdAt: -1 })

    if (!response) {
        return res.status(400).json({ error: 'Unable to obtain documents' })
    }

    if (response) {
        return res.status(200).json(response)
    }
}


const createDocument = async (req, res) => {
    const { title, username, password, category } = req.body

    let emptyFields = []

    if(!title){
        emptyFields.push(title)
    }

    if(!username){
        emptyFields.push(username)
    }

    if(!password){
        emptyFields.push(password)
    }

    if(!category){
        emptyFields.push(category)
    }
    
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill all fields'})
    }

    const user_id = req.user._id

    const response = await document.create({ title, username, password, category, user_id })

    if (!response) {
        return res.status(400).json({ error: 'Unable to insert document' })
    }

    if (response) {
        return res.status(200).json(response)
    }
}

const deleteDocument = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such document' })
    }

    const response = await document.findOneAndDelete({ _id: id })

    if (!response) {
        res.status(400).json({ error: 'Unable to delete document' })
    }

    if (response) {
        res.status(200).json(response)
    }
}

module.exports = {
    getDocuments,
    createDocument,
    deleteDocument
}

