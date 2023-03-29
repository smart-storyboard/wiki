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
    component: ComponentCreator('/wiki/docs', '183'),
    routes: [
      {
        path: '/wiki/docs/category/tutorial---basics',
        component: ComponentCreator('/wiki/docs/category/tutorial---basics', '6cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/category/tutorial---extras',
        component: ComponentCreator('/wiki/docs/category/tutorial---extras', '0a1'),
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
        path: '/wiki/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/wiki/docs/tutorial-basics/congratulations', '4e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/wiki/docs/tutorial-basics/create-a-blog-post', '2d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/wiki/docs/tutorial-basics/create-a-document', 'e22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/wiki/docs/tutorial-basics/create-a-page', '750'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/wiki/docs/tutorial-basics/deploy-your-site', 'a6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/wiki/docs/tutorial-basics/markdown-features', '2f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/wiki/docs/tutorial-extras/manage-docs-versions', 'a07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wiki/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/wiki/docs/tutorial-extras/translate-your-site', 'fe7'),
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
