const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// show all comments
router.get('/', (req,res) => {
    Comments.findAll({})
    .then(commentsData => res.json(commentsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
    Comments.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(commentsData => res.json(commentsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//leave new comment
router.post('/', async (req, res) => {
   try {
    const newComments = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentsData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!commentsData) {
      res.status(404).json({ message: '404 Blog ID not found' });
      return;
    }
    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;