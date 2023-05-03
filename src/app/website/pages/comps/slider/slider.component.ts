import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() images:string[]=[];
  currentSlide = 0;
  styles={}
  timer!:NodeJS.Timeout

  constructor() { }
  slide(add:boolean){
    if (add){
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    }
    else{
      if(this.currentSlide==0){
        this.currentSlide=this.images.length-1
      }
      else{
        this.currentSlide = Math.abs((this.currentSlide-1) % this.images.length)
      }
    }
    this.styles={
      transform:`translateX(-${this.currentSlide*100}%)`,
      width:`calc(100%/${this.images.length})`,
    };
    clearInterval(this.timer)
    this.timerStart()
  }
  timerStart(){
    this.timer=setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
      this.styles={
        transform:`translateX(-${this.currentSlide*100}%)`,
        width:`calc(100%/${this.images.length})`,
      };
    }, 3000);

  }
  ngOnInit() {
    this.styles={
      transform:`translateX(-${this.currentSlide*100}%)`,
      width:`calc(100%/${this.images.length})`,
    };
    this.timerStart()
  }
}
