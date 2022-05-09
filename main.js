class Personnage {
    constructor(age, nom, ville) {
        this.age = age,
        this.nom = nom,
        this.ville = ville
    }
    presentation = function(){
        console.log("bonjour je m'apelle " + this.nom + " et j'habite à " + this.ville);
    }
}
let moi = new Personnage(20, "cocquibus", "bruxelles")
let autre = new Personnage(100,"martin","londres")
console.log(moi)
console.log(autre)
moi.presentation()
autre.presentation()