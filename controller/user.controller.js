function MediaProcessingImage(req, res) {
  const imageUrl = `${req.protocol}://${req.get('host')}/images/${
    req.file.filename
  }`;

  return res.status(200).json({
    data: imageUrl,
    message: 'success',
    status: 200,
    error: null,
  });

  return;
}

function MediaProcessingVideos(req, res) {
  const videoUrl = `${req.protocol}://${req.get('host')}/videos/${
    req.file.filename
  }`;

  return res.status(200).json({
    data: videoUrl,
    message: 'success',
    status: 200,
    error: null,
  });

  return;
}
module.exports = { MediaProcessingImage, MediaProcessingVideos };
