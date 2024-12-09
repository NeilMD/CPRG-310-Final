const pics = [
    {
        src: './assets/gallery/studio.jpg',
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
    {
        src: './assets/gallery/monkey.jpg',
        title: 'Monkeyyyy',
        date: 'September 13, 2024',
        details: 'An exciting new product that revolutionizes the tech industry with cutting-edge features.'
    },
    {
        src: './assets/gallery/monkey.jpg',
        title: 'Monkeyyyy',
        date: 'September 13, 2024',
        details: 'An exciting new product that revolutionizes the tech industry with cutting-edge features.'
    },
    
    
];

let gallery = document.getElementById('gallery-section');
let load = function (template) {
    for (let pic of pics) {
        let temp = document.createElement('div');

        temp.innerHTML = template;

        //Get Picture info
        let img = temp.querySelectorAll('img')[0];
        let hoverText = temp.querySelectorAll('.hover-text')[0];

        //Set Picture info
        img.src = pic.src; 
        hoverText.textContent = pic.title; 
        
        //Add click event 
        let cardElement = temp.querySelector('.gallery-card');
        cardElement.addEventListener('click', ()=>{
            openModal(pic);
            
        });

        gallery.insertAdjacentElement('beforeend',cardElement)
    }
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



//Modal section
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let openModal = function (picData) {
    
    let title = document.querySelector(".modal-content h3");
    let date = document.querySelector(".modal-content h4");
    let details = document.querySelector(".modal-content span");
    let img = document.querySelector(".modal-content img");

    title.innerText = picData.title;
    date.innerText = picData.date;
    details.innerText = picData.details;
    img.src = picData.src;

    modal.style.display = "flex";
}

// Close MOdal
let closeModal = function () {
    modal.style.display = "none";
}
span.addEventListener('click', closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}