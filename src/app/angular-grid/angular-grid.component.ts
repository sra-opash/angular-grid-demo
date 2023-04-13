import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-angular-grid',
  templateUrl: './angular-grid.component.html',
  styleUrls: ['./angular-grid.component.scss'],
})
export class AngularGridComponent implements OnInit {
  columnDefs = [
    { headerName: 'Property', field: 'property', width: 180 },
    { headerName: 'Year built', field: 'yearbuilt', width: 100 },
    { headerName: 'Unit', field: 'unit', width: 100 },
    { headerName: 'Occupancy', field: 'occupancy', width: 100 },
    { headerName: 'Total Sq Ft', field: 'totalSqFt', width: 130 },
    { headerName: 'Avg sq ft/unit', field: 'avgSqFtUnit', width: 130 },
    { headerName: 'Date Of Sale', field: 'dateOfSale', width: 130 },
    { headerName: 'Sale Price', field: 'salePrice', width: 130 },
    { headerName: 'Cap Rate', field: 'capRate', width: 100 },
    { headerName: 'Sale Price/Unit', field: 'salePriceUnit', width: 110 },
    { headerName: 'Sale Price/Sq ft', field: 'salePriceSqFt', width: 110 },
    { headerName: 'Adj Price/unit', field: 'adjPriceUnit', width: 110 },
    { headerName: 'Adj Price/Sq ft', field: 'adjPriceSqFt', width: 110 },
    { headerName: 'Adj %', field: 'adj', width: 100 },
    { headerName: 'Comparison', field: 'comparison', width: 150 },
    { headerName: 'Mile from Subject', field: 'milesFromSubject', width: 100 },
  ];

  rowData = [
    {
      property: 'Farmland Hills 4060 Prefermed Pi Dallas, TX 75237',
      yearbuilt: '1983',
      unit: '288',
      occupancy: '98.0%',
      totalSqFt: '206,165',
      avgSqFtUnit: '716',
      dateOfSale: 'N/A',
      salePrice: '$33,000,000',
      capRate: '4.81%',
      salePriceUnit: '$1,14,583',
      salePriceSqFt: '$160',
      adjPriceUnit: 'N/A',
      adjPriceSqFt: 'N/A',
      adj: 'N/A',
      comparison: 'N/A',
      milesFromSubject: 'N/A',
      img: '/assets/TX75237.png'
    },
    {
      property: 'Copper creek 6001 Okland Hills Drive For Worth,TX 76112',
      yearbuilt: '1986',
      unit: '200',
      occupancy: '92.0%',
      totalSqFt: '159,520',
      avgSqFtUnit: '798',
      dateOfSale: '6/2/2022',
      salePrice: '$26,000,000',
      capRate: '4.65%',
      salePriceUnit: '$1,30,000',
      salePriceSqFt: '$163',
      adjPriceUnit: '$125,000',
      adjPriceSqFt: '$157',
      adj: '-3.85%',
      comparison: 'Superior',
      milesFromSubject: '20',
      img: '/assets/TX76112.png'
    },
    {
      property: 'Cadence 3913 Gannon Ln Dallas,TX 75237',
      yearbuilt: '1982',
      unit: '320',
      occupancy: '96.2%',
      totalSqFt: '68,384',
      avgSqFtUnit: '526',
      dateOfSale: '4/14/2022',
      salePrice: '$36,800,000',
      capRate: '4.77%',
      salePriceUnit: '$1,15,000',
      salePriceSqFt: '$219',
      adjPriceUnit: '$130,000',
      adjPriceSqFt: '$247',
      adj: '13.04%',
      comparison: 'Inferior',
      milesFromSubject: '15',
      img: '/assets/TX75238.png'
    },
    {
      property: 'Exchange 727, 7272 Marvin D Love Fwy Dallas,TX 75237',
      yearbuilt: '1988',
      unit: '356',
      occupancy: '93.0%',
      totalSqFt: '269,848',
      avgSqFtUnit: '758',
      dateOfSale: '4/1/2022',
      salePrice: '$51,086,000',
      capRate: '4.13%',
      salePriceUnit: '$1,43,500',
      salePriceSqFt: '$189',
      adjPriceUnit: '135,000',
      adjPriceSqFt: '$178',
      adj: '-5.92%',
      comparison: 'Superior',
      milesFromSubject: '18',
      img: '/assets/TX75239.png'
    },
    {
      property: 'Mandalay Palms Shoreside 7501 Chesterfied Dallas, TX 75237',
      yearbuilt: '1985',
      unit: '343',
      occupancy: '94.8%',
      totalSqFt: '209,172',
      avgSqFtUnit: '610',
      dateOfSale: '1/10/2022',
      salePrice: '$40,000,000',
      capRate: '4.23%',
      salePriceUnit: '$116,618',
      salePriceSqFt: '$191',
      adjPriceUnit: '$124,000',
      adjPriceSqFt: '$203',
      adj: '6.33%',
      comparison: 'Inferior',
      milesFromSubject: '10',
      img: '/assets/TX75240.png'
    },
    {
      property: 'Tesore at 4271 Altoona or Dallas, TX 75233',
      yearbuilt: '1984',
      unit: '536',
      occupancy: '93.0%',
      totalSqFt: '383,350',
      avgSqFtUnit: '715',
      dateOfSale: '6/24/2022',
      salePrice: '$64,200,000',
      capRate: '5.25%',
      salePriceUnit: '$119,776',
      salePriceSqFt: '$167',
      adjPriceUnit: '$120,000',
      adjPriceSqFt: '$168',
      adj: '0.19%',
      comparison: 'Similar',
      milesFromSubject: '17',
      img: '/assets/TX75233.png'
    },
  ];

  styleObj = {
    width: '100%',
    height: '400px'
  }
  mapImage: any = {}
  gridOptions: GridOptions = {
    pagination: true,
    defaultColDef: {
      resizable: true,
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

  onCellClicked(e): void {
    this.mapImage = e.data;
  }
}
