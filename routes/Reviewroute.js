const router = require('express').Router();

//import contact controller
const {createReview,getReviews,deleteReview}=require("../controller/ReviewController")


router.route("/").get(getReviews).post(createReview)

router.route("/:id").delete(deleteReview)

module.exports = router;