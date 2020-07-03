interface User {
    name: string;
    permissions: string[];
    printPermissions(): void;
}

class Admin implements User {
    name: string;
    permissions: string[];

    constructor(name: string) {
        this.name = name;
        this.permissions = ['reports', 'charts', 'settings'];
    }

    printPermissions() {
        console.log(`${this.name} is "Admin" and has following permissions: ${this.permissions}`)
    }
}

class Customer implements User {
    name: string;
    permissions: string[];

    constructor(name: string) {
        this.name = name;
        this.permissions = ['charts', 'settings'];
    }

    printPermissions() {
        console.log(`${this.name} is a "Cutomer" has following permissions: ${this.permissions}`)
    }
}

class UserFactory {
    getInstance(isAdmin: boolean, name: string) {
        if (isAdmin) {
            return new Admin(name);
        } else {
            return new Customer(name);
        }
    }
}

function printUserPermissions(isAdmin: boolean, name: string) {
    const userFactory = new UserFactory();
    const user = userFactory.getInstance(isAdmin, name);
    user.printPermissions();
}

printUserPermissions(true, 'Dave');
printUserPermissions(false, 'Nick');