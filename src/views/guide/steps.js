const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: 'Sidebar',
      description: 'Open and Close sidebar',
      position: 'bottom'
    }
  },
  {
    element: '#results-menu',
    stageBackground: '#304156',
    popover: {
      title: 'Results',
      description: 'Browse and analyse results.<br>Options to browse results are old-fashion table view, tree view and pivottable.',
      position: 'right'
    },
    padding: 0
  },
  {
    element: '#testcases-menu',
    stageBackground: '#304156',
    popover: {
      title: 'Testcases',
      description: 'Browse test cases',
      position: 'right'
    },
    padding: 0
  },
  {
    element: '#resources-menu',
    stageBackground: '#304156',
    popover: {
      title: 'Resources',
      description: 'Browse Resources.<br>Tree view is also available.',
      position: 'right'
    },
    padding: 0
  },
  {
    element: '#log-menu',
    stageBackground: '#304156',
    popover: {
      title: 'Logs',
      description: 'Monitor server side logs',
      position: 'right'
    },
    padding: 0
  },

  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Location',
      description: 'Indicate the current page location',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Page Search',
      description: 'Page search, quick navigation',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: 'Set the page into fullscreen',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: 'Switch the system size',
      position: 'left'
    }
  },
  {
    element: '#tabs-view-container',
    popover: {
      title: 'Tabs view',
      description: 'The history of the page you visited',
      position: 'bottom'
    },
    padding: 0
  }

]

export default steps
