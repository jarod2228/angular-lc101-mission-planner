import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    "Habitat",
    "Drones",
    "Food containers",
    "Oxygen tanks"
  ];

  pieceBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }
add(pieceName: string) {
  this.equipment.push(pieceName);
}
remove(piece: string) {
  let index = this.equipment.indexOf(piece);
  this.equipment.splice(index,1);
}
edit(piece: string) {
  this.pieceBeingEdited = piece;
}
save(piece: string) {
  let index = this.equipment.indexOf(piece);
  this.equipment.splice(index, 1, piece);
  this.pieceBeingEdited = null;
}
}
