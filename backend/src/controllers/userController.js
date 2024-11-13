const User = require('../models/userModel')

// basic CRUD operations for users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users).status(200)
    } catch (error) {
        console.log('Error getting users:', error);
        res.status(500).json({ message: 'Error getting users' });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user).status(200)
    } catch (error) {
        console.log('Error getting user:', error);
        res.status(500).json({ message: 'Error getting user' });
    }
}

const createUser = async (req, res) => {
    try {
        const { email, nombre, contactos } = req.body

        if(!email || !nombre || !contactos) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newUser = new User({
            email,
            nombre,
            contactos
        })

        await newUser.save()

        res.json(newUser).status(201)
    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });
        
        if(!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser).status(200)
    } catch (error) {
        console.log('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await User.findByIdAndDelete(id)
        if(!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(deletedUser).status(200)
    } catch (error) {
        console.log('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user' });
    }
}

const getUserContacts = async (req, res) => {
    try {
        // filter by partial email
        filter = {}
        if(req.query.email) {
            filter.email = req.query.email
        }

        const { id } = req.params
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // get all the contacts from that user that contain the partial email
        const contacts = user.contactos.filter(contact => contact.match(filter.email))
        res.json(contacts).status(200)
    } catch (error) {
        console.log('Error getting user contacts:', error);
        res.status(500).json({ message: 'Error getting user contacts' });
    }
}

const addContact = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { email } = req.body

        if(!email) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        user.contactos.push(email)
        await user.save()

        res.json(user).status(200)
    } catch (error) {
        console.log('Error adding contact:', error);
        res.status(500).json({ message: 'Error adding contact' });
    }
}

const deleteContact = async (req, res) => {
    // router.delete('/:id/contacts/:contact', userController.deleteContact)
    // contacts are stored as an array of string

    try {
        const { id, contact } = req.params
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const contactIndex = user.contactos.indexOf(contact)
        if(contactIndex === -1) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        user.contactos.splice(contactIndex, 1)
        await user.save()

        res.json(user).status(200)
    } catch (error) {
        console.log('Error deleting contact:', error);
        res.status(500).json({ message: 'Error deleting contact' });
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserContacts,
    addContact,
    deleteContact,
}