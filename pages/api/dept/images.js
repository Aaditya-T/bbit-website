import { list } from "@vercel/blob";

export default async function handler(req  , res ) {
  try {
    const blobs = await list({
      prefix: "images/",
      token: "vercel_blob_rw_jqjDU5mvVIv1SI6z_eO7IyHkA3uHCvGy8yaSmXmnMm37xxt",
    });

    const imageUrls = blobs.blobs.map((item) => item.url);
    res.status(200).json({ imageUrls });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
