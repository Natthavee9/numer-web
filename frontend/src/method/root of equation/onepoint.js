import { evaluate } from "mathjs";

export class OnePoint{
    constructor(f,x){
        this.f = f;
        this.x = parseFloat(x);
    }
    
    evaluateX(x){
        return evaluate(this.f, { x }); 
    }

    solve(){
        let x = this.x ; 
        if(Number.isNaN(x) ){
            throw new Error("Input not NUMBER");
        }
        
        let fx;
        try{
            fx = this.evaluateX(x);
            if(Number.isNaN(fx)){
                throw new Error("ERROR! function")
            }

        }catch (err){
            throw new Error("ERROR!"); 
        }

        let x_old,x_new;
        let iter = 0;
        let except_err = 0.000001;
        let e = Infinity;
        let dataStore = [];
        let max_iter = 1000;

        do{
            fx = this.evaluateX(x);
            x_old = x;
            x_new = fx;
            x = fx;
            e = Math.abs((x_new-x_old)/x_new);
            iter++;
            dataStore.push({iteration : iter , e ,fx,x});
        }while(e > except_err && iter <= max_iter);
        return({root :x , error:e, iteration:iter , dataStore})
    }
}