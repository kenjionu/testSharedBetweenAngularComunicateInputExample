import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docsstatus',
  templateUrl: './docsstatus.component.html',
  styleUrls: ['./docsstatus.component.scss']
})
export class DocsstatusComponent implements OnInit {
  currentDocStatus:Object = {}
  constructor() { }

  ngOnInit(): void {
    this.currentDocStatus = {
      FOLDER_NOT_SELECTED: true,
    }
  }

}
