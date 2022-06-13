import express from 'express';

import { TrackController } from '../../controllers/TrackController';

const trackController = new TrackController();

var router = express.Router();

router.use(express.json())

router.get('/', (req, res) => { 
  return res.json({
    message: 'Hello World!'
  })
})

router.post('/track', trackController.execute)

module.exports = router;