import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // todo add project links to bind button to repository
  projects: Project[] = [
    {
      id: 0,
      title: 'Project One',
      subtitle: 'Subtitle One',
      description: 'This is a brief description of Project One.',
      tags: [Tag.ANGULAR, Tag.FIREBASE, Tag.TYPESCRIPT]
    },
    {
      id: 1,
      title: 'Project Two',
      subtitle: 'Subtitle Two',
      description: 'This is a brief description of Project Two.',
      tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.NODEJS]
    },
    {
      id: 2,
      title: 'Project Three',
      subtitle: 'Subtitle Three',
      description: 'This is a brief description of Project Three.',
      tags: [Tag.VUE, Tag.JAVASCRIPT, Tag.VUETIFY]
    },
    {
      id: 3,
      title: 'Project Four',
      subtitle: 'Subtitle Four',
      description: 'This is a brief description of Project Four.',
      tags: [Tag.SVELTE, Tag.JAVASCRIPT, Tag.SAPPER]
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (!project) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }
}
