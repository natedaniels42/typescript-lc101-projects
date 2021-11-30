"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
class Rocket {
    constructor(name, totalCapacityKg) {
        this.sumMass = (items) => {
            return items.reduce((a, c) => a + c.massKg, 0);
        };
        this.currentMassKg = () => {
            return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        };
        this.canAdd = (item) => {
            return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        };
        this.addCargo = (cargo) => {
            if (this.canAdd(cargo)) {
                this.cargoItems.push(cargo);
                return true;
            }
            return false;
        };
        this.addAstronaut = (astronaut) => {
            if (this.canAdd(astronaut)) {
                this.astronauts.push(astronaut);
                return true;
            }
            return false;
        };
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
}
exports.Rocket = Rocket;
