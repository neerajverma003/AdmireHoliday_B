import express from 'express';
import uploadMedia from '../../middleware/mediaUploads.js';
import {
  createTextTestimonial,
  getTextTestimonials,
  toggleVerifyTestimonial,
  deleteTextTestimonial,
} from '../../controller/textTestimonials.controller.js';

const textTestimonialRouter = express.Router();

// Submit new text testimonial
textTestimonialRouter.post(
  '/submit',
  uploadMedia.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'trip_image', maxCount: 5 },
  ]),
  createTextTestimonial
);

// Fetch all text testimonials (admin)
textTestimonialRouter.get('/', getTextTestimonials);

// Toggle verify / toShow status
textTestimonialRouter.patch('/:id/verify', toggleVerifyTestimonial);

// Delete a text testimonial
textTestimonialRouter.delete('/:id', deleteTextTestimonial);

export default textTestimonialRouter;