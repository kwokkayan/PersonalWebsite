const { Router } = require("express");
const controller = require("../controllers/bills");

const router = Router();

router.get("/", controller.getBills);
router.post("/", controller.postBills);
router.get("/:id", controller.getBillsId);
router.put("/:id", controller.putBillsId);
router.delete("/:id", controller.deleteBillsId);

module.exports = router;
