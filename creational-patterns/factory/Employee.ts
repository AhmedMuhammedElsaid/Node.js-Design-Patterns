import Shopper from './Shopper';

class Employee extends Shopper {
    public employer: string;
    public employed: boolean;

    constructor(name, money = 0, employer = '') {
        super(name, money);
        this.employer = employer;
        this.employed = true;
    }


}

export default Employee;
