const router = require('express').Router();
const storage = require('../lib/multer');
const {
  MediaProcessingImage,
  MediaProcessingVideos,
  MediaProcessingFiles,
} = require('../controller/user.controller');

router.post('/images', storage.image.single('images'), MediaProcessingImage);
router.post('/videos', storage.video.single('videos'), MediaProcessingVideos);
router.post('/files', storage.file.single('files'), MediaProcessingFiles);

module.exports = router;
