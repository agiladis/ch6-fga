const router = require('express').Router();
const storage = require('../lib/multer');
const { MediaProcessing } = require('../controller/user.controller');

router.post('/images', storage.image.single('images'), MediaProcessing);

module.exports = router;
