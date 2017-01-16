export class ClassB {
    constructor() {
        console.log('ClassB');
        require.ensure([], ()=>{
            const Cls = require('./ClassC');
            new Cls();
        });
    }
}