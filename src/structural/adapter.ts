type Item = {
    age: number;
    sex: "male" | "female";
}

type LogObject = {
    [key: string]: Item;
}

interface ObjectItemsLoggerInterface {
    logObjectItems(): void;
}

class ObjectItemsLogger implements ObjectItemsLoggerInterface {
    constructor(private logObject: LogObject) {
        this.logObject = logObject;
    }

    logObjectItems() {
        console.log('Logging items via ObjectItemsLogger'); 
        const objectKeys = Object.keys(this.logObject);
        objectKeys.forEach(key => {
            console.log(this.logObject[key]);
        })
    }
}

interface ArrayItemsLoggerInterface {
    logArrayItems(): void;
}

class ArrayItemsLogger implements ArrayItemsLoggerInterface {
    constructor(private logArray: Item[]) {
        this.logArray = logArray;
    }

    logArrayItems() {
        console.log('Logging items via ArrayItemsLogger'); 
        this.logArray.forEach(item => {
            console.log(item);
        })
    }
}

class ObjectItemsLoggerAdapter implements ObjectItemsLoggerInterface {
    constructor(private logObject: LogObject, private loggerType: string) {
        this.logObject = logObject;
        this.loggerType = loggerType;
    }

    logObjectItems() {
        if (this.loggerType === 'array') {
            const itemsArray:Item[] = [];
            const objectKeys = Object.keys(this.logObject);
            objectKeys.forEach(key => {
                itemsArray.push(this.logObject[key]);
            });
            const logger = new ArrayItemsLogger(itemsArray);
            return logger.logArrayItems();
        } else if (this.loggerType === 'object') {
            const logger = new ObjectItemsLogger(this.logObject);
            return logger.logObjectItems();
        } else {
            throw new Error('Please use either array or object as logger type.');
        }
    }
}

const logObject: LogObject = { "log1": { age: 23, sex: "male" }, "log2": { age: 45, sex: "female" } };

const objectLogger = new ObjectItemsLoggerAdapter(logObject, 'object');
const arrayLogger = new ObjectItemsLoggerAdapter(logObject, 'array');

objectLogger.logObjectItems();
console.log('----------')
arrayLogger.logObjectItems();
