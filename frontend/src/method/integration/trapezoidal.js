import { evaluate } from "mathjs";

export class Trapezoidal{
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

        let x = [a,b];
        let fx = [f_a,f_b];
        
        let I = ((b-a)/2)*(f_a + f_b);

        return {I:I , x: x , fx: fx , a: a, b: b};
    }
};