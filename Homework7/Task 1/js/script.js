

const form = document.getElementById('imageForm');
const imageUrlInput = document.getElementById('imageUrl');
const imgsContainer = document.getElementById('imgsContainer');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const imageUrl = imageUrlInput.value.trim();
  if (imageUrl) {
    console.log(imageUrl); 


    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Loaded from URL';


    imgsContainer.appendChild(img);


    imageUrlInput.value = '';
  } else {
    alert('Please enter a valid image URL.');
  }
});