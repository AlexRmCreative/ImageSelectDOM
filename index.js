function ChangeImage() {
    principalImg = document.getElementById('principal-image');
    selectedImage = document.getElementById('selectedImage');
    principalImg.src = selectedImage.value;
}