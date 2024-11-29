let gallery = document.getElementById('gallery-section');

const pics = [
    {
        src: './assets/gallery/camera.jpg',
        title: 'Home Banner',
        date: 'September 10, 2024',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum adipisci impedit itaque quibusdam?'
    },
    {
        src: './assets/gallery/studio.jpg',
        title: 'Moneky',
        date: 'September 11, 2024',
        details: 'An exciting new product that revolutionizes the tech industry with cutting-edge features.'
    },
    {
        src: './assets/gallery/monkey.jpg',
        title: 'Monkeyyyy',
        date: 'September 13, 2024',
        details: 'An exciting new product that revolutionizes the tech industry with cutting-edge features.'
    },
];

let load = function (template) {
    let cards = '';
    for (let pic of pics) {
        let temp = document.createElement('div');
        temp.innerHTML = template;
        let img = temp.querySelectorAll('img')[0];
        let hoverText = temp.querySelectorAll('.hover-text')[0];

        img.src = pic.src; 
        hoverText.textContent = pic.title; 
      
        cards += temp.innerHTML;
    }

    console.log(cards);
    gallery.innerHTML = cards;

    // Event delegation for dynamically added gallery cards
    gallery.addEventListener('click', function(event) {
        if (event.target.closest('.gallery-card')) {
            openModal();
        }
    });
}

// Load Gallery Template
function loadTemplate(templatePath) {
    fetch(templatePath)
        .then(response => response.text())
        .then(data => {
            load(data);
        })
        .catch(error => console.error('Error fetching template:', error));
}

loadTemplate('./templates/gallery-card.html');

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

let openModal = function () {
    modal.style.display = "flex";
}

let closeModal = function () {
    modal.style.display = "none";
}

span.addEventListener('click', closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}