import {ReusableComponent} from './ReusableComponent';
export class ClassB {
    constructor() {
        console.log('ClassB');
        new ReusableComponent();
        require.ensure([], ()=>{
            const Cls = require('./ClassC');
            new Cls();
        });
    }
}