import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/__docusaurus/debug',
    component: ComponentCreator('/wiki/__docusaurus/debug', '9c6'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/config',
    component: ComponentCreator('/wiki/__docusaurus/debug/config', '77b'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/content',
    component: ComponentCreator('/wiki/__docusaurus/debug/content', '868'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/wiki/__docusaurus/debug/globalData', 'f59'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/wiki/__docusaurus/debug/metadata', '9e2'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/wiki/__docusaurus/debug/registry', '6d1'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/wiki/__docusaurus/debug/routes', '28b'),
    exact: true
  },
  {
    path: '/wiki/markdown-page',
    component: ComponentCreator('/wiki/markdown-page', '017'),
    exact: true
  },
  {
    path: '/wiki/docs',
    component: ComponentCreator('/wiki/docs', '9fb'),
    routes: [
      {
        path: '/wiki/docs/category/using-smart-storyboard',
        component: ComponentCreator('/wiki/docs/category/using-smart-storyboard', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/intro',
        component: ComponentCreator('/wiki/docs/intro', '619'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/using-ssb/account',
        component: ComponentCreator('/wiki/docs/using-ssb/account', '6e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/using-ssb/enrolment',
        component: ComponentCreator('/wiki/docs/using-ssb/enrolment', '1ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/wiki/',
    component: ComponentCreator('/wiki/', 'c0d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
