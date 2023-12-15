import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const uploadOnCloud = async (localFilePath, folder) => {
  try {
    if (!localFilePath) return;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: `youtube_uploads/${folder}`,
    });
    console.log("File uploaded successfully on cloudinary");
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloud;
