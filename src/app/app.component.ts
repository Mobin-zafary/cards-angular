import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

 posts = [{
  title :' elephente',
  imageUrl : 'assets/image/fil.png',
  username : 'proje', 
  content : "i saw neat zoon"

 },
 {
  title :' tree',
  imageUrl : 'assets/image/nature.jpeg',
  username : 'nature', 
  content : "i saw neat tree"

 },
 {
  title :' phone',
  imageUrl : 'assets/image/phone.jpeg',
  username : 'phone', 
  content : "i saw neat phone"

 }]
  title: any;
 
}
