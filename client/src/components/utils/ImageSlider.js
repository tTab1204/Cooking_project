import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageSlider({ detailEvent }) {
  const [Images, setImages] = useState([]);

  console.log(detailEvent);
  const { images } = detailEvent;

  const LOCAL_SERVER = "http://localhost:5000/";

  useEffect(() => {
    if (images && images.length > 0) {
      let imageArray = [];

      images.map((image, index) => {
        imageArray.push({
          original: `${LOCAL_SERVER}${image}`,
          thumbnail: `${LOCAL_SERVER}${image}`,
        });
      });
      setImages(imageArray);
    }
  }, [detailEvent]);

  return (
    <>
      <ImageGallery items={Images} />
    </>
  );
}

export default ImageSlider;
