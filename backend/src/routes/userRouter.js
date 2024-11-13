const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)

router.get('/:id/contacts', userController.getUserContacts)
router.post('/:id/contacts', userController.addContact)
router.delete('/:id/contacts/:contact', userController.deleteContact)

router.get('/:id', userController.getUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router