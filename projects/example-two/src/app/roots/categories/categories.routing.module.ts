import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';

import { TopGuard } from '~pages/top/top.guard';
import { TopComponent } from '~pages/top/top.component';

import { AutocompleteComponent } from '~pages/autocomplete/autocomplete.component';
import { CheckboxComponent } from '~pages/checkbox/checkbox.component';
import { DatepickerComponent } from '~pages/datepicker/datepicker.component';
import { FormFieldComponent } from '~pages/form-field/form-field.component';
import { InputComponent } from '~pages/input/input.component';
import { RadioButtonComponent } from '~pages/radio-button/radio-button.component';
import { SelectComponent } from '~pages/select/select.component';
import { SliderComponent } from '~pages/slider/slider.component';
import { SlideToggleComponent } from '~pages/slide-toggle/slide-toggle.component';

import { MenuComponent } from '~pages/menu/menu.component';
import { SidenavComponent } from '~pages/sidenav/sidenav.component';
import { ToolbarComponent } from '~pages/toolbar/toolbar.component';

import { CardComponent } from '~pages/card/card.component';
import { DividerComponent } from '~pages/divider/divider.component';
import { ExpansionPanelComponent } from '~pages/expansion-panel/expansion-panel.component';
import { GridListComponent } from '~pages/grid-list/grid-list.component';
import { ListComponent } from '~pages/list/list.component';
import { StepperComponent } from '~pages/stepper/stepper.component';
import { TabsComponent } from '~pages/tabs/tabs.component';
import { TreeComponent } from '~pages/tree/tree.component';

import { ButtonComponent } from '~pages/button/button.component';
import { ButtonToggleComponent } from '~pages/button-toggle/button-toggle.component';
import { BadgeComponent } from '~pages/badge/badge.component';
import { ChipsComponent } from '~pages/chips/chips.component';
import { IconComponent } from '~pages/icon/icon.component';
import { ProgressSpinnerComponent } from '~pages/progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from '~pages/progress-bar/progress-bar.component';
import { RipplesComponent } from '~pages/ripples/ripples.component';

import { BottomSheetComponent } from '~pages/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from '~pages/dialog/dialog.component';
import { SnackBarComponent } from '~pages/snack-bar/snack-bar.component';
import { TooltipComponent } from '~pages/tooltip/tooltip.component';

import { PaginatorComponent } from '~pages/paginator/paginator.component';
import { SortHeaderComponent } from '~pages/sort-header/sort-header.component';
import { TableComponent } from '~pages/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: 'categories',
        children: [
          { path: 'autocomplete', component: AutocompleteComponent },
          { path: 'checkbox', component: CheckboxComponent },
          { path: 'datepicker', component: DatepickerComponent },
          { path: 'form_field', component: FormFieldComponent },
          { path: 'input', component: InputComponent },
          { path: 'radio_button', component: RadioButtonComponent },
          { path: 'select', component: SelectComponent },
          { path: 'slider', component: SliderComponent },
          { path: 'slide_toggle', component: SlideToggleComponent },

          { path: 'menu', component: MenuComponent },
          { path: 'sidenav', component: SidenavComponent },
          { path: 'toolbar', component: ToolbarComponent },

          { path: 'card', component: CardComponent },
          { path: 'divider', component: DividerComponent },
          { path: 'expansion_panel', component: ExpansionPanelComponent },
          { path: 'grid_list', component: GridListComponent },
          { path: 'list', component: ListComponent },
          { path: 'stepper', component: StepperComponent },
          { path: 'tabs', component: TabsComponent },
          { path: 'tree', component: TreeComponent },

          { path: 'button', component: ButtonComponent },
          { path: 'button_toggle', component: ButtonToggleComponent },
          { path: 'badge', component: BadgeComponent },
          { path: 'chips', component: ChipsComponent },
          { path: 'icon', component: IconComponent },
          { path: 'progress_spinner', component: ProgressSpinnerComponent },
          { path: 'progress_bar', component: ProgressBarComponent },
          { path: 'ripples', component: RipplesComponent },

          { path: 'bottom_sheet', component: BottomSheetComponent },
          { path: 'dialog', component: DialogComponent },
          { path: 'snack_bar', component: SnackBarComponent },
          { path: 'tooltip', component: TooltipComponent },

          { path: 'paginator', component: PaginatorComponent },
          { path: 'sort_header', component: SortHeaderComponent },
          { path: 'table', component: TableComponent },

          {
            path: '',
            canActivateChild: [ TopGuard ],
            children: [
              { path: '', component: TopComponent },
              { path: ':category', component: TopComponent },
            ]
          },
        ] },
      { path: '**', redirectTo: '/categories' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule],
  providers: [ ]
})
export class CategoriesRoutingModule { }
