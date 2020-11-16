import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di-acceptance-term',
  templateUrl: './di-acceptance-term.component.html',
  styleUrls: ['./di-acceptance-term.component.scss']
})
export class DiAcceptanceTermComponent implements OnInit {
  public accepted = false;

  constructor() { }

  ngOnInit(): void {
  }

}
