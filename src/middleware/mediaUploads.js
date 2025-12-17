import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { ENV } from '../config/ENV.js';

cloudinary.config({
  cloud_name: ENV.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'media-uploads',
    resource_type: 'auto',
  },
});

// Increase limits to allow large text fields (data URLs) when frontend posts base64 in fields.
// `fieldSize` controls the maximum size (in bytes) of non-file form fields parsed by busboy.
// `fileSize` controls maximum size of uploaded files.
const uploadMedia = multer({
  storage,
  limits: {
    fieldSize: 50 * 1024 * 1024, // 50 MB per non-file field
    fileSize: 200 * 1024 * 1024, // 200 MB per file
  },
});

export default uploadMedia;
