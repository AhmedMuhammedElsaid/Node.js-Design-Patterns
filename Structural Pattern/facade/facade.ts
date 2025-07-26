import { TDVDPlayer, TProjector, TheaterLights } from "./SubSystemClasses";

// Facade Class
export class HomeTheaterFacade {
    dvd: TDVDPlayer;
    projector: TProjector;
    lights: TheaterLights;
    constructor(dvd: TDVDPlayer, projector: TProjector, lights: TheaterLights) {
        this.dvd = dvd;
        this.projector = projector;
        this.lights = lights;
    }

    watchMovie(movie) {
        console.log("\n🎬 Get ready to watch a movie...");
        this.lights.dim();
        this.projector.on();
        this.projector.setWideScreenMode();
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie() {
        console.log("\n📽️ Shutting movie theater down...");
        this.dvd.off();
        this.projector.off();
        this.lights.on();
    }
}
