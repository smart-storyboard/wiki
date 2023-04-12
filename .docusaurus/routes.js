import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/__docusaurus/debug',
    component: ComponentCreator('/wiki/__docusaurus/debug', 'b24'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/config',
    component: ComponentCreator('/wiki/__docusaurus/debug/config', '559'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/content',
    component: ComponentCreator('/wiki/__docusaurus/debug/content', '639'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/wiki/__docusaurus/debug/globalData', '601'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/wiki/__docusaurus/debug/metadata', '907'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/wiki/__docusaurus/debug/registry', 'e5b'),
    exact: true
  },
  {
    path: '/wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/wiki/__docusaurus/debug/routes', 'cb1'),
    exact: true
  },
  {
    path: '/wiki/markdown-page',
    component: ComponentCreator('/wiki/markdown-page', '1ce'),
    exact: true
  },
  {
    path: '/wiki/',
    component: ComponentCreator('/wiki/', 'c9a'),
    routes: [
      {
        path: '/wiki/',
        component: ComponentCreator('/wiki/', '9e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/admin/course-settings',
        component: ComponentCreator('/wiki/admin/course-settings', '426'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/admin/structure',
        component: ComponentCreator('/wiki/admin/structure', 'bf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/category/administration-and-configuration',
        component: ComponentCreator('/wiki/category/administration-and-configuration', '691'),
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
        path: '/wiki/using-ssb/assessment',
        component: ComponentCreator('/wiki/using-ssb/assessment', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/dashboard',
        component: ComponentCreator('/wiki/using-ssb/dashboard', '9bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/enrolment',
        component: ComponentCreator('/wiki/using-ssb/enrolment', '29e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/media',
        component: ComponentCreator('/wiki/using-ssb/media', '4fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/modules',
        component: ComponentCreator('/wiki/using-ssb/modules', '27f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/using-ssb/quizzes',
        component: ComponentCreator('/wiki/using-ssb/quizzes', '808'),
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
