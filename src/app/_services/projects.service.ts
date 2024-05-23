import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      title: 'Fitness Gamification',
      subtitle: 'Mobile Application for iOS and Android',
      description: 'For my bachelor thesis, I have created a mobile application which allows users to challenge their friends in Pullups. Using the built in sensors from the phone the app registers repetitions and compares them to the challengers.',
      url: 'https://apps.apple.com/ch/app/fitchallenge/id6449786268',
      url_text: 'App Store',
      tags: [Tag.JAVASCRIPT, Tag.FIREBASE, Tag.REACTNATIVE, Tag.EXPO]
    },
    {
      id: 1,
      title: 'GhostAR',
      subtitle: 'Experimental augmented reality game based on Vuforia',
      description: 'I developed this game during my internship at the HSR. Catch ghosts in augmented reality using image recognition. An experimental project to learn more about AR and Unity. It is kind of a basic version of Pokemon Go.',
      url: 'https://github.com/lvonnied/GhostAR',
      url_text: 'GitHub',
      tags: [Tag.CSHARP, Tag.VUFORIA, Tag.UNITY]
    },
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
