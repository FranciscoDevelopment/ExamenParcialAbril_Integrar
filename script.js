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

