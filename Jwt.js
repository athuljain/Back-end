const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./JwtUserModel');
const router = express.Router();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

// User registration
router.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(409).json({ error: "Email already exists." });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await User.create({
            name: req.body.name,
            // location: req.body.location,
            email: req.body.email,
            password: hashedPassword
        });

        res.status(201).json({ success: true, newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "An error occurred" });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            const comparePwd = await bcrypt.compare(req.body.password, user.password);

            if (comparePwd) {
                const authToken = jwt.sign({ email: user.email }, jwtSecretKey, { expiresIn: '1d' });
                res.json({ success: true, authToken, user, userId: user._id });
            } else {
                res.status(400).json({ error: 'Incorrect password!', success: false });
            }
        } else {
            res.status(404).json({ error: 'User not found', success: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
});

module.exports = router;




// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('./JwtUserModel');
// const router = express.Router();

// // User registration
// router.post('/register', async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });

//         if (user) {
//             return res.status(409).json({ error: "Email already exists." });
//         }

//          const hashedPassword = await bcrypt.hash(req.body.password, 10);

//         const newUser = await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         });

//         res.status(201).json({ success: true, newUser });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, msg: "An error occurred" });
//     }
// });

// // User login
// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });

//         if (user) {
//             const comparePwd = await bcrypt.compare(req.body.password, user.password);

//             if (comparePwd) {
//                 res.json({ success: true, user, userId: user._id });
//             } else {
//                 res.status(400).json({ error: 'Incorrect password!', success: false });
//             }
//         } else {
//             res.status(404).json({ error: 'User not found', success: false });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: 'An error occurred' });
//     }
// });

// module.exports = router;

