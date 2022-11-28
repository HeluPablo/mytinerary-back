const User = require('../models/User');

const userController = {

    createUser: async (req, res) => {
        try {         
            let newUser = await User.create(req.body);
            res.status(201).json(
                {
                response: newUser,
                success: true,
                message: 'User created'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = userController;