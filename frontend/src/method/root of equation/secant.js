import { evaluate } from "mathjs";
export class Secant{
    constructor(f,x1,x2){
        this.f = f;
        this.x2 = parseFloat(x2);
        this.x1 = parseFloat(x1);
    }

    evaluateX(x){
        return evaluate(this.f, { x }); 
    }

    checkInput() {
    const x1 = this.x1;
    const x2 = this.x2;

    
    if (Number.isNaN(x1) || Number.isNaN(x2)) {
        throw new Error("Input not NUMBER");
    }

    try {
        const fx1 = this.evaluateX(x1);
        const fx2 = this.evaluateX(x2);

        
        if (Number.isNaN(fx1) || Number.isNaN(fx2)) {
            throw new Error("Function evaluation returned NaN");
        }
    } catch (err) {
        throw new Error("Invalid function format or variable");
    }
}


    solve(){
        this.checkInput();
        let x0 = this.x1;
        let x1 = this.x2;
        let xi,y;
        let e = Infinity;
        let iter = 0;
        let except_err = 0.000001;
        let max_iter = 1000;
        let dataStore = [];
        let fx0,fx1;

        do{
            fx0 = this.evaluateX(x0);
            fx1 = this.evaluateX(x1);
            xi = x1 -((fx1*(x0-x1))/(fx0-fx1));
            e = Math.abs((xi-x1)/xi);
            iter++
            y = this.evaluateX(xi); 
            dataStore.push({root: xi,  e , iteration: iter, fx:y});
            x0 = x1;
            x1 = xi;
            
        }while(e > except_err && iter <= max_iter ); 
        return{root: xi, error: e , iteration: iter, dataStore};
    }
}