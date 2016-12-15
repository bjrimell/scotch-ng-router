// ad component
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'ad',
  templateUrl: './app/ad.html'
})
export class AdComponent implements AfterViewInit {

  ngAfterViewInit() {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }
}