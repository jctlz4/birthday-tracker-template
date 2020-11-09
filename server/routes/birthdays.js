const router = require('express').Router();
const {
  getAllBirthdays,
  updateBirthday,
  createBirthday,
  deleteBirthdays
} = require('../controllers/birthdays');

router.get('/', getAllBirthdays);
router.patch('/:id', updateBirthday);
router.post('/', createBirthday);
router.delete('/:id', deleteBirthdays);

module.exports = router;
