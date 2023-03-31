

// Variables
// string
//let myVar = "ma variable"; /* let => variable qui peut changer */
//myVar = "variable changée";
//const myVar2 = "ma variable 2"; /* const => variable qui ne change pas */

//console.log(myVar);

// boolean
//let isTrue = true;
//let isFalse = false;

//console.log(isTrue);

// chiffre et opérateur
//let chiffre1 = 4;
//let chiffre2 = 3;

/* typeof => affiche le type de donnée d'une variable */

//console.log(chiffre1 + chiffre2); /* opération arithémtique */

// template string, littéraux de gabarits et concat
/* la virgule permet de dire "ET" */
//let test = "test " + myVar, /* Permet la concaténation */
//    test2 = `test ${myVar}`; /* Bonne pratique pour concaténer */ 

// Boucles
//if (chiffre1 < chiffre2) {
//    console.log('condition est valide');
//} else {

//}


// Tableau
//let tableau = ['item 1','item 2','item 3','item 4']; /* création du tableau */
/*console.log(Array) /* affichage du tableau */


// Objet
/*let obj = {
    title: "mon titre",
    description: "description"
}

console.log(obj.title); /* Affichage d'un item de l'objet */



// Intéragir avec le dom
/*console.log(window); /* Permet d'afficher toutes les possibilité de méthode */


// ######## Fonction du burger ########
// Principe : de base on cache le menu, et au clic JS on rajojute la classe show-nav au header qui le fait apparaitre

function menuMobile() {
    const btn = document.querySelector('.burger'); /* on va chercher le menu burger */
    const header = document.querySelector('.header'); /* on va chercher le header */
    const links = document.querySelectorAll('.navbar a'); /* on va chercher tous les liens qui sont dans la navbar */
  
    btn.addEventListener('click', () => { /* quand on click sur le btn */
      header.classList.toggle('show-nav'); /* on dit à JS de créer la class show-nav au header , toggle permet d'afficher et de fermer à chaque clic */
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => { /* quand on clic sur un lien de la navbar */
        header.classList.remove('show-nav'); /* on dit à JS de supprimer la class show-nav au header */
      });
    });
  }
  
  menuMobile();


// ######## Fonction d'affichage au scroll avec transition de l'avatar dans le header ########
const avatar = document.querySelector('.header__avatar'); // on va chercher l'avatar du header
const waypoints = document.querySelectorAll('[data-id]');

function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      console.log(entry, entry.intersectionRatio);
      avatar.classList.add('animate','show')
    } else {
      console.log(entry, entry.intersectionRatio);
      avatar.classList.remove('animate','show')
  }
});
}

// Fonction Observation du threshold (% d'affichage de la section)
function createObserver(element) {
  let observer;

  const options = {
    threshold: [0.1]
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);
  
}

waypoints.forEach(waypoint => {
    createObserver(waypoint); 
});



// ######## Fonction pour afficher le detail d'un client ########
function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => { /* Pour chaque card__link */
    elem.addEventListener('click', (event) => { /* sur l'evenement click */
      event.preventDefault(); /* Permet de supprimer l'action par défaut */
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show'); /* on va cherche le data-id de l'element et on ajoute la class show */
    });
  })

  btns.forEach(btn => { /* Pour chaque bouton */
    btn.addEventListener('click', (event) => { /* sur l'evenement click */
      hideModals();
  });
});

}

showProjectDetails();

// ######## Fonction d'affichage avec transition des sections ########
function animateSections() {
  let sectionIds = document.querySelectorAll('[data-id]'); // Sélectionne toutes les sections avec l'attribut data-id

  sectionIds.forEach(section => {
    let sectionId = section.getAttribute('data-id');
    let sectionPosition = document.getElementById(sectionId).getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3; // La position de l'écran lorsqu'il doit déclencher l'animation

    if (sectionPosition < screenPosition) {
      section.classList.add('animate', 'show');
    }
  });
}

window.addEventListener('scroll', animateSections);


// ######## Fonction d'affichage avec transition des skills ########
const observerIntersectionAnimation = () => {
  const skills = document.querySelectorAll('.skills .bar');

  skills.forEach((elem, index) => {
    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();