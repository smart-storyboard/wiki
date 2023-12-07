import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/markdown-page',
    component: ComponentCreator('/wiki/markdown-page', '84a'),
    exact: true
  },
  {
    path: '/wiki/',
    component: ComponentCreator('/wiki/', 'f3d'),
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
        path: '/wiki/admin/dashboard',
        component: ComponentCreator('/wiki/admin/dashboard', '328'),
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
        path: '/wiki/category/learning-video-production-in-smart-storyboard',
        component: ComponentCreator('/wiki/category/learning-video-production-in-smart-storyboard', 'e08'),
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
      },
      {
        path: '/wiki/using-ssb/request',
        component: ComponentCreator('/wiki/using-ssb/request', '2ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/video/intro',
        component: ComponentCreator('/wiki/video/intro', '660'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/video/video-media',
        component: ComponentCreator('/wiki/video/video-media', 'fa6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/video/writing-video',
        component: ComponentCreator('/wiki/video/writing-video', '978'),
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
