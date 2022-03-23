import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
<<<<<<< HEAD
  experiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density",
  ];

  expInput: string = "";
  expBeingEdited = null;

  constructor() {}

  ngOnInit() {}

  add(test: string) {
    this.experiments.push(test);
    this.expInput = "";
  }

  edit(test: string) {
    this.expBeingEdited = test;
  }
=======
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }
>>>>>>> df088481627ca8d82d5d5e6537a62e28242f4ab9

  remove(test: string) {
    let index = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }

  save(updatedTest: string) {
    let index = this.experiments.indexOf(this.expBeingEdited);
    this.experiments[index] = updatedTest;
  }
}
