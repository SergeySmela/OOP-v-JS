class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {
        let button = document.createElement('button');
        button.width = this.width;
        button.height = this.height;
        button.style.background = this.background;
        button.textContent = this.value;
        return button;
    }
}
let button = new Button(20, 20, 'green', 'click');
// button.render();
document.body.append(button.render());
// document.body.append(button);
console.log(button);

class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;

    }
    render() {
        let button = document.createElement('button');
        button.width = this.width;
        button.height = this.height;
        button.style.background = this.background;
        button.textContent = this.value;
        button.style.borderRadius = this.borderRadius;
        return button;
    }
}

let kolo = new ModernButton(50, 50, 'red', 'deactivete', 50);
// render();
document.body.append(kolo.render());
console.log('[kolo]', kolo);
console.log('[kolo.render()]', kolo.render());

let arr = ['one', 'two', 'three', 'four'];

class List {
    constructor(arr) {
        this.item = arr;
    }
    render() {
        let ul = document.createElement('ul');
        for (const iterator of this.item) {
            let li = document.createElement('li');
            li.textContent = iterator;
            ul.appendChild(li);
        }
        return ul;
    }
}

let list = new List(arr);
document.body.appendChild(list.render());

class Test {
    constructor() {

    }
    set testProp(testProp){
        this._testProp = testProp;
    }
    get testProp(){
        return this._testProp;
    }
}
let a = new Test();
a.testProp = 'ivan';
console.log('[a.testProp]', a.testProp);