import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'portfolio-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @HostBinding('style.--line-1-length') text1Length: number = 0;
  @HostBinding('style.--line-2-length') text2Length: number = 0;
  @HostBinding('style.--line-3-length') text3Length: number = 0;

  public _line1Text = 'Hello, world';
  public _line2Text = `I'm Rafal 👨‍💻`;
  public _line3Text = 'Welcome to my land of code!';

  ngOnInit(): void {
    this.text1Length = this._line1Text.length;
    this.text2Length = this._line2Text.length;
    this.text3Length = this._line3Text.length;
  }

  ngAfterViewInit(): void {
    this.changeVideoSpeed(0.75);
  }

  changeVideoSpeed(speed: number) {
    const video = this.video.nativeElement as HTMLVideoElement;
    video.playbackRate = speed;
  }
}
