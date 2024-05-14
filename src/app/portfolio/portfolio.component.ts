import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { PortfolioCardComponent } from "../portfolio-card/portfolio-card.component";
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [PortfolioCardComponent, CommonModule]
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  constructor(private projectService: ProjectsService) {

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
};
