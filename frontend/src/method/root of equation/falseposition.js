import { evaluate } from "mathjs";

export class FalsePosition{
    constructor(f,l,r){
        this.f = f;
        this.l = parseFloat(l);
        this.r = parseFloat(r);
    }

    evaluateX(x){
        return evaluate(this.f, { x }); 
    }

    solve(){
        let l = this.l;
        let r = this.r;
        let f = this.f;
        let fl = this.evaluateX(l);
        let fr = this.evaluateX(r);
        
        if(Number.isNaN(l) || Number.isNaN(r)){
            throw new Error("Input not NUMBER");
        }

        try{
            fl = this.evaluateX(l);
            fr = this.evaluateX(r);
            if(Number.isNaN(fl)||Number.isNaN(fr)){
                throw new Error("ERROR! function")
            }

        }catch (err){
            throw new Error("ERROR!"); 
        }

        if(fl === 0){
            return {root: l , error: 0 , iterations: 0};
        }
        if(fr === 0){
            return {root: r , error: 0 , iterations: 0};
        }

        let old_xi;
        let max_iteration = 1000;
        let e = Infinity;
        let except_err = 0.000001;
        let iter = 0;
        let dataStore = [];
        let xi,fxi;
        
        do{
            fl = this.evaluateX(l);
            fr = this.evaluateX(r);
            xi = ((l*fr)-(r*fl)) / (fr-fl);
            fxi = this.evaluateX(xi);
            if(fxi * fr < 0){
                l = xi;
            }
            else{
                r = xi;
            }

            if(iter >= 1){
                e = Math.abs((xi-old_xi)/xi);
            }
            old_xi = xi;
            iter++;
            dataStore.push({iteration : iter , root:xi , e, fx:fxi });
        }while(e > except_err && iter <= max_iteration);
        return {root : xi , error:e , iteration : iter , dataStore};
    }
}