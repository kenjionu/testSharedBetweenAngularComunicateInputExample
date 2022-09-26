import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documentation-component',
  templateUrl: './documentation-component.component.html',
  styleUrls: ['./documentation-component.component.scss']
})
export class DocumentationComponentComponent implements OnInit {
  @Input() currentDocstatus: any;
  docStatus: Object = {};
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentDocstatus)
  }

}
