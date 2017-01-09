import {ReusableComponent} from './ReusableComponent';

export class ClassC {
    constructor() {
        console.log("ClassC");
        new ReusableComponent();
    }
}