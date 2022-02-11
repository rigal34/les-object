const monObjet= {
    nom: "SST.PLOMBERIE",
};


//j'ajoute une valeur à mon objet

monObjet.age = 7;
monObjet["sujet"] = "technique générale";
console.log(monObjet);

//petite info dans le navigateur dans prototype il y a marqué enumérable true ou false si c'est true on peu avec une boucle for in parcourir l'objet si false on ne peut pas



//L'objet natif Object et quelques méthode

console.log(Object);//j'ai la fonction object qui s'affiche

const promise01 = fetch("https://jsonplaceholder.typicode.com/users");//je vais chercher mes données
promise01.then(async(response)=>{ //je créer une promesse en asynchrone pour aller chercher mon users
console.log(response);
const data = await response.json(); //je await pour avoir le temps d'afficher ma data et je travail en json pour deblocker mon body
console.log(data[1]);
console.log(JSON.stringify(data));//je converti en string
console.log(Object.keys(data));//j'affiche les keys et valeur de mon API
console.log(Object.entries(data));//affiche=> 0: Array [ "0", {…} 
console.log(Object.values(data));


const description = Object.getOwnPropertyDescriptor(data[1],"name");//permet d'afficher  le nom de mon objet ainsi les infos si je peux configurer et utiliser  ma boucle for in
console.log(description);
Object.defineProperty(data[1], "name",{//cette méthode permet de donner l'autorisation si je peux ou non modifier en true ou false mon api
    writable:true,
});
data[1].name = "coucou";
console.log(data[1].name);
});

//création d'un objet:

let bruno = {
    nom:"Dee",       //nom c'est la clé à droite valeur ce qui est à gauche sont des clées
    prenom: "John",
    taille: 1.7,
    sexe:"homme",
    bonjour:function(){
        //alert("bonjour de " + this.prenom + "" + this.nom); //this évite de réecrire la variable bruno
    },
  };

  bruno.bonjour();
//console.log(bruno["taille"]);


//7 ASTUCE AVEC LES OBJECTS

 //1.----------CLONER un objet------------------------------------------------------------------------

 const utilisateur = {
     nom : "Tom",
     age : 45,
     taille: 185
 }

 
const utilisateur2 = {
    ...utilisateur,  //spray opérateur permet de cloner
    poids:85//je peux ajouter aussi
}

console.log(utilisateur2);//{ nom: "Tom", age: 45, taille: 185, poids: 85 }




//2. ASSEMBLER DES OBJETS

const panierFruitsRouges = {
    cerises : 10,
    fambroises : 5,
    fraises : 20
}

const panierFruitsJaunes = {
    banane : 15,
    citron : 10,
    poire : 7
}

const panierDeFruits = {
    
    ...panierFruitsRouges,
    ...panierFruitsJaunes 

}

console.log(panierDeFruits);//{ cerises: 10, fambroises: 5, fraises: 20, banane: 15, citron: 10, poire: 7 }







//3. -------Itérer avec for in ---------------------------------------


const chatsRefuge = {

    siamois : 2,
    persan : 7,
    sphynx : 3,
    ragdoll : 4

}

for (const mattou in chatsRefuge){

    console.log(mattou, chatsRefuge[mattou]);//affiche les noms,m'affiche les nombres
}

console.log(chatsRefuge["siamois"]);// 2



//4.--------enlever une propriété----------------------------------------------------

const voiture = {
marque: "ferrari",
modele: "Enzo",
couleur: "rouge" 

}


const sansCouleur = ({couleur, ...rigal }) => { //(destructuring "couleur"),(reste opérator "...rigal") et ce qui reste je le retourne pouur en faire un nouvel objet 
    console.log(couleur);
    return rigal;
}

sansCouleur(voiture);//rouge

//c'est du destructuring j'ai pris couleur pour que rouge soit retourné dans mon log et rigal est le reste qui ne s'affiche pas

console.log(sansCouleur(voiture));//{ marque: "ferrari", modele: "Enzo" }



//5.--------- DESTRUCTURER EN CHANGEANT LE NOM--------------------------------

const pays = {

    nom: "Liechtenstein",
    population: 38749,
    capital: "Vaduz"


}


const {nom} = pays;//je prends le nom de pays

console.log(nom);//Liechtenstein


const{nom : rigalBruno} = pays;
console.log(rigalBruno); //Liechtenstein

//on peut dire maintenant cette constante s'appelle rigalBruno et à comme valeur Liechtenstein





//6.additionner toutes les valeurs d'un objet rapidement 


const depense = {

chauffage : 100,
voiture : 70,
internet : 30,
telephone : 30,
assurance : 35,
mutuelle : 20,
nourriture : 400,
loisirs : 200 
}

//objet de js mets les valeurs sous forme de tabbleau [ 100, 70, 30, 30, 35, 20, 400, 200 ]
const total = Object.values(depense).reduce((accumulation,depense) => accumulation + depense);

console.log(total);//885