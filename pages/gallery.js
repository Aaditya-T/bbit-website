
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function Page() {
  const [imageUrls, setImageUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("./api/dept/images");
        
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImageUrls(data.imageUrls);
      } catch (error) {
        setError("Error fetching images. Please try again later.");
        console.error("Error:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-center text-4xl font-bold mb-8">Image Gallery</h1>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.length > 0 ? (
            imageUrls.map((url, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src={url}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))
          ) : (
            <p className="text-center">No images found.</p>
          )}
        </div>
      )}
    </div>
  );
}
