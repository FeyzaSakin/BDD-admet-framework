//  typescript-exercise-two.ts: shows an example of asynchronous execution

async function getCompound() { 
    return "aspirin"
}

async function check(){
    let moleculeName: string = ""
    moleculeName = await getCompound();
    let returnText: string = "";
    if(!moleculeName){
        returnText = "The molecule is nonexistent.";
    }
    else{
        returnText = "The molecule is "+ moleculeName + ".";
    }
    console.log(returnText);
}

check();