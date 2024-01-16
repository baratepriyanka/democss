import React, { useEffect } from 'react';
import { removeBackground } from 'modern-rembg';

export default function Demo6() {
  useEffect(() => {
    const processImage = async (imageUrl) => {
      try {
        const result = await removeBackground(imageUrl);
        // Handle the result (e.g., set it as the source of an image element)
        console.log('Background removed:', result);
      } catch (error) {
        console.error('Error removing background:', error);
      }
    };

    // Call the function with the URL of the image you want to process
    processImage('https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg');
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
  
  return (
   <>
 
    <div>Demo6</div>
    </>
  );
}
