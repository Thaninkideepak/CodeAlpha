const images = Array.from(document.querySelectorAll('.gallery-img'));
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('modal-img');
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modal.style.display = 'block';
  modal.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.style.display = 'none';
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    const parent = img.closest('.col-6');
    if (category === 'all' || img.dataset.category === category) {
      parent.style.display = 'block';
    } else {
      parent.style.display = 'none';
    }
  });
}
