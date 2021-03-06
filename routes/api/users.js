const express = require('express');
const router = express.Router();

//express-validator: requires to express-validator/check are deprecated.You should just use require("express-validator") instead.

const { check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   register user
// @access Public

router.post('/', [
    check('name','Name is required ').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','please enter a password with 6 or more characters').isLength({ min: 6})

],
    (req,res) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() });
        }

    res.send('user route ');
}
);

module.exports = router;