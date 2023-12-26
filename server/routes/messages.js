const { addMessage, getMessages } = require("../controllers/messageController");
const { protect } = require("../middlewares/authMiddleWare");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", protect, getMessages);

module.exports = router;
