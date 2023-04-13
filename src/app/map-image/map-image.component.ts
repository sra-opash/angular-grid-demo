import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ColDef, IDatasource, IGetRowsParams } from 'ag-grid-community';

@Component({
  selector: 'app-map-image',
  templateUrl: './map-image.component.html',
  styleUrls: ['./map-image.component.scss'],
})
export class MapImageComponent implements OnInit, OnChanges {
  @Input() imgData;
  mapImgObj: any = {}
  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.imgData) {
      this.mapImgObj = this.imgData;
    }
  }
}
