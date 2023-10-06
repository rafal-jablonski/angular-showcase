import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'portfolio-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.changeVideoSpeed(0.75);
  }

  changeVideoSpeed(speed: number) {
    const video = this.video.nativeElement as HTMLVideoElement;
    video.playbackRate = speed;
  }
}
