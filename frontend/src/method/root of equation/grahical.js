import { evaluate } from "mathjs";

export class Graphical{
    constructor(f, a, b) {
        this.f= f;
        this.l = parseFloat(a);
        this.r = parseFloat(b);
        
    }

    evaluateX(x){
        return evaluate(this.f,{x});
    }

    checkInputs() {
        if (Number.isNaN(this.l) || Number.isNaN(this.r)) {
            throw new Error("Invalid numeric inputs");
        }

        try {
            const fl = this.evaluateX(this.l);
            const fr = this.evaluateX(this.r);
            if (Number.isNaN(fl) || Number.isNaN(fr)) {
                throw new Error("Invalid function format or value");
            }
        } 
        catch (err) {
            throw new Error("F(x) Wrong");
        }
    }

    solve() {
        this.checkInputs();
        let i = this.l;
        let x1,x2;
        let iter = 0;
        let dataStore = [];
        let prevx = i;
        let e = Infinity ;
        let root;
        
       for (let i = this.l; i < this.r; i += 0.001) {
        x1 = this.evaluateX(i);
        x2 = this.evaluateX(i + 0.001);
        iter++;
        e = Math.abs((i - prevx)/i);
        dataStore.push({ iteration: iter, root: i, fx: x1, e});

        if (x1 * x2 <= 0) {
            root = i;
            prevx = i;
            break;
        }

        prevx = i;
    }

    if (root === undefined) {
    throw new Error("No root found in the interval");
}
    for (let i = root; i < this.r; i += 0.000001) {
        x1 = this.evaluateX(i);
        x2 = this.evaluateX(i + 0.000001);
        iter++;
        e = Math.abs((i - prevx)/i);
        dataStore.push({ iteration: iter, root: i, fx: x1, e });
        if (x1 * x2 <= 0 || error < this.et) {
            root = i;
            break;
        }
        prevx = i;
    }
        return { root, error:e, iteration: iter, dataStore };
    }
}