import React, {useState, createRef, useEffect} from 'react';
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css"
import './ImageCropper.css';

function ImageCropper(props) {
  const {src} = props
  const [imageDestination , setimageDetstination] = useState("")
  const imgElement = createRef();

  useEffect(() => {
    const cropper = new Cropper(imgElement.current, {
      zoomable:false,
      scalable:false,
      aspectRatio:1,
      crop: () =>{
        const canvas = cropper.getCroppedCanvas();
        setimageDetstination(canvas.toDataURL("image/png"));
      }
    })
  }, []);

  return (
    <div >
      <div className="img-container">
        <img ref={imgElement} src={src} alt="source" />
      </div>
      <img className="img-preview" src={imageDestination} alt="destination" />
    </div>
  );
}

export default ImageCropper;
