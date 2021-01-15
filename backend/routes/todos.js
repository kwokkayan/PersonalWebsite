const { Router } = require("express");
const controller = require("../controllers/todos");

const router = Router();

router.get("/", controller.getTodos);
router.post("/", controller.postTodos);
router.get("/:id", controller.getTodosId);
router.put("/:id", controller.putTodosId);
router.delete("/:id", controller.deleteTodosId);

module.exports = router;
