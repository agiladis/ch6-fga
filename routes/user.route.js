const router = require('express').Router();
const storage = require('../lib/multer');
const {
  MediaProcessingImage,
  MediaProcessingVideos,
} = require('../controller/user.controller');

router.post('/images', storage.image.single('images'), MediaProcessingImage);
router.post('/videos', storage.video.single('videos'), MediaProcessingVideos);

module.exports = router;
