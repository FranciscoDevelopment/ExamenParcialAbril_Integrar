const name = "Zara Darkbane" ;

const characterClass = "Sorceress" ;

const level = 7 ;

let health = 80 ;

let mana = 120 ;

let attack = 45 ;

let defense = 30 ;



function calculateDamage( attack, defense ) {

    const result = attack - defense ;

    if( result < 0 ) return  0 ;

    else return result 

}


const isAlive = (health) => health > 0 ;


const  canCastSpell = (currentMana, spellCost, isStunned) => {

    return currentMana >= spellCost && !isStunned 

}


function getPresentation( name, characterClass, level ) {

    return `${name} -- ${characterClass} (Level: ${level})`

}



console.log(calculateDamage(attack, defense));

console.log(isAlive(health));

console.log(canCastSpell(mana, 30, false));

console.log(getPresentation(name, characterClass, level));