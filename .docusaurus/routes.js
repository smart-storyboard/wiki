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
    path: '/wiki/',
    component: ComponentCreator('/wiki/', 'd1c'),
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
        path: '/wiki/build/adding-media',
        component: ComponentCreator('/wiki/build/adding-media', '626'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/build/building',
        component: ComponentCreator('/wiki/build/building', 'd70'),
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
        path: '/wiki/category/course-build',
        component: ComponentCreator('/wiki/category/course-build', '00d'),
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
