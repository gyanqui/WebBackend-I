/* *************************************
*   Account Routes
************************************* */
// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")


// Route to build Login View
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Route to build registration view
router.get("/register", utilities.handleErrors(accountController.buildRegister))

// Route to register the account
// router.post('/register', utilities.handleErrors(accountController.registerAccount))

module.exports = router;