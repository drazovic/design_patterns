interface Mouse {
    getDescription(): string;
    hasExtraButtons(): boolean;
    isErgonomic(): boolean;
    isWireless(): boolean;
}

class GamingMouse implements Mouse {
    getDescription() {
        return 'Gaming mouse is used for playing video games.';
    };

    hasExtraButtons() {
        return true;
    };

    isErgonomic() {
        return false;
    };

    isWireless() {
        return true;
    };
}

class DesignerMouse implements Mouse {
    getDescription() {
        return 'Designer mouse is used for working in softwares like Adobe Photoshop.'
    };

    hasExtraButtons() {
        return false;
    };

    isErgonomic() {
        return true;
    };

    isWireless() {
        return false;
    };
}

interface Keyboard {
    getDescription(): string;
    hasBacklight(): boolean;
    isErgonomic(): boolean;
    isWireless(): boolean;
}

class GamingKeyboard implements Keyboard {
    getDescription() {
        return 'Gaming keyboard is used for playing video games.';
    };

    hasBacklight() {
        return true;
    };

    isErgonomic() {
        return false;
    };

    isWireless() {
        return true;
    };
}

class DesignerKeyboard implements Keyboard {
    getDescription() {
        return 'Designer keyboard is ussed for working in softwares like Adobe Photoshop.';
    };

    hasBacklight() {
        return true;
    };

    isErgonomic() {
        return false;
    };

    isWireless() {
        return true;
    };
}

interface PCPheripheralsFactory {
    createMouse(): Mouse;
    createKeyboard(): Keyboard;
}

class GamingPCPheripheralsFactory implements PCPheripheralsFactory {
    createMouse() {
        return new GamingMouse();
    }

    createKeyboard() {
        return new GamingKeyboard();
    }
}

class DesignerPCPheripheralsFactory implements PCPheripheralsFactory {
    createMouse() {
        return new DesignerMouse();
    }

    createKeyboard() {
        return new DesignerKeyboard();
    }
}

function clientCode(factory: PCPheripheralsFactory) {
    const mouse = factory.createMouse();
    console.log(mouse.getDescription());

    const keyboard = factory.createKeyboard();
    console.log(keyboard.getDescription());
}

const gamingPCPheriferalsFactory = new GamingPCPheripheralsFactory();
clientCode(gamingPCPheriferalsFactory);

console.log('-------------------')

const designerPCPheriferalsFactory = new DesignerPCPheripheralsFactory();
clientCode(designerPCPheriferalsFactory);