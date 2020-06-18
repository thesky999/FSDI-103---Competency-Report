class Character{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(`${this.name} ${this.energy}`);
    

    //display the energy in the info div

    document.getElementById('info-'+this.id).innerHTML= `<b>Energy: </b> ${this.energy}`;
    }
    //attack function

    attack=function(opponent){
        console.log("Attacking ... ");
        let newEnergy= opponent.energy -10;
        opponent.energy=newEnergy;
        opponent.display();

        document.getElementById('console').innerHTML= `${this.name} is attacking ${opponent.name}`;
        console.log(newEnergy);
        var AttackButtons=document.getElementsByTagName("Button");

        if(opponent.energy<=0){
            document.getElementById("console").innerHTML=`<h2> GAME OVER <h2>`;
            AttackButtons[0].style.display="none";
            AttackButtons[1].style.display="none";
        }else{
            opponent.display();
        }
    }
}

//create two objects

    const link = new Character("c1","Link",100);
    const bowser = new Character("c2","Bowser",100);

    link.display();
    bowser.display();

//create class items

//random selection