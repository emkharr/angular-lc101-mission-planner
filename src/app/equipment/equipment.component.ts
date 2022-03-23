import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
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
}
