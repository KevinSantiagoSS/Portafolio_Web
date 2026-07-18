const images = document.querySelectorAll(".project-image");

const modalImage = document.getElementById("modalImage");

const modal = new bootstrap.Modal(document.getElementById("imageModal"));

images.forEach(image => {

    image.addEventListener("click", () => {

        modalImage.src = image.src;

        modal.show();

    });

});