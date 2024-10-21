import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerComponent, TrafficComponent, SupportTicketsComponent],
})
export class AppComponent {}
