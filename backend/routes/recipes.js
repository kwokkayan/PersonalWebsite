const { Router } = require("express");
const controller = require("../controllers/recipes");

const router = Router();

router.get("/", controller.getRecipes);
router.post("/", controller.postRecipes);
router.get("/:id", controller.getRecipesId);
router.put("/:id", controller.putRecipesId);
router.delete("/:id", controller.deleteRecipesId);

module.exports = router;
