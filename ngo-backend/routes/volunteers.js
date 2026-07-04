const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST /api/volunteers  -> save a new volunteer signup (used by your website form)
router.post('/', async (req, res) => {
  try {
    const { name, city, skill, phone } = req.body;

    if (!name || !city || !skill || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
    }

    const volunteer = new Volunteer({ name, city, skill, phone });
    await volunteer.save();

    res.status(201).json({ message: 'Volunteer saved successfully!', volunteer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// GET /api/volunteers -> list all volunteer signups (used by the admin page)
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch volunteers.' });
  }
});

// PUT /api/volunteers/:id -> edit an existing volunteer record (used by the admin page)
router.put('/:id', async (req, res) => {
  try {
    const { name, city, skill, phone } = req.body;

    if (!name || !city || !skill || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
    }

    const updated = await Volunteer.findByIdAndUpdate(
      req.params.id,
      { name, city, skill, phone },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Volunteer not found.' });
    }

    res.json({ message: 'Updated successfully', volunteer: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update volunteer.' });
  }
});

// DELETE /api/volunteers/:id -> remove a volunteer record (used by the admin page)
router.delete('/:id', async (req, res) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not delete volunteer.' });
  }
});

module.exports = router;