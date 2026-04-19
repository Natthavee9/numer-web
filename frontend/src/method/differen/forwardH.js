import { evaluate, derivative,abs,pow } from "mathjs";

export class  Forward_H{
    constructor(f,x,h){
        this.f = f ;
        this.x = parseFloat(x);
        this.h = parseFloat(h);
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    solve(){
        let x = this.x;
        let h = this.h;
        
        let f=(x)=>{
            return this.evaluateX(x);
        }

        const diff_1p =(x)=>{
            return (f(x+h) - f(x))/ h;
        }
        
        const diff_2p =(x)=>{
            return (f(x+h*2) - (2*f(x+h)))/ pow(h,2);
        }
        
        const diff_3p =(x)=>{
            return (f(x+h*3) - (3*f(x+h*2)) + (3*f(x+h)) - f(x))/ pow(h,3);
        }
        const diff_4p =(x)=>{
            return (f(x+h*4) - (4*f(x+h*3)) + (6*f(x+h*2)) - (4*f(x+h)) + f(x))/ pow(h,4);
        }


        
    }

}