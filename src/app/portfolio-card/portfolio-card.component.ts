import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, CommonModule],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  @Input() project!: Project;

  redirectToRepo(url: string): void {
    // '_blank' opens the url in a new tab
    window.open(url, '_blank');
  }
}
