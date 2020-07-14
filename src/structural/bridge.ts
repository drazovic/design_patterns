class Joystick {
    constructor(protected console: GamingConsole) {
        this.console = console;
    }

    togglePower() {
        if (this.console.isTurnedOn()) {
            this.console.turnOff();
        } else {
            this.console.turnOn();
        }
    }
}

interface GamingConsole {
    isTurnedOn(): boolean;
    turnOn(): void;
    turnOff(): void;
}

class Wii implements GamingConsole {
    private turnedOn: boolean;

    constructor() {
        this.turnedOn = false;
    }

    isTurnedOn() {
        return this.turnedOn;
    }

    turnOn() {
        this.turnedOn = true;
        console.log(`Wii is turned on.`);
    }

    turnOff() {
        this.turnedOn = false;
        console.log(`Wii is turned off`);
    }
}

class Xbox implements GamingConsole {
    private turnedOn: boolean;

    constructor() {
        this.turnedOn = false;
    }

    isTurnedOn() {
        return this.turnedOn;
    }

    turnOn() {
        this.turnedOn = true;
        console.log(`Xbox is turned on.`);
    }

    turnOff() {
        this.turnedOn = false;
        console.log(`Xbox is turned off`);
    }
}

const wii = new Wii();
const wiiJoystick = new Joystick(wii);
wiiJoystick.togglePower();
wiiJoystick.togglePower();


const xbox = new Xbox();
const xboxJoystick = new Joystick(xbox);
xboxJoystick.togglePower();
xboxJoystick.togglePower();