import { Component } from '@angular/core';
import { Satellite } from './satellite'
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report'
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];

    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then((response)  =>{
       response.json().then((data) => {
 
          let fetchedSatellites : Satellite[] = data.satellites;

          fetchedSatellites
            .map((s : Satellite) => {return new Satellite(s.name, s.type, s.launchDate, s.orbitType, s.operational)})
            .forEach((s : Satellite) => this.sourceList.push(s))

          // make a copy of the sourceList to be displayed to user
          this.displayList = this.sourceList.slice(0);
 
       },AppComponent.bind(this));
    },AppComponent.bind(this));
 
 }

 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();

  // for(let i=0; i < this.sourceList.length; i++) {
  //     let name = this.sourceList[i].name.toLowerCase();
  //     if (name.indexOf(searchTerm) >= 0) {
  //       matchingSatellites.push(this.sourceList[i]);
  //     }
  // }
  
  // completed bonus mission C
  this.sourceList.map((s : Satellite) => {
    let name = s.name.toLowerCase()
    let orbit = s.orbitType.toLowerCase()
    let type = s.type.toLowerCase()
    if (name.indexOf(searchTerm) >= 0 || orbit.indexOf(searchTerm) >= 0 || type.indexOf(searchTerm) >= 0) {
      matchingSatellites.push(s)
    }
  })

  // assign this.displayList to be the the array of matching satellites
  // Angular to re-make the table, containing matches alone
  this.displayList = matchingSatellites;
 }
}

 