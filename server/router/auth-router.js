const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller")
const validate = require("../middlewares/validate-middleware")
const {signupSchema, loginSchema} = require("../validator/auth-validator");
const contactForm = require("../controller/contact-controller");

router.route("/").get(authcontrollers.home);

router.route('/register').post(validate(signupSchema), authcontrollers.register)
router.route('/login').post(validate(loginSchema), authcontrollers.login)
router.route('/contact').post(contactForm)





module.exports = router;
