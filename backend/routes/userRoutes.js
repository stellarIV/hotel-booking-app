const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/create-or-update', async (req, res) => {
    const { clerkId, email, name } = req.body;

    if (!clerkId || !email || !name) {
        return res.status(400).json({ message: 'Clerk ID, email, and name are required.' });
    }

    try {
        let user = await User.findOne({ clerkId });

        if (user) {
            user.email = email;
            user.name = name;
            user.updatedAt = Date.now();
        } else {
            user = new User({
                clerkId,
                email,
                name,
           });
        }

        await user.save();
        res.status(200).json({
            message: user.isNew ? 'User created successfully' : 'User updated successfully',
            user,
        });
    } catch (error) {
        console.error('Error creating or updating user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// GET - Get current user's information
router.get('/me', async (req, res) => {
  // Assuming you have user authentication setup, you can get user id from session
  const userId = req.user ? req.user.id : null; // Adjust as per your authentication logic

  if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
      const user = await User.findById(userId).select('email'); // Fetch only the email
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET - Get a user by clerkId
router.get('/:clerkId', async (req, res) => {
    try {
        const user = await User.findOne({ clerkId: req.params.clerkId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
module.exports = router;