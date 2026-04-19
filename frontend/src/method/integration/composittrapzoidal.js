import { evaluate ,abs} from "mathjs";
import integrate from "integrate-adaptive-simpson"

export class CompositeTrapezoidal{
    constructor(f,a,b,n){
        this.f = f;
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.n = parseFloat(n);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    checkInput(){
        if(Number.isNaN(this.a) || Number.isNaN(this.b) || Number.isNaN(this.n)){
            throw new Error("Input Not Number");
        }

        try{
            const fa = this.evaluateX(this.a);
            const fb = this.evaluateX(this.b);
            if(Number.isNaN(fa) || Number.isNaN(fb)){
                throw new Error("Function evaluation returned NaN")
            }
        }
        catch(error){
            throw new Error("Invalid function format or variable");
        }
    }

    solve(){
       this.checkInput();
       let a = this.a;
       let b = this.b;
       let n = this.n;
       let f_a = this.evaluateX(a);
       let f_b = this.evaluateX(b);
       let sum = 0;
       let h = (b-a)/n;
      


       for(let i = a+h ; i<b ; i+=h ){
        let fi = this.evaluateX(i);
        sum+=fi;
       }

       //let checkerror = integrate(this.f ,a,b);

       let I = (h/2) * (f_a + (2*sum) + f_b);
       //let e = abs((I - checkerror)/I); 
      
       return {I:I};
    }
}