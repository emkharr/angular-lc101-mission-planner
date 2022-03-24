import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];
  memberBeingEdited: object = null;
  
  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate:object) {
    if (this.crew.includes(candidate)){
      this.inCrew = true;
    } else {
      this.inCrew = false;
    };

    if (this.inCrew) {
      let index = this.crew.indexOf(candidate);
      this.crew.splice(index, 1);
    } else if (!this.inCrew && this.crew.length<3) {
      this.crew.push(candidate);
    };
  };

  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.crew.length; i++) {
        if(this.crew[i]['name'] === memberName) {
            this.inCrew = true;
        }
    }
    if (!this.inCrew) {
        this.crew.push({name: memberName, firstMission: isFirst});
    }
    this.inCrew = false;
  }


  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
    }
}
