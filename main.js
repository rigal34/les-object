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
        alert("bonjour de " + this.prenom + "" + this.nom); //this évite de réecrire la variable bruno
    },
  };

  bruno.bonjour();
//console.log(bruno["taille"]);