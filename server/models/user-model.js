const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure the password with bcrypt before saving it to the database
userSchema.pre("save", async function () {                //if we want to run a function everytime before saving a document in the DB, we would use pre-hook for that
  const user = this;                                      //'this' inside of a pre-save hook is the document that is about to be saved

  if (!user.isModified("password")) {
    next();                                               //next will forward it to saving the data in into the database process.
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateToken = async function() {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    }, process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    })
  } catch (error) {
    console.error(error);
  }
}

const UserModel = new mongoose.model("User", userSchema);
module.exports = UserModel;
