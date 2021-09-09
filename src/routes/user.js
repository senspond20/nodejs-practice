const router = require('express').Router();


router.get("/", (req, res,next)=>{
    res.json({msg :"user"})
    // next();
})

module.exports = router;