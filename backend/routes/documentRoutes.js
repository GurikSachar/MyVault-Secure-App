const {getDocuments, createDocument, deleteDocument} = require('../controllers/documentController')
const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', getDocuments)

router.post('/', createDocument)

router.delete('/:id', deleteDocument)

module.exports = router