var express = require('express');
var router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('./../middleware/auth');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", async (req, res, next) => {
  try {
    //get input user
    const { first_name, last_name, email, password } = req.body;

    //validate user input
    if (!(email && password && first_name && password)) {
      res.status(400).send("All input is required");
    }

    //if user exist in database
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User already exist. Please login")
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    //create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword
    })

    //Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h"
      }
    )

    //save user token
    user.token = token;

    //return new user
    res.status(201).json(user);

  } catch (error) {
    console.log(error)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h"
        }
      )

      //save token
      user.token = token;

      res.status(200).json(user);
    }

    res.status(400).send("Invalid Credentials")

  } catch (error) {
    console.log(error)
  }
})

router.post("/welcome",auth,(req, res) => {
  res.status(200).send('Welcome 🙏');
})


module.exports = router;
