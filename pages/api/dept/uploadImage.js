import { put } from "@vercel/blob";

export async function uploadImageToBlobStorage(image, file) {
  const blob = await put(image, file, {
    access: "public",
    addRandomSuffix: false,
    token: "vercel_blob_rw_CVPJO1EOTXjWVktS_yMDecTgF1Z4UKrnYhxCLyApBTHbZva",
  });
  return blob.url;
}
