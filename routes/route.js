const router = require('express').Router();
const userRouter = require('./user.route');

router.use('/media', userRouter);
module.exports = router;
