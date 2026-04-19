import { evaluate } from "mathjs";

export class Simsonrule{
    constructor(f,a,b){
        this.f = f;
        this.a = parseFloat(a);
        this.b = parseFloat(b);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    checkInput(){
        if(Number.isNaN(this.a)|| Number.isNaN(this.b)){
            throw new Error("Input Not Number");
        }

        try{
            const fa = this.evaluateX(this.a);
            const fb = this.evaluateX(this.b);
            if (Number.isNaN(fa) || Number.isNaN(fb)) {
             throw new Error("Function evaluation returned NaN");
            }
        
        }catch(err){
            throw new Error("Invalid function format or variable");
        }
    }

    solve(){
        this.checkInput();
        let a = this.a;
        let b = this.b;
        let f_a = this.evaluateX(a);
        let f_b = this.evaluateX(b);
        let h = (b-a)/2;
        let fx1 = this.evaluateX(a+h);

        let I = (h/3)*(f_a + (4*fx1) +f_b);

        return {I:I}
    }
}