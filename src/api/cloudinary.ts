import { createServerFn } from "@tanstack/react-start";
import { v2 as cloudinary } from "cloudinary";

export const getCloudinaryImages = createServerFn({ method: "GET" }).handler(async () => {
  // We configure inside the handler to ensure env vars are loaded on the server
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const result = await cloudinary.search
      .expression("folder:Natural-grains")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    return result.resources.map((res: any) => ({
      id: res.public_id,
      url: res.secure_url,
      width: res.width,
      height: res.height,
    }));
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return [];
  }
});
