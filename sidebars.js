/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  flowwatcher: [
    {
      type: 'html',
      value: 'FlowWatcher',
      className: 'sidebar-title',
    },
    'index',
    'quickstart',

    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'datasets',
        'analysis',
      ],
    },
  ],
};

module.exports = sidebars;
