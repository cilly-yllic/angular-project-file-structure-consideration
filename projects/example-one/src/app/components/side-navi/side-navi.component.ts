import { Component, OnInit } from '@angular/core';

const BASE = '/categories';

@Component({
  selector: 'app-side-navi',
  templateUrl: './side-navi.component.html',
  styleUrls: ['./side-navi.component.scss']
})
export class SideNaviComponent implements OnInit {

  panels = [
    {
      title: 'Form Controls',
      links: [
        { title: 'Autocomplete', link: `${BASE}/autocomplete` },
        { title: 'Checkbox', link: `${BASE}/checkbox` },
        { title: 'Datepicker', link: `${BASE}/datepicker` },
        { title: 'Form field', link: `${BASE}/form_field` },
        { title: 'Input', link: `${BASE}/input` },
        { title: 'Radio button', link: `${BASE}/radio_button` },
        { title: 'Select', link: `${BASE}/select` },
        { title: 'Slider', link: `${BASE}/slider` },
        { title: 'Slide toggle', link: `${BASE}/slide_toggle` },
      ]
    },
    {
      title: 'Navigation',
      links: [
        { title: 'Menu', link: `${BASE}/menu` },
        { title: 'Sidenav', link: `${BASE}/sidenav` },
        { title: 'Toolbar', link: `${BASE}/toolbar` },
      ]
    },
    {
      title: 'Layout',
      links: [
        { title: 'Card', link: `${BASE}/card` },
        { title: 'Divider', link: `${BASE}/divider` },
        { title: 'Expansion Panel', link: `${BASE}/expansion_panel` },
        { title: 'Grid list', link: `${BASE}/grid_list` },
        { title: 'List', link: `${BASE}/list` },
        { title: 'Stepper', link: `${BASE}/stepper` },
        { title: 'Tabs', link: `${BASE}/tabs` },
        { title: 'Tree', link: `${BASE}/tree` },
      ]
    },
    {
      title: 'Buttons & indicators',
      links: [
        { title: 'Button', link: `${BASE}/button` },
        { title: 'Button toggle', link: `${BASE}/button_toggle` },
        { title: 'Badge', link: `${BASE}/badge` },
        { title: 'Chips', link: `${BASE}/chips` },
        { title: 'Icon', link: `${BASE}/icon` },
        { title: 'Progress spinner', link: `${BASE}/progress_spinner` },
        { title: 'Progress bar', link: `${BASE}/progress_bar` },
        { title: 'Ripples', link: `${BASE}/ripples` },
      ]
    },
    {
      title: 'Popups & Modals',
      links: [
        { title: 'Bottom Sheet', link: `${BASE}/bottom_sheet` },
        { title: 'Dialog', link: `${BASE}/dialog` },
        { title: 'Snackbar', link: `${BASE}/snack_bar` },
        { title: 'Tooltip', link: `${BASE}/tooltip` },
      ]
    },
    {
      title: 'Data Table',
      links: [
        { title: 'Paginator', link: `${BASE}/paginator` },
        { title: 'Sort header', link: `${BASE}/sort_header` },
        { title: 'Table', link: `${BASE}/table` },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
