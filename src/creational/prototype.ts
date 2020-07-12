class Prototype {
    identity: any;
    list: Array<number> = [];

    constructor(id?: any) {
        this.identity = id;

        for (let i = 0; i < 1000; i++) {
            this.list.push(i)
        }
    }

    clone(): Prototype {
        return Object.assign({}, this);
    }
}

const obj = new Prototype(12);
console.log(obj);

const obj2 = obj.clone();
console.log(obj2);

console.log(obj.identity === obj2.identity);
console.log(obj.list === obj2.list);