// Subsystem  Classes
export class DVDPlayer {
    on(): void {
        console.log("DVD Player: ON");
    }

    play(movie: string): void {
        console.log(`DVD Player: Playing "${movie}"`);
    }

    off(): void {
        console.log("DVD Player: OFF");
    }
}

export type TDVDPlayer = InstanceType<typeof DVDPlayer>;

export class Projector {
    static dim() {
        throw new Error("Method not implemented.");
    }
    on() {
        console.log("Projector: ON");
    }

    setWideScreenMode() {
        console.log("Projector: Set to widescreen mode");
    }

    off() {
        console.log("Projector: OFF");
    }
}
export type TProjector = InstanceType<typeof Projector>;

export class TheaterLights {
    dim() {
        console.log("Theater Lights: Dimming the lights");
    }

    on() {
        console.log("Theater Lights: ON");
    }
}

export type TTheaterLights = InstanceType<typeof TheaterLights>;
