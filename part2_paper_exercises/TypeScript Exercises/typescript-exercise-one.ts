//  typescript-exercise-one.ts: creates three compounds with their names and smiles

interface Compound { 
    name:string; 
    smiles:string; 
} 

const osimertinib: Compound = {
    name: "osimertinib",
    smiles: "CN1C=C(C2=CC=CC=C21)C3=NC(=NC=C3)NC4=C(C=C(C(=C4)NC(=O)C=C)N(C)CCN(C)C)OC"
}

const dacomitinib: Compound = {
    name: "dacomitinib",
    smiles: "COc1cc2ncnc(Nc3ccc(F)c(Cl)c3)c2cc1NC(=O)/C=C/CN1CCCCC1"
}

const erlotinib: Compound = {
    name: "erlotinib",
    smiles:"C#Cc1cccc(Nc2ncnc3cc(OCCOC)c(OCCOC)cc23)c1"
}
/*  To check all the compound molecules are created
console.log(osimertinib);
console.log(dacomitinib);
console.log(erlotinib);
*/