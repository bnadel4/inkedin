import { useEffect, useRef } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";


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
    <button onClick = {() => widgetRef.current.open()}>
      Upload Image
    </button>
  )
};

export default UploadWidget;