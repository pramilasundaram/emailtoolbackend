const Review=require('../models/Reviewmodel')

const getReviews=async(req, res) => {
    const review=await Review.find({})
    res.status(200).json(Review)
    }
    
    //get all Reviews
    //POST  /api/Reviews
    const createReview=async(req, res) => {
        let review=await new Review();
        review.value=req.body.value;
        user.message=req.body.message;       
        const doc=await user.save();
        console.log(doc)
        res.json(doc)
    }

    const deleteReview=async(req, res) => {
        const review=await Review.deleteOne({_id:req.params.id})
        if(!review){
        res.status(404);
        throw new Error("Review not found")
        }   
        res.status(200).json({ message: `delete a Review at id: ${req.params.id}`,data:review })
    }
    
    module.exports={getReviews,createReview,deleteReview}