
const imgElement = document.getElementById('dogImage');
const url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data => {
        imgElement.src = data.message;
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });