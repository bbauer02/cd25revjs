const Add = {
    a : 0,
    b : 0,
    numbers : [],
    res : 0,
    sum : function(){
        this.res  = 0 ;
        if( this.numbers.length > 0 )
            this.res = this.numbers.reduce((acc, curr) => acc + curr );

        this.res += this.a + this.b 
    },

    reset : function(){
        this.res = 0 ;
        this.a = 0;
        this.b = 0;
        this.numbers = [];
    }
}

Add.a = 10;
Add.b = 20;

Add.sum(); // 30
console.log(Add.res);

Add.numbers = [1, 2, 4];

Add.sum(); // 37 
console.log(Add.res);

Add.reset()
console.log(Add.res);

Add.numbers = [1, 2, 4];

Add.sum(); // 7 
console.log(Add.res);
