document.addEventListener("DOMContentLoaded", () => {
  const imageUpload = document.getElementById("imageUpload");
  const imagePreview = document.getElementById("imagePreview");
  const cropButton = document.getElementById("cropButton");
  const downloadButton = document.getElementById("downloadButton");
  const croppedImagePreview = document.getElementById("croppedImagePreview");
  const croppedImage = document.getElementById("croppedImage");

  let cropper;

  imageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 300 * 1024) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = document.getElementById("image");
        img.src = event.target.result; 
        imagePreview.style.display = "block";
        cropButton.style.display = "inline-block";
        if (cropper) {
          cropper.destroy();
        }
        cropper = new Cropper(img, {
          aspectRatio: 1,
          viewMode: 1,   
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert("File is too large! Maximum size: 300 KB.");
    }
  });

  cropButton.addEventListener("click", () => {
    const canvas = cropper.getCroppedCanvas();
    const dataURL = canvas.toDataURL("image/png");
    croppedImage.src = dataURL; 
    croppedImagePreview.style.display = "block";
    downloadButton.style.display = "inline-block";
  });

  downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = croppedImage.src;
    link.download = "cropped-image.png";
    link.click();
  });
});