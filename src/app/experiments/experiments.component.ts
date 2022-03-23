import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
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

  remove(test: string) {
    let index = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }

  save(updatedTest: string) {
    let index = this.experiments.indexOf(this.expBeingEdited);
    this.experiments[index] = updatedTest;
  }
}
