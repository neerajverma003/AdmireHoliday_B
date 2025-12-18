import VideoTestimonialModel from '../../models/testimonialVideos.model.js';
import { formatCountryName } from '../../utils.js';

export const testimonialVideo = async (req, res) => {
  const { title, visibility, location } = req.body;
  try {
    // Validate required fields
    if (!title || !visibility || !location) {
      return res.status(400).json({
        success: false,
        message: 'All fields (title, visibility, location) are required'
      });
    }

    // Validate file upload
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Video file is required'
      });
    }

    const newTestimonial = new VideoTestimonialModel({
      video_url: req.file.path,
      title,
      visibility: formatCountryName(visibility),
      location,
    });

    await newTestimonial.save();

    return res.status(200).json({
      success: true,
      message: 'Testimonial video uploaded successfully',
      data: newTestimonial
    });
  } catch (error) {
    console.error(`Testimonial video error: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while uploading testimonial video'
    });
  }
};

export const getAllTestimonialVideos = async (req, res) => {
  try {
    const testimonials = await VideoTestimonialModel.find().sort({ createdAt: -1 });
    
    return res.status(200).json({
      success: true,
      message: 'Testimonial videos fetched successfully',
      data: testimonials
    });
  } catch (error) {
    console.error(`Fetch testimonial videos error: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while fetching testimonial videos'
    });
  }
};

export const deleteTestimonialVideo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Testimonial ID is required'
      });
    }

    const deletedTestimonial = await VideoTestimonialModel.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial video not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Testimonial video deleted successfully'
    });
  } catch (error) {
    console.error(`Delete testimonial video error: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message || 'Server error while deleting testimonial video'
    });
  }
};
