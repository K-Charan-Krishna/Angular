import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    // this.filteredObj = this.getAllProjects();
  }
   projectSamples = [
  {
    type: 'Static',
    projectName: 'Personal Portfolio',
    description: 'A single-page website showcasing resume, projects, and contact details with no server-side logic.'
  },
  {
    type: 'Dynamic',
    projectName: 'Real-Time Chat App',
    description: 'A web application where users can send and receive messages instantly using WebSockets and Node.js.'
  },
  {
    type: 'Responsive',
    projectName: 'E-Commerce Storefront',
    description: 'A mobile-friendly UI that adjusts layout and product grid based on screen size using Bootstrap or Flexbox.'
  },
  {
    type: 'Static',
    projectName: 'Product Landing Page',
    description: 'A marketing page built with HTML/CSS promoting a single product or campaign with static content.'
  },
  {
    type: 'Dynamic',
    projectName: 'Job Board Platform',
    description: 'Displays job listings fetched from an API, allows filtering, and enables recruiters to post jobs.'
  },
  {
    type: 'Responsive',
    projectName: 'Restaurant Menu App',
    description: 'An adaptive menu site that rearranges grid cards and images for desktop, tablet, and mobile users.'
  },
  {
    type: 'Static',
    projectName: 'FAQ/Help Center',
    description: 'A collection of help articles rendered from static markdown or HTML, hosted on a CDN.'
  },
  {
    type: 'Dynamic',
    projectName: 'Expense Tracker',
    description: 'Users can add, edit, and delete transactions stored in a backend database with user authentication.'
  },
  {
    type: 'Responsive',
    projectName: 'Fitness Blog',
    description: 'A responsive blog layout that looks great on mobile, with images and typography adjusting fluidly.'
  },
  {
    type: 'Dynamic',
    projectName: 'Weather Forecast App',
    description: 'Pulls real-time data from a weather API and updates the UI with forecasts based on user location.'
  }
];
  
// filteredObj: any[] = [];
selectedType:string="all"
// switch (selectedType) {
//     case 'all':
//       this.filteredObj = this.getAllProjects();
//       break;
//     case 'static':
//       this.filteredObj  = this.getStaticProjects();
//       break;
//     case 'dynamic':
//       this.filteredObj  = this.getDynamicProjects();
//       break;
//     case 'responsive':
//       this.filteredObj  = this.getResponsiveProjects();
//       break;
//   }

onChildhandel(messages:string){
  console.log(`message from ${messages}`)
}

// getAllProjects(){
//   return this.projectSamples
// }

// getStaticProjects(){
//   return this.projectSamples.filter(each=>each.type==="Static")
// }

// getDynamicProjects(){
//   return this.projectSamples.filter(each=>each.type==="Dynamic")
// }
// getResponsiveProjects(){
//   return this.projectSamples.filter(each=>each.type==="Responsive")
// }
getTotalProjects(){
  return this.projectSamples.length
}
}
