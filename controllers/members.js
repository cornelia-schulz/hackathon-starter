const User = require('../models/User');
/**
 * GET /members
 * Contact form page.
 */
 exports.getMembers = (req, res) => {
  const unknownUser = !(req.user);
  // const { user } = req;
  User.find((err, users) => {
    if (unknownUser) {
      res.redirect('/login');
    } else {
      res.render('members', {
        title: 'Members',
        unknownUser,
        users
      });
    }
  });
};

exports.getMember = (req, res) => {
  //todo get one user by username or userid
  const name = (req.name);
  res.render('members')
};
