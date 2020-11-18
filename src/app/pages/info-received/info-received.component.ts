import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

import { DiAcceptanceTermComponent } from 'src/app/components/di-acceptance-term/di-acceptance-term.component';

@Component({
  selector: 'app-info-received',
  templateUrl: './info-received.component.html',
  styleUrls: ['./info-received.component.scss']
})
export class InfoReceivedComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DiAcceptanceTermComponent, {
      disableClose: true
    });
  }

}
