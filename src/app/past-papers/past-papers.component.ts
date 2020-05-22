import { PastpapersService } from './../pastpapers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-papers',
  templateUrl: './past-papers.component.html',
  styleUrls: ['./past-papers.component.css'],
  providers: [PastpapersService]
})
export class PastPapersComponent implements OnInit {

pastpapersarray = [];
  constructor(private pastpapers: PastpapersService) { }

  ngOnInit(): void {
this.pastpapersarray = [...this.pastpapers.pastpapersarray];
  }

}
