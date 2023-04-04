import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/markdown-page',
    component: ComponentCreator('/wiki/markdown-page', '017'),
    exact: true
  },
  {
    path: '/wiki/',
    component: ComponentCreator('/wiki/', 'eab'),
    routes: [
      {
        path: '/wiki/',
        component: ComponentCreator('/wiki/', '9e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/category/using-smart-storyboard',
        component: ComponentCreator('/wiki/category/using-smart-storyboard', 'efd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/account',
        component: ComponentCreator('/wiki/using-ssb/account', 'c73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/enrolment',
        component: ComponentCreator('/wiki/using-ssb/enrolment', '29e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
