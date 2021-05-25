import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-youtube',
  templateUrl: './modal-youtube.component.html',
  styleUrls: ['./modal-youtube.component.scss']
})
export class ModalYoutubeComponent implements OnInit {
 @Output() greatEvent = new EventEmitter();
 @Input() text_Movie :any;
 Text:boolean = false;
 textPhim:string = "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
  constructor() { }

  ngOnInit(): void {
    console.log(this.text_Movie)
  }

  closeModal(){
    this.greatEvent.emit(this.Text);
  }
  returnTextPhim(){
    return this.textPhim
  }

}
