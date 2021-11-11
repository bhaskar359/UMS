const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
// const clientController = require('../controllers/clientController');

router.get('/',userController.view);
router.post('/',userController.find);

// router.get('',(req,res) => {
//     res.render('home');
// });

module.exports = router;