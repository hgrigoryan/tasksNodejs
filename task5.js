function Character(name){
    this.name;
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

function generateCharacters(){
    const heroes = [];
    const villains = [];

    for(let i = 0; i < 10; ++i){
        heroes[i] = new Character("hero" + (i+1));
        villains[i] = new Character("villain" + (i+1));
    }

    return [heroes, villains];
}

function attac(hero, villain){
    
}

function startBattle(){
    [heroes, villains] = generateCharacters();
    let whoStarts = (Math.random() * 2) < 1 ? "heroes" : "villains";
    

}
