interface Builder {
    addFountain(): GardenBuilder;
    addWalkingPaths(): GardenBuilder;
}

class Garden {
    surfaceAreaInSquareMeters: number;
    hasFountain: boolean;
    hasWalkingPaths: boolean;

    constructor(surfaceAreaInSquareMeters: number) {
        this.surfaceAreaInSquareMeters = surfaceAreaInSquareMeters;
        this.hasFountain = false;
        this.hasWalkingPaths = false;
    }
}

class GardenBuilder implements Builder {
    private garden: Garden;

    constructor(surfaceAreaInSquareMeters: number) {
        this.reset(surfaceAreaInSquareMeters);
    }

    reset(surfaceAreaInSquareMeters: number = 50): void {
        this.garden = new Garden(surfaceAreaInSquareMeters);
    }

    addFountain(): GardenBuilder {
        this.garden.hasFountain = true;
        return this;
    }

    addWalkingPaths(): GardenBuilder {
        this.garden.hasWalkingPaths = true;
        return this;
    }

    build(): Garden {
        const result = this.garden;
        this.reset();
        return result;
    }
}

class GardenDirector {
    constructor(private builder: Builder) {
        this.builder = builder;
    }

    createGardenWithFountain(): void {
        this.builder.addFountain();
    }

    createFullGarden(): void {
        this.builder.addFountain().addWalkingPaths();
    }
}

// Without Director
const plainGarden = new GardenBuilder(41).build();
console.log('plainGarden', plainGarden);

const fullGarden = new GardenBuilder(24)
    .addFountain()
    .addWalkingPaths()
    .build();
console.log('fullGarden', fullGarden);

// With Director
const builder = new GardenBuilder(55);
const gardenDirector = new GardenDirector(builder);

gardenDirector.createGardenWithFountain();
const plainGarden2 = builder.build();
console.log('plainGarden with director', plainGarden2);

gardenDirector.createFullGarden();
const fullGarden2 = builder.build();
console.log('fullGarden with director', fullGarden2);
