import LogStrategy from './LogStrategy';
import config from './config.json';

class Logger {
    logs: never[];
    strategy: any;

    constructor(strategy = 'toConsole') {
        this.logs = [];
        this.strategy = LogStrategy[strategy];
    }

    get count() {
        return this.logs.length
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStrategy[newStrategy];
    }

    log(message: string) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.strategy(timestamp, message);
    }

}

export default new Logger(config.logs.strategy);
