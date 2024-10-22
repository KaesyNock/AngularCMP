import { Component, HostBinding, HostListener, inject, input, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
     '(click)': 'onClick()'
  }
  //preferred method of adding :host
  //Angular team prefer event listeners over @hostlistener
  //see notes.txt
})
export class ControlComponent {
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  //@HostListener allows you to bind a method to an event
  // preferred approach for certain devs
  // @HostBinding('class') className = 'control';<< exists for backward compatibility
  //HostBinding looks at property className and sets control as the value
  // () in hostbinding allows you to set the property enabling you to adjust the name of the property
  // I.E. @HostBinding('class') className = 'control' (class) establishes the property, className allows you to avoid confusion with class property
  //not the preferred method
  label = input.required<string>();
  private el = inject(ElementRef);

  // By using inject(ElementRef) angular gives you access to the host element of a component
  //ElementRef refers to any Element on the page, obvs
  //ElementRef allows programmatic access to component

  onClick() {
    console.log('Clicked!');
    console.log(this.el)
  }
}


// stopping point- control styling and making it global
