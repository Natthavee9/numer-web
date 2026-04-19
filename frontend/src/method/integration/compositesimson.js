import { evaluate } from "mathjs";

export class CompositeSimson{
    constructor(f,a,b,n){
        this.f = f;
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.n = parseFloat(n);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }
    solve(){
        let a = this.a;
        let b = this.b;
        let n = this.n;
        let h = (b-a)/(2*n);
        let f_a = this.evaluateX(a);
        let f_b = this.evaluateX(b);
        let sum_ood = 0;
        let sum_even = 0;
        let count = 1;

        for(let i = a+h ; i<b ; i+=h){
            if(count % 2 === 0){
                let f_ood = this.evaluateX(i);
                sum_ood+=f_ood;
            }
            else{
                let f_even = this.evaluateX(i);
                sum_even+=f_even;
            }
            count++;    
        }

        let I = (h/3)*(f_a + f_b +(4*sum_ood) + (2*sum_even));
        return {I:I};
    }
}