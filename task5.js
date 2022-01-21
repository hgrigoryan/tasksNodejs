function Character(name){
    this.name = name;
    this.speed = (Math.random() * 5).toFixed(3);
    // adding 1 if speed <= 4, to get 
    // speed value between (0,5]
    if(this.speed <= 4){
        this.speed++;
    }
    this.health = 100;
    this.power = (Math.random() * 10).toFixed(3);
    // adding 1 if speed <= 4, to get 
    // speed value between (0,10]
    if(this.power <= 9){
        this.power++;
    }
}

const heroes = [];
const villains = [];

for(let i = 0; i < 10; ++i){
    heroes[i] = new Character("hero" + (i+1));
    villains[i] = new Character("villain" + (i+1));
}

function removeDeadCharacter(character){
    index = heroes.indexOf(character);
    if(index === -1){
        index = villains.indexOf(character);
        villains.splice(index,1);
    }
    heroes.splice(index,1);
    console.log(character.name + " dies");
}

function attack(attacker, defencer){
    let index;
    let removed = false;
    if(attacker.health <= 0){
        removeDeadCharacter(attacker);
        removed = true;
    }
    else if(defencer.health <= 0){
        removeDeadCharacter(attacker);
        removed = true;
    }
    if(!removed){
        let attackInfo = attacker.name + "[" + attacker.health + "] hits " + defencer.name + "[" + defencer.health + "] with a power of " + attacker.power;
        console.log(attackInfo);
        defencer.health -= attacker.power;
    }
}

function chooseRandomCharacterAndAttac(attacker){
    let defencer = arr[Math.floor(Math.random() * 9)];
        attack(attacker, defencer);
}

function printWinnerInfo(winner){
    let liveCharactersInfo = "[";
    for(let i = 0; i < winner.length; ++i){
        liveCharactersInfo = liveCharactersInfo + winner[i].name + "[" + winner[i].health + "] ";
    }
    liveCharactersInfo += "]";
    if(winner === heroes){
        console.log("Heroes win!");
    }else{
        console.log("Villains win!");
    }
    console.log(liveCharactersInfo);
}

function startBattle(){

    if(heroes.length === 0){
        printWinnerInfo(heroes);
        return;
    }
    else if(villains.length === 0){
        printWinnerInfo(villains);
        return;
    }
    
    const allCharacters = villains.concat(heroes);
    for(let i = 0; i < allCharacters.length; ++i){
       setTimeout(chooseRandomCharacterAndAttac, 1/allCharacters[i].speed*5, allCharacters[i]);
   }
   // Call start Battle recurcively till one of character arrayes will be empty
   startBattle();
}

startBattle();