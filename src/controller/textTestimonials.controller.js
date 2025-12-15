import textTestimonialModel from '../models/textTestimonial.model.js';

export const createTextTestimonial = async (req, res) => {
  try {
    const { name, location, rating, travelDate, destination, message, toShow } = req.body;
    const profileImage = req.files?.profileImage ? req.files.profileImage[0].path : null;
    const trip_image = req.files?.trip_image ? req.files.trip_image.map((file) => file.path) : [];

    console.log('Creating testimonial with data:', { name, location, rating, travelDate, destination, message, toShow, profileImage, trip_image });

    const newTestimonial = new textTestimonialModel({
      name,
      location,
      rating,
      travelDate,
      destination,
      profileImage,
      trip_image,
      message,
      toShow: toShow === 'true' || toShow === true || false,
    });
    const savedTestimonial = await newTestimonial.save();
    console.log('Testimonial saved:', savedTestimonial);
    res.status(201).json({ success: true, data: savedTestimonial });
  } catch (error) {
    console.error('Error creating text testimonial:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
  }
};

// Fetch all text testimonials (for admin list)
export const getTextTestimonials = async (req, res) => {
  try {
    const testimonials = await textTestimonialModel.find();
    return res.status(200).json({ success: true, data: testimonials });
  } catch (error) {
    console.error('Error fetching text testimonials:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Toggle the `toShow` / verification flag for a testimonial
export const toggleVerifyTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { toShow } = req.body;
    const updated = await textTestimonialModel.findByIdAndUpdate(
      id,
      { toShow },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    console.error('Error toggling testimonial verify:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
// Delete a text testimonial
export const deleteTextTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await textTestimonialModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    return res.status(200).json({ success: true, message: 'Testimonial deleted successfully', data: deleted });
  } catch (error) {
    console.error('Error deleting text testimonial:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};