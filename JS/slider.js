let indexOfSlide = 1;
let dragStartX = 0;

function moveSlider(number) {
    slidesShower(indexOfSlide += number);
}

function currentSlide(number) {
    slidesShower(indexOfSlide = number);
}

function slidesShower(number) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("dot");

    if (number > slides.length) {
        indexOfSlide = 1;
    }

    if (number < 1) {
        indexOfSlide = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[indexOfSlide - 1].style.display = "block";
    dots[indexOfSlide - 1].classList.add("active");
}

function startDrag(e) {
    dragStartX = e.clientX;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", endDrag);
}

function handleDrag(e) {
    const deltaX = e.clientX - dragStartX;
    if (deltaX > 50) {
        moveSlider(-1);
        dragStartX = e.clientX;
    } else if (deltaX < -50) {
        moveSlider(1);
        dragStartX = e.clientX;
    }
}

function endDrag() {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", endDrag);
}

slidesShower(1);