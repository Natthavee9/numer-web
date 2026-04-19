import { evaluate,derivative } from "mathjs";

export class NewtonRaphson{
    constructor(f,x){
        this.f = f;
        this.x = parseFloat(x);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    evaluateDiff(x){
        const fp = derivative(this.f,'x');
        return fp.evaluate({x});
    }

    checkInput(){
        if(Number.isNaN(this.x)){
            throw new Error("Input Not Number");
        }

        try{
            const fx = this.evaluateX(this.x);
            if (Number.isNaN(fx)) {
             throw new Error("Function evaluation returned NaN");
            }
        
        }catch(err){
            throw new Error("Invalid function format or variable");

        }
 
    }

    solve(){
        this.checkInput();
        let x0 = this.x;
        let fx,xi,fpx;
        let e = Infinity;
        let except_err = 0.000001;
        let max_iter = 1000;
        let iter = 0;
        let dataStore =[];
        let x_old ; 

        do{
    
            fx = this.evaluateX(x0);
            fpx = this.evaluateDiff(x0);
            xi = x0 - (fx/fpx);
            
            if(xi !== 0){
                e = Math.abs((xi-x0)/xi);
            }
            
            iter++;
            dataStore.push({iteration: iter ,root: xi , e ,fx});
            x_old = x0;
            x0 = xi; 
        }while(e > except_err && iter <= max_iter);
        return {root: x0 , iteration: iter , error: e ,dataStore};
    }
}