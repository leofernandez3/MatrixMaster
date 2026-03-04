const express = require('express');
const router = express.Router();

const controller = require('../Controllers/controller');

router.get('/', controller.getTimeline);

module.exports = router;