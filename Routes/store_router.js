const express = require('express');
const router = express.Router();
const  storeController = require('../Controller/store_controller')

router.get('/nearby', storeController.getNearbyStores);
router.post('/', storeController.createPlace);


module.exports = router;