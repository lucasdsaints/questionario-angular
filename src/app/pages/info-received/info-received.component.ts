import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DiAcceptanceTermComponent } from 'src/app/components/di-acceptance-term/di-acceptance-term.component';

@Component({
  selector: 'app-info-received',
  templateUrl: './info-received.component.html',
  styleUrls: ['./info-received.component.scss']
})
export class InfoReceivedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DiAcceptanceTermComponent, {
      disableClose: true
    });
  }

}
