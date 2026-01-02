import express from 'express';

import {
  getAllItinerary,
  getExclusivePackages,
  getWeekendTrendingPackages,
  getWeekendGatewayDestinations,
  getInternationalItinerary,
} from '../../controller/itineraryController.js';
const router = express.Router();

router.get('/', getAllItinerary);
router.get('/weekend-gateway', getWeekendGatewayDestinations);
router.get('/weekend', getWeekendTrendingPackages);
router.get('/exclusive', getExclusivePackages);
router.get('/international', getInternationalItinerary);

export default router;
