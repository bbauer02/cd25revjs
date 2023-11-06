'use strict';

// context this 

function Model(n){
    // context this
    this.name = n;
    console.log(this); // ? quel this 
    console.log(this.name) ; // ? quel this 
}

// qu'affiche ce code ?
console.log(new Model('Alan')) ;

const o1 = {
    name : "Antoine",
    f1 : function(){
        return this.name
    }
}

// contexte o1 
console.log(o1.f1())