const birdsController = require('../controllers/birdsController')

// basic CRUD operations for birds
const getAllBirds = async (req, res) => {
    res.send('All birds')
}

const getBird = async (req, res) => {
    res.send('One bird')
}

const createBird = async (req, res) => {
    res.send('Create bird')
}

const updateBird = async (req, res) => {
    res.send('Update bird')
}

const deleteBird = async (req, res) => {
    res.send('Delete bird')
}

module.exports = {
    getAllBirds,
    getBird,
    createBird,
    updateBird,
    deleteBird,
}