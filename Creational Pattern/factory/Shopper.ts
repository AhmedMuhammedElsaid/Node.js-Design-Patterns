import Person from './Person';

class Shopper extends Person {

    public money: number;
    public employed: boolean;

    constructor(name, money = 0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
    payDay(amount: number) {
        this.money += amount;
    }

}

export default Shopper;
