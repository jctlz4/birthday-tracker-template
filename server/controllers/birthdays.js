const Birthday = require('../db/models/birthday');

const getAllBirthdays = (req, res) => {
  Birthday.find()
    .then((birthday) => res.status(200).json(birthday))
    .catch((err) => res.status(500).json('Error: ' + err));
};

const updateBirthday = async (req, res) => {
  const birthday_id = req.params.id;
  let obj = req.body;
  console.log(obj);
  try {
    await Birthday.findByIdAndUpdate(user_id, obj, { new: true }, function (
      err,
      docs
    ) {
      if (err) {
        console.log(err);
      } else {
        console.log('Updated Birthday : ', docs);
        return res.status(201).json(docs);
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createBirthday = (req, res) => {
  const birthday = new Birthday(req.body);
  birthday
    .save()
    .then((birthday) => {
      res.status(201).json(birthday);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};

const deleteBirthdays = async (req, res) => {
  const birthday = req.params.id;
  console.log(birthday);

  try {
    await Birthday.findOneAndDelete({ _id: Birthday }).then(() => {
      return res.status(204).json({ message: 'deleted!' });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateBirthday,
  createBirthday,
  deleteBirthdays,
  getAllBirthdays
};
