document.addEventListener("DOMContentLoaded", function () {
    initAll("b-menu").forEach(b=>{
        addClick(b,choseSection);
    })

});

/**
 * Permet de recuperer un element du DOM.
 * @param {string} id 
 * @returns 
 */
function init(id){
    return document.getElementById(id);
}
/**
 * Permet de recuperer tous les elements du DOM appartenant a une classe.
 * @param {string} classe 
 * @returns 
 */
function initAll(classe){
    let clas = "."+classe;
    return document.querySelectorAll(clas);
}
/**
 * Ajoute un event listener a une element.
 * @param {*} element 
 * @param {*} methode 
 */
function addClick(element,methode){
    element.addEventListener("click",methode);
}
/**
 * Enleve les event listener d'un element.
 * @param {*} element 
 * @param {*} methode 
 */
function removeClick(element,methode){
    element.removeEventListener("click",methode);
}
/**
 * Test si une variable a une valeur.
 * @param {*} variable 
 * @returns 
 */
function exist(variable){
    let exist = false;
    if(variable!=null && variable!=""){
        exist = true;
    }
    return exist;
}
var project = "introduction";
var button = "";
/**
 * Affiche ou cache le projet choisi.
 * @param {*} event 
 */
function choseSection(event){
    //desactive le bouton clique.
    this.disabled = true;
    //Active le precedent bouton desactiver si il y en a.
    if(exist(button)){
        let b = init(button);
        if(b){
            b.disabled=false;
        }
    }
    //Indique quel bouton a ete desactive.
    button = this.id;
    //Cache le projet si un projet est affiche.
    hideProject(true);
    //Indique quel projet est affiche.
    project = this.value;
    //Affiche le contenue.
    hideProject(false);
    // Revient en haut de page
    window.scrollTo(0,0);
}

/**
 * Apres avoir verifier l'existance de la section,
 * il la cache ou l'affiche.
 * @param {boolean} state 
 */
function hideProject(state){
    if(exist(project)){
        let div = init(project);
        if(div){
            init(project).hidden = state;
        }
    }
}