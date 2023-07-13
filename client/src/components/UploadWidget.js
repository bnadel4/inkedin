import { useState, useEffect, useRef } from 'react';

const UploadWidget = ({ onImageUpload }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dr5gnnrri",
      uploadPreset: "pvwwtiuy"
    }, function (error, result) {
      if (result.event === "success") {
        const imageUrl = `https://res.cloudinary.com/dr5gnnrri/image/upload/${result.info.public_id}`;
        setUploadedImage(imageUrl);
        onImageUpload(imageUrl); // Invoke the callback function with the image URL
      }
    });
  }, [onImageUpload]);

  const openWidget = () => {
    widgetRef.current.open();
  }

  return (
    <div>
      <button onClick={openWidget}>Upload Image</button>
    </div>
  );
};

export default UploadWidget;
