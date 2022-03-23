import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
<<<<<<< HEAD
  equipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks",
  ];
  equipInput: string = "";
  itemBeingEdited: string = null;

  constructor() {}

  ngOnInit() {}

  add(item: string) {
    this.equipment.push(item);
    this.equipInput = "";
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  save(updatedItem: string) {
    let index = this.equipment.indexOf(this.itemBeingEdited);
    this.equipment[index] = updatedItem;
  }
=======
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9
}
