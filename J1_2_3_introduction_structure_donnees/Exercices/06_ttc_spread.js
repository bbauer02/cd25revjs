const PRECISION = 100; // deux chiffres significatifs après la virgule
const TVA = .2 ;

function ttc(...numbers){
    let total = 0 ;

    // error first
    numbers.map(parseFloat).map(number => {
        if(isNaN(number)) throw new Error("Erreur de type");

        total += number;
    });

    return parseFloat ( (total * (1+TVA)).toFixed(2) );
}

try{
console.log( ttc(1,2,3) )

console.log( ttc(1,2,3, 9, 10, 11, "bonjour", 19) )
}catch(e){
    console.error(e.message);
}

// correction de Benjamin, cepandant l'approche ci-dessus est plus pro

function sumTTC (p1, p2, p3, tax = 0.2)  {

    p1 = parseFloat(p1);
    p2 = parseFloat(p2);
    p3 = parseFloat(p3);
    tax = parseFloat(tax);
  
    if(tax === 0) return (p1+p2+p3).toFixed(2);
    
    if(p1 && p2 && p3 && tax){
      return ((p1+p2+p3)+((p1+p2+p3)*tax)).toFixed(2);
    }else{
      return "Erreur de type";
    }
  }