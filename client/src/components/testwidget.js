// import { useState, useEffect, useRef } from "react";

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();
//   const [uploadedImage, setUploadedImage] = useState(null);

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dr5gnnrri",
//         uploadPreset: "pvwwtiuy",
//       },
//       function (error, result) {
//         if (result.event === "success") {
//           setUploadedImage(result.info.public_id);
//         }
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <button onClick={() => widgetRef.current.open()}>Upload Image</button>

//       {uploadedImage && (
//         <img
//           src={`https://res.cloudinary.com/dr5gnnrri/image/upload/${uploadedImage}`}
//           alt="Uploaded"
//         />
//       )}
//     </div>
//   );
// };

// export default UploadWidget;
