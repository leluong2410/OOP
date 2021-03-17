class Temparature{
    constructor(celcius){
        this.celcius=celcius;
    }
    getFarenheit(){
        return this.farenheit=this.celcius*1.8+32;
    }
}
let result = new Temparature(20);
let farenheit= result.getFarenheit();
console.log(farenheit);