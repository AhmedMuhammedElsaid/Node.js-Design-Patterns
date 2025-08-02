import Logger from './Logger';

const logger = new Logger().getInstance();

class Shopper {
    public name: string;
    public money: number;

    constructor(name = "", money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }

}

export default Shopper;
