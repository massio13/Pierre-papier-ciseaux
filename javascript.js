const getComputerChoice = ["pierre", "papier", "ciseaux"];

    let HumainScore = 0;
    let ComputerScore = 0;
    let NombreTour = 1;
function games(){
    for (let i = 0; i < 3; i++) {
        const user = prompt("entrez un choix ̀| pierre | papier | ciseaux");
        const Computerchoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
        console.log("lordinateur a choisi " + Computerchoice + " et toi tu a choisi " + user);
        
        if((user == "pierre" && Computerchoice == "papier") ||
           (user == "papier" && Computerchoice == "ciseaux")||
           (user == "ciseaux" && Computerchoice == "pierre")){
            console.log("tu a perdu");
            ComputerScore++;
        }else if(user == Computerchoice){
            console.log("match null");  
        }else{
            console.log("tu a gagner");
            HumainScore++; 
        } 
    
        console.log("ton score et de " + HumainScore);
        console.log("le score de l'ordinateur et de " + ComputerScore);
        console.log("nombre de tours " + NombreTour++);
        
    }
    
}

games();

