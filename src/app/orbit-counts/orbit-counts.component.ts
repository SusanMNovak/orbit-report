import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  fuck : string = 'this fucking thing'

  @Input() satellites: Satellite[];
  constructor() {
  }

  ngOnInit() {
  }

  numSatellites(array : Satellite[]) {
    return [ ['Total', array.length]
           , ['Space Debris', array.filter((x : Satellite) => x.type.toLowerCase() === 'space debris').length]
           , ['Communication', array.filter((x : Satellite) => x.type.toLowerCase() === 'communication').length]
           , ['Probe', array.filter((x : Satellite) => x.type.toLowerCase() === 'probe').length]
           , ['Positioning', array.filter((x : Satellite) => x.type.toLowerCase() === 'positioning').length]
           , ['Space Station', array.filter((x : Satellite) => x.type.toLowerCase() === 'space station').length]
           , ['Telescope', array.filter((x : Satellite) => x.type.toLowerCase() === 'telescope').length]
           ]
  }

}
