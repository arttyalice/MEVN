const app = require('express')
const router = app.Router()

const User = require('../../models/User.js')

// @route   post api/items
// @desc    Insert a items
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user));
});

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email
    });

    newUser.save().then(item => res.json(item))
});

module.exports = router