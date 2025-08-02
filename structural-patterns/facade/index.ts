import { HomeTheaterFacade } from "./facade";
import { DVDPlayer, Projector, TheaterLights } from "./SubSystemClasses";

const dvd = new DVDPlayer();
const projector = new Projector();
const lights = new TheaterLights();

const homeTheater = new HomeTheaterFacade(dvd, projector, lights);
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
