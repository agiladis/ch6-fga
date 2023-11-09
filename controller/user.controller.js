const qr = require('node-qr-image');

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

function MediaProcessingFiles(req, res) {
  const fileUrl = `${req.protocol}://${req.get('host')}/files/${
    req.file.filename
  }`;

  return res.status(200).json({
    data: fileUrl,
    message: 'success',
    status: 200,
    error: null,
  });

  return;
}

function GenerateQR(req, res) {
  const message = req.query.message;

  try {
    const pngSvg = qr.image(message, { type: 'png' });
    pngSvg.pipe(
      require('fs').createWriteStream(`${message.toLowerCase()}.png`)
    );

    // const pngString = qr.imageSync(message, { type: 'png' });
    res.status(200).json({
      data: pngSvg,
      message: 'success',
      status: 200,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      data: null,
      message: 'internal server error',
      status: 500,
      error: error.message,
    });
  }
}

module.exports = {
  MediaProcessingImage,
  MediaProcessingVideos,
  MediaProcessingFiles,
  GenerateQR,
};
