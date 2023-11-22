function validateForm() {
  let nameContactName =
    document.forms["form-contact-us"]["nameContactName"].value;
  let nameContactEmail =
    document.forms["form-contact-us"]["nameContactEmail"].value;
  let nameContactInterested =
    document.forms["form-contact-us"]["nameContactInterested"].value;
  if (nameContactName == "") {
    alert("Name must be filled out");
    return false;
  } else if (nameContactEmail == "") {
    alert("Email must be filled out");
    return false;
  } else if (nameContactInterested == "") {
    alert("Your Interested must be filled out");
    return false;
  }
}

let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndexPack = 0;
function showSlidesPack() {
  let slides = document.getElementsByClassName("our-package-slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndexPack++;
  if (slideIndexPack > slides.length) {
    slideIndexPack = 1;
  }

  slides[slideIndexPack - 1].style.display = "block";
  setTimeout(showSlidesPack, 2000); // Change image every 2 seconds
}

showSlides();
showSlidesPack();
