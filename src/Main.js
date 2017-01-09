class Main {
    constructor() {
        console.log("Main class");
        require.ensure([], ()=>{
            const Cls = require('./ClassA');
            new Cls();
        });
        require.ensure([], ()=>{
            const Cls = require('./ClassB');
            new Cls();
        });
    }
}

new Main();