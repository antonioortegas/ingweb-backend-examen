const express = require('express')
const router = express.Router()

const birdsController = require('../controllers/birdsController')

router.get('/', birdsController.getAllBirds)
router.post('/', birdsController.createBird)



router.get('/:id', birdsController.getBird)
router.put('/:id', birdsController.updateBird)
router.delete('/:id', birdsController.deleteBird)

module.exports = router