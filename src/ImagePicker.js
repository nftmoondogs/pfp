import React, { useState } from "react";
import "./ImagePicker.css";

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage === image ? "" : image);
  };

  const handleDownloadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h3 className="title">Please select your favourite Moondogs PFP:</h3>
      <div className="images-container">
      <img
  src={process.env.PUBLIC_URL + "/images/image1.png"}
  alt="Image 1"
  className={`${selectedImage === "image1" ? "selected-image" : "image"}`}
  onClick={() => handleImageClick("image1")}
/>
<img
  src={process.env.PUBLIC_URL + "/images/image2.png"}
  alt="Image 2"
  className={`${selectedImage === "image2" ? "selected-image" : "image"}`}
  onClick={() => handleImageClick("image2")}
/>
<img
          src={process.env.PUBLIC_URL + "/images/image3.png"}
          alt="Image 3"
          className={`${selectedImage === "image3" ? "selected-image" : "image"}`}
          onClick={() => handleImageClick("image3")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/image4.png"}
          alt="Image 4"
          className={`${selectedImage === "image4" ? "selected-image" : "image"}`}
          onClick={() => handleImageClick("image4")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/image5.png"}
          alt="Image 5"
          className={`${selectedImage === "image5" ? "selected-image" : "image"}`}
          onClick={() => handleImageClick("image5")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/image6.png"}
          alt="Image 6"
          className={`${selectedImage === "image6" ? "selected-image" : "image"}`}
          onClick={() => handleImageClick("image6")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/image7.png"}
          alt="Image 7"
          className={`${selectedImage === "image7" ? "selected-image" : "image"}`}
          onClick={() => handleImageClick("image7")}
        />
        {/* add more images here */}
      </div>
      {selectedImage !== "" && (
        <a
          href={process.env.PUBLIC_URL + `/images/${selectedImage}.png`}
          download={`${selectedImage}.png`}
          className="download-link"
          onClick={handleDownloadClick}
        >
          {isLoading ? "Downloading..." : "Download Selected"}
        </a>
      )}
    </div>
  );
};

export default ImagePicker;
