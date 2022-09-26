import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documentation-component',
  templateUrl: './documentation-component.component.html',
  styleUrls: ['./documentation-component.component.scss']
})
export class DocumentationComponentComponent implements OnInit {
  @Input() currentDocstatus = {};
  docStatus: Object = {};
  constructor() { }

  ngOnInit(): void {

  }

}
