export class NewtonDivided{
    constructor(point,value){
        this.point = [...point];
        this.value = parseFloat(value);
        this.memo = new Map(); 
    }

    cal(i,j){
        if(i==j){
            return this.point[i].y;
        }
        else{
            return (cal(this.point.x))
        }
        const ans = cal()
    }
    
}