const e = require("express");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("yoooo??");
  } catch (error) {
    console.log(error);
  }
};


//----------------------------
//  USER REGISTRATION LOGIC
//----------------------------


const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email }); //findOne cannot be used without await

    if (userExist) {
      return res.status(400).json({ msg: "email alrdy exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res
      .status(201)
      .json({
        message: "user successfully registered",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//------------------
//  USER LOGIN LOGIC
//------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email }); //findOne cannot be used without await

    if (!userExist) {
      return res.status(400).json({ message: "INVALID CREDENTIALS" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    console.log(isPasswordValid);

    if (isPasswordValid) {
      res
        .status(200)
        .json({
          message: "Login Successfull",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    } else if(!isPasswordValid || password=="") {
      res.status(401).json({ msg: "Invalid Email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("internal server error");
  } 
}; 

//------------------
// to get users data USER LOGIC
//------------------

const user = async (req, res) => {
  try {
    const userData = req.user
    return res.status(200).json({msg:userData})
  } catch (error) {
    console.log("err getting the users data from the user route",error);
  }
}

module.exports = { home, register, login, user };
