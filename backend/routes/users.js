const { Router } = require("express");
const controller = require("../controllers/users");

const router = Router();

router.post("/login", controller.loginPost);
router.post("/logout", controller.logoutPost);
router.post("/signup", controller.signupPost);

module.exports = router;
