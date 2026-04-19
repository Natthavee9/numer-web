import { evaluate } from "mathjs";

export class Bisection{
    constructor(f,l,r){
        this.f = f;
        this.l = parseFloat(l);
        this.r = parseFloat(r);
    }

    solve(){
        let l = this.l;
        let r = this.r;
        let f = this.f;
        let fl ,fr;
        if(Number.isNaN(l) || Number.isNaN(r)){
            throw new Error("Input not NUMBER");
        }

        try{
            fl = evaluate(f,{x:l});
            fr = evaluate(f,{x:r});
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

        let m ,old_m;
        let max_iteration = 1000;
        let e = Infinity;
        let except_err = 0.000001;
        let iter = 0;
        let dataStore = [];
        let fm;

        do{
            m = (l+r)/2;
            fm = evaluate(f,{x:m});
           
            if(fm * evaluate(f,{x:r}) < 0){
                l = m;
            }
            else{
                r = m;
            }

            if(iter>0){
                e = Math.abs((m-old_m)/m);
            }
            old_m = m;
            iter++;
            dataStore.push({ iteration: iter, root: m, e, fx: fm });  

        }while(e > except_err && iter <= max_iteration);

        return {root: m, error: e , iteration: iter,dataStore};
    }
}