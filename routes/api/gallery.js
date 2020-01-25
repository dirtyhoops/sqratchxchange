const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Gallery = require('../../models/Gallery');

// @route     GET api/gallery
// @desc      Gallery route
// @access    Public
router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find().sort({ date: -1 });

    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/gallery/random
// @desc      Gallery route
// @access    Public
router.get('/random', async (req, res) => {
  try {
    const items = await Gallery.aggregate([{ $sample: { size: 5 } }]);

    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/gallery
// @desc      Add an item to the gallery
// @access    Public
router.post(
  '/',
  [
    check('itemname', 'Name is required')
      .not()
      .isEmpty(),
    check('description', 'Description is required')
      .not()
      .isEmpty(),
    check('type', 'Type is required')
      .not()
      .isEmpty(),
    check('imagelink', 'Image link is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newItem = new Gallery({
        name: req.body.itemname,
        description: req.body.description,
        type: req.body.type,
        image: req.body.imagelink
      });

      // Saves the new item to the DB
      await newItem.save();

      res.json({ msg: 'Successfully added a new item to the gallery' });
    } catch (err) {
      // CHANGE THIS TO DISPLAY WHAT THE ERROR IS
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET api/gallery/:id
// @desc      Get item by ID
// @access    Public
router.get('/:id', async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.json(item);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/gallery
// @desc      Delete an item
// @access    Public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);

    // Have a login later and make sure that we check if the admin is logged in before deleting an item
    await item.remove();

    res.json({ msg: 'Item is removed' });
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.status(500).send('Server Error');
  }
});

module.exports = router;
