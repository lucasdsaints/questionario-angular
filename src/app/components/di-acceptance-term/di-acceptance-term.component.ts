import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DiSuccessfulRegistrationComponent } from './../di-successful-registration/di-successful-registration.component';

@Component({
  selector: 'app-di-acceptance-term',
  templateUrl: './di-acceptance-term.component.html',
  styleUrls: ['./di-acceptance-term.component.scss']
})
export class DiAcceptanceTermComponent {
  public accepted = false;

  constructor(private dialog: MatDialog) { }

  confirm() {
    this.dialog.open(DiSuccessfulRegistrationComponent, {
      disableClose: true
    });
  }

}
