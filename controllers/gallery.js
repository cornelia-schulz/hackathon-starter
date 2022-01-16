/**
 * GET /
 * Info page.
 */

exports.getGallery = (req, res) => {
  res.render('gallery', {
    title: 'Gallery'
  });
};
