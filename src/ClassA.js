import {ReusableComponent} from './ReusableComponent';

export class ClassA {
    constructor() {
        console.log("Class A");
        new ReusableComponent();
    }
}