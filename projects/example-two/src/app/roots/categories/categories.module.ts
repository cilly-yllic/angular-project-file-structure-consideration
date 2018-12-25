import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';

import { CategoriesRoutingModule } from './categories.routing.module';

import { CategoriesModule as LayoutCategoriesModule } from '~layouts/categories/categories.module';
import { SideNaviModule } from '../../components/side-navi/side-navi.module';

import { TopModule } from '~pages/top/top.module';

// Form Controls
import { AutocompleteModule } from '~pages/autocomplete/autocomplete.module';
import { CheckboxModule } from '~pages/checkbox/checkbox.module';
import { DatepickerModule } from '~pages/datepicker/datepicker.module';
import { FormFieldModule } from '~pages/form-field/form-field.module';
import { InputModule } from '~pages/input/input.module';
import { RadioButtonModule } from '~pages/radio-button/radio-button.module';
import { SelectModule } from '~pages/select/select.module';
import { SliderModule } from '~pages/slider/slider.module';
import { SlideToggleModule } from '~pages/slide-toggle/slide-toggle.module';

import { MenuModule } from '~pages/menu/menu.module';
import { SidenavModule } from '~pages/sidenav/sidenav.module';
import { ToolbarModule } from '~pages/toolbar/toolbar.module';

import { CardModule } from '~pages/card/card.module';
import { DividerModule } from '~pages/divider/divider.module';
import { ExpansionPanelModule } from '~pages/expansion-panel/expansion-panel.module';
import { GridListModule } from '~pages/grid-list/grid-list.module';
import { ListModule } from '~pages/list/list.module';
import { StepperModule } from '~pages/stepper/stepper.module';
import { TabsModule } from '~pages/tabs/tabs.module';
import { TreeModule } from '~pages/tree/tree.module';

import { ButtonModule } from '~pages/button/button.module';
import { ButtonToggleModule } from '~pages/button-toggle/button-toggle.module';
import { BadgeModule } from '~pages/badge/badge.module';
import { ChipsModule } from '~pages/chips/chips.module';
import { IconModule } from '~pages/icon/icon.module';
import { ProgressSpinnerModule } from '~pages/progress-spinner/progress-spinner.module';
import { ProgressBarModule } from '~pages/progress-bar/progress-bar.module';
import { RipplesModule } from '~pages/ripples/ripples.module';

import { BottomSheetModule } from '~pages/bottom-sheet/bottom-sheet.module';
import { DialogModule } from '~pages/dialog/dialog.module';
import { SnackBarModule } from '~pages/snack-bar/snack-bar.module';
import { TooltipModule } from '~pages/tooltip/tooltip.module';

import { PaginatorModule } from '~pages/paginator/paginator.module';
import { SortHeaderModule } from '~pages/sort-header/sort-header.module';
import { TableModule } from '~pages/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,

    LayoutCategoriesModule,
    SideNaviModule,

    TopModule,
    AutocompleteModule,
    CheckboxModule,
    DatepickerModule,
    FormFieldModule,
    InputModule,
    RadioButtonModule,
    SelectModule,
    SliderModule,
    SlideToggleModule,

    MenuModule,
    SidenavModule,
    ToolbarModule,

    CardModule,
    DividerModule,
    ExpansionPanelModule,
    GridListModule,
    ListModule,
    StepperModule,
    TabsModule,
    TreeModule,

    ButtonModule,
    ButtonToggleModule,
    BadgeModule,
    ChipsModule,
    IconModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RipplesModule,

    BottomSheetModule,
    DialogModule,
    SnackBarModule,
    TooltipModule,

    PaginatorModule,
    SortHeaderModule,
    TableModule,
  ],
  declarations: [
    CategoriesComponent,
  ],
})
export class CategoriesModule { }
