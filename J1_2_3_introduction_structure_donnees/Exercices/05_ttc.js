const PRECISION = 100; // deux chiffres significatifs après la virgule

function ttc(price, tva = .2){
    price = parseFloat(price);
    tva = parseFloat(tva);

    // error first lève une exception en arrêtant les scripts
    if(isNaN(price) || isNaN(tva)){ 
        throw new Error(`price ${price} ou tva ${tva}`)
    };
    console.log('on  continue tout va bien');

    return Math.floor((1+tva)*price*PRECISION) / PRECISION ;
}

try{
    console.log(ttc(100));
    console.log(ttc(100, .3));
    console.log(ttc("100", "bonjour"));
}catch(e){
    console.error(e.message);
}

console.log('après le try catch ');

console.log(ttc("100", "bonjour"));
