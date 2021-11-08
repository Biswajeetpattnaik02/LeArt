import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paint-video',
  templateUrl: './paint-video.component.html',
  styleUrls: ['./paint-video.component.scss']
})
export class PaintVideoComponent implements OnInit {

  constructor() { }

  // colors={
  //   "CC0F32":"Cadmium Red",
  //   "8A3324":"Burnt Umber",
  //   "0047AB":"Cobalt Blue",
  //   "228B22":"Forest Green",
  //   "322D25":"Brown Black",
  //   "BC3823":"Vermilion",
  //   "7C292A":"Crimson Red"
  // }

  colors: any;
  longText:any;

  ngOnInit(): void {
    this.colors = [
      { id: "CC0F32", name: 'Cadmium Red' },
      { id: "8A3324", name: 'Burnt Umber' },
      { id: "0047AB", name: 'Cobalt Blue' },
      { id: "228B22", name: 'Forest Green' },
      { id: "322D25", name: 'Brown Black' },
      { id: "BC3823", name: 'Vermilion' },
      { id: "7C292A", name: 'Crimson Red' }
    ];

    this.longText = `Lucy is a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in Ecity. 
    Regarded as one of the most influential artists of the 20th century.Several paintings by Lucy rank among the most expensive paintings in the world.
     Garçon à la pipe sold for US$104 million at Sotheby's on 4 May 2004, establishing a new price record.But Lucy is a bitch.`;
  }

  getColor(id:any)
  {
    return "#"+id;
  }

}
