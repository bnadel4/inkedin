import { useEffect, useRef } from 'react';
// import { AdvancedImage } from "@cloudinary/react";
// import { Cloudinary } from "@cloudinary";

import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dr5gnnrri" } });
};

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName:"dr5gnnrri",
      uploadPreset: "pvwwtiuy"
    }, function(error, result) {
      console.log(result);
    });
  }, [])
  
  
  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload Image</button>

      <cloudinaryRef
        cloudName="dr5gnnrri"
        publicId="https://res.cloudinary.com/dr5gnnrri/image/upload/v1689257032/samples/look-up.jpg"
      />
    </div>
  );
};

export default UploadWidget;