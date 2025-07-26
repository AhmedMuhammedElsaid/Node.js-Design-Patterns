import Employee from './Employee';
import Shopper from './Shopper';



// create me a union for useFactory method
export type User = Shopper | Employee;
export type UserType = 'employee' | 'shopper';

export type UserFactory = (name: string, money?: number, type?: UserType, employed?: string) => User;
const userFactory: UserFactory = (name, money, type, employed) => {
    if (type === 'employee') {
        return new Employee(name, money, employed);
    } else {
        return new Shopper(name, money);
    }
}

export default userFactory;
