class Conductor {

    history: { name: string, undo?: () => void }[] = [];
    undone: { name: string, execute?: () => void }[] = [];

    run(command) {
        console.log(`Executing command: ${command.name}`);
        this.history.push(command);
    }

    printHistory() {
        this.history.forEach(command => console.log(command.name));
    }

    undo() {
        const command = this.history.pop();
        console.log(`undo ${command?.name}`);
        command?.undo?.();
        if (command) this.undone.push(command);

    }

    redo() {
        const command = this.undone.pop();
        console.log(`redo ${command?.name}`);
        command?.execute?.();
        if (command) this.history.push(command);
    }

}

export default new Conductor();
