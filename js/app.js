

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


// ######## Fonction d'affichage avec transition des différentes sections ########
// Définition des variables
const avatar = document.querySelector('.header__avatar'); // on va chercher l'avatar du header
const waypoints1 = document.querySelectorAll('.services');
const waypoints2 = document.querySelectorAll('.skills');
const waypoints3 = document.querySelectorAll('.client');
const waypoints4 = document.querySelectorAll('.contact');
const waypoints5 = document.querySelectorAll('.hero');

// Fonction d'action si intersection des elements => rendre visible
function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Should only fire at ~0.8
      console.log(entry, entry.intersectionRatio);
      entry.target.classList.add('reveal-visible');
      avatar.classList.add('reveal-visible');
    }
  });
}

// Fonction d'observation du threshold (% d'affichage de la section)
function createObserver(element) {
  let observer;

  const options = {
    threshold: [0.1]
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(element);
  
}

// Fonction d'action si intersection des elements => rendre invisible
function handleIntersect2(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      console.log(entry, entry.intersectionRatio);
      avatar.classList.remove('reveal-visible');
    }
  });
}

// Fonction Observation du threshold (% d'affichage de la seection) pour la gestion de l'avatar
function createObserver2(element) {
  let observer;

  const options = {
    threshold: [0.5]
  };

  observer = new IntersectionObserver(handleIntersect2, options);
  observer.observe(element);
  
}

// Lancement des fonctions
waypoints1.forEach(waypoint1 => {
    createObserver(waypoint1); 
});

waypoints2.forEach(waypoint2 => {
    createObserver(waypoint2);
    
});

waypoints3.forEach(waypoint3 => {
    createObserver(waypoint3); 
});

waypoints4.forEach(waypoint4 => {
    createObserver(waypoint4); 
});

waypoints5.forEach(waypoint5 => {
    createObserver2(waypoint5); 
});



// Fonction pour afficher le detail d'un client
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