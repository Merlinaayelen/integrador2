const router = require('express').Router()
const users = require("../controllers/usersCt")
const auth = require("../helpers/auth")

router.get("/login", users.getLoginForm)
router.post("/login", users.sendLoginForm)
router.get("/register", users.getRegisterForm)
router.post("/register", users.sendRegisterForm)
router.get("/logout", users.logout)
router.get("/settings", users.getSettings)
router.post("/settings", users.sendSettings)
router.get("/validate", auth, users.validateEmail)
router.get("/delete", auth, users.deleteUser)

module.exports = router;