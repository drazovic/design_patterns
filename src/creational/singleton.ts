class AnimalDataService {
    private static instance: AnimalDataService;
    private data: string[] = [];

    private constructor() {}

    static getInstance(): AnimalDataService {
        if (!AnimalDataService.instance) {
            AnimalDataService.instance = new AnimalDataService();
        }

        return AnimalDataService.instance;
    }

    addAnimal(item: string): void {
        this.data.push(item);
    }

    getAnimals(): string[] {
        return this.data;
    }
}

function compareAnimalServiceInstances() {
    const animalService1 = AnimalDataService.getInstance();
    animalService1.addAnimal('dog');

    const animalService2 = AnimalDataService.getInstance();
    animalService2.addAnimal('cat');

    const animals1 = animalService1.getAnimals();
    const animals2 = animalService2.getAnimals();
    console.log('Animals from animalService1', animals1);
    console.log('Animals from animalService2', animals2);
}

compareAnimalServiceInstances();
