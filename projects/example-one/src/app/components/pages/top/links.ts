const BASE = '/categories';
export default {
  default: [
    {
      title: 'Form Controls',
      link: `${BASE}/form_control`,
      content: 'Controls that collect and validate user input.'
    },
    {
      title: 'Navigation',
      link: `${BASE}/navigation`,
      content: 'Menus, sidenavs and toolbars that organise your content.'
    },
    {
      title: 'Layout',
      link: `${BASE}/layout`,
      content: 'Essential building blocks for presenting your content.'
    },
    {
      title: 'Buttons & Indicators',
      link: `${BASE}/button_indicators`,
      content: 'Buttons, toggles, status and progress indicators.'
    },
    {
      title: 'Popups & Modals',
      link: `${BASE}/popups_modals`,
      content: 'Floating components that can be dynamically shown or hidden.'
    },
    {
      title: 'Data table',
      link: `${BASE}/data_table`,
      content: 'Tools for displaying and interacting with tabular data.'
    },
  ],
  form_control: [
    {
      title: 'Autocomplete',
      link: `${BASE}/autocomplete`,
      content: 'Suggests relevant options as the user types.'
    },
    {
      title: 'Checkbox',
      link: `${BASE}/checkbox`,
      content: 'Captures boolean input with an optional indeterminate mode.'
    },
    {
      title: 'Datepicker',
      link: `${BASE}/datepicker`,
      content: 'Capture dates, agnostic about their internal representation.'
    },
    {
      title: 'Form field',
      link: `${BASE}/form_field`,
      content: 'Wraps input fields so they are displayed consistently.'
    },
    {
      title: 'Input',
      link: `${BASE}/input`,
      content: 'Enables inputs to be used within a Form field.'
    },
    {
      title: 'Radio button',
      link: `${BASE}/radio_button`,
      content: 'Allows the user to select one option form group.'
    },
    {
      title: 'Select',
      link: `${BASE}/select`,
      content: 'Allows the user to select one or more options using a dropdown.'
    },
    {
      title: 'Slider',
      link: `${BASE}/slider`,
      content: 'Allows the user to input a value by dragging along a slider.'
    },
    {
      title: 'Slide toggle',
      link: `${BASE}/slide_toggle`,
      content: 'Captures boolean values as a clickable and draggable switch.'
    },
  ],
  navigation: [
    {
      title: 'Menu',
      link: `${BASE}/menu`,
      content: 'A floating of nestable options.'
    },
    {
      title: 'Sidenav',
      link: `${BASE}/sidenav`,
      content: 'A container for content that is fixed to one side of the screen.'
    },
    {
      title: 'Toolbar',
      link: `${BASE}/toolbar`,
      content: 'A container for top-level titles and controls.'
    },
  ],
  layout: [
    {
      title: 'Card',
      link: `${BASE}/card`,
      content: 'A styled container for pieces of itemized content.'
    },
    {
      title: 'Divider',
      link: `${BASE}/divider`,
      content: 'A vertical or horizontal visual divider.'
    },
    {
      title: 'Expansion Panel',
      link: `${BASE}/expansion_panel`,
      content: 'A container which can be expanded to reveal more content.'
    },
    {
      title: 'Grid list',
      link: `${BASE}/grid_list`,
      content: 'A flexible structure for presenting content items in a grid.'
    },
    {
      title: 'List',
      link: `${BASE}/list`,
      content: 'Presents conventional lists of items.'
    },
    {
      title: 'Stepper',
      link: `${BASE}/stepper`,
      content: 'Presents content as steps through which to progress.'
    },
    {
      title: 'Tabs',
      link: `${BASE}/tabs`,
      content: 'Only presents one view as a time form a provided set of views.'
    },
    {
      title: 'Tree',
      link: `${BASE}/tree`,
      content: 'Presents hierarchical content as an expandable tree.'
    },
  ],
  button_indicators: [
    {
      title: 'Button',
      link: `${BASE}/button`,
      content: 'An interactive button with a range of presentation options.'
    },
    {
      title: 'Button toggle',
      link: `${BASE}/button_toggle`,
      content: 'A groupable on/off toggle for enabling disabling options.'
    },
    {
      title: 'Badge',
      link: `${BASE}/badge`,
      content: 'A small value indicator that can be overlaid on another object.'
    },
    {
      title: 'Chips',
      link: `${BASE}/chips`,
      content: 'Presents a list of items as a set of small, tactile entities.'
    },
    {
      title: 'Icon',
      link: `${BASE}/icon`,
      content: 'Renders a specified icon.'
    },
    {
      title: 'Progress spinner',
      link: `${BASE}/progress_spinner`,
      content: 'A circular progress indicator. '
    },
    {
      title: 'Progress bar',
      link: `${BASE}/progress_bar`,
      content: 'A linear progress indicator.'
    },
    {
      title: 'Ripples',
      link: `${BASE}/ripples`,
      content: 'Directive for adding Material Design ripple effects.'
    },
  ],
  popups_modals: [
    {
      title: 'Bottom Sheet',
      link: `${BASE}/bottom_sheet`,
      content: 'A large interactive panel primarily for mobile devices.'
    },
    {
      title: 'Dialog',
      link: `${BASE}/dialog`,
      content: 'A configurable modal that displays dynamic content.'
    },
    {
      title: 'Snackbar',
      link: `${BASE}/snack_bar`,
      content: 'Displays short actionable messages as an uninvasive alert.'
    },
    {
      title: 'Tooltip',
      link: `${BASE}/tooltip`,
      content: 'Displays floating content when an object is hovered.'
    },
  ],
  data_table: [
    {
      title: 'Paginator',
      link: `${BASE}/paginator`,
      content: 'Controls for displaying paged data.'
    },
    {
      title: 'Sort header',
      link: `${BASE}/sort_header`,
      content: 'Allows the user to configure how tabular data is sorted.'
    },
    {
      title: 'Table',
      link: `${BASE}/table`,
      content: 'A configurable component for displaying tabular data.'
    },
  ]
};
