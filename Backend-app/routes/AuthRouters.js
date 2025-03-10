const router =require('express').Router();
const {signup, login} = require('../Controllers/AuthControllers');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);  


module.exports=router;