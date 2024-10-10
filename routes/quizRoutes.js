const router=require("express").Router()
const { CreateQuiz, DeleteQuiz, UpdateQuiz, GetByIdQuiz, SubmitAnswer } = require("../controller/quizController");
const { authenticate, IsAdmin, IsUser } = require("../middleware/authenticate ");



router.post("/addquiz", authenticate,IsAdmin, CreateQuiz);
router.delete("/:id", authenticate, IsAdmin, DeleteQuiz);
router.patch("/:id", authenticate, IsAdmin, UpdateQuiz);
router.get("/:id", authenticate, IsUser, GetByIdQuiz);
router.post("/:quizId/submit", authenticate, IsUser,SubmitAnswer);

module.exports=router;