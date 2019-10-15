// code by: https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js

let modal = document.getElementById('img-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

let img = document.getElementById('logo');
let modalImg = document.getElementById("img");
let captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

span.onclick = function() { 
    modal.style.display = "none";
}