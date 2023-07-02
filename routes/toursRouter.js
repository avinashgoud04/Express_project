const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTour,
  createTour,
  checkID,
  checkBody,
} = require('../controllers/tourController');

router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTour);

module.exports = router;
