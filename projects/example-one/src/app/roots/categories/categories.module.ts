import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBottomSheetModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTreeModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { CategoriesComponent as LayoutCategoriesComponent } from '../../components/layouts/categories/categories.component';
import { SideNaviComponent } from '../../components/side-navi/side-navi.component';
import { ExampleComponent as LayoutExampleComponent } from '~layouts/example/example.component';
import { DynamicDirective, DynamicListComponent, DynamicComponent } from '~dynamic';

import { TopGuard } from '~pages/top/top.guard';
import { TopComponent } from '~pages/top/top.component';

/**
 * pages
 */

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

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories.routing.module';

/**
 * examples
 */

// Form Controls
import {
  AutocompleteOverviewComponent, AutocompleteSimpleComponent, AutocompleteDisplayComponent, AutocompleteFilterComponent,
  AutocompleteOptionGroupComponent, AutocompleteHighlightComponent,
} from '~examples/autocomplete';
import { CheckboxConfigurableComponent } from '~examples/checkbox';
import {
  DatepickerOverviewComponent, DatepickerStartViewComponent, DatepickerValueComponent, DatepickerMinMaxComponent, DatepickerFilterComponent,
  DatepickerEventsComponent, DatepickerDisabledComponent, DatepickerTouchComponent, DatepickerApiComponent, DatepickerLocaleComponent,
  DatepickerMomentComponent, DatepickerFormatsComponent
} from '~examples/datepicker';
import {
  FormFieldOverviewComponent, FormFieldLabelComponent, FormFieldHintComponent, FormFieldErrorComponent, FormFieldPrefixSuffixComponent,
  FormFieldThemingComponent, FormFieldCustomControlComponent, FormFieldTelInputComponent
} from '~examples/form-field';
import {
  InputOverviewComponent, InputErrorStateMatcherComponent, InputAutosizeTextareaComponent, InputClearableComponent, InputErrorsComponent,
  InputFormComponent, InputHintComponent, InputPrefixSuffixComponent
} from '~examples/input';
import { RadioButtonNgModelComponent } from '~examples/radio-button';
import {
  SelectOverviewComponent, SelectValueBindingComponent, SelectFormComponent, SelectHintErrorComponent, SelectDisabledComponent,
  SelectResetComponent, SelectOptionGroupComponent, SelectMultipleComponent, SelectCustomTriggerComponent, SelectNoRippleComponent,
  SelectPanelClassComponent, SelectErrorStateMatcherComponent
} from '~examples/select';
import { SliderConfigurableComponent } from '~examples/slider';
import { SlideToggleConfigurableComponent } from '~examples/slide-toggle';

// Navigation
import { MenuOverviewComponent, MenuIconsComponent, MenuNestedComponent } from '~examples/menu';
import { SidenavDrawerOverviewComponent, SidenavAutosizeComponent } from '~examples/sidenav';
import { ToolbarMultirowComponent } from '~examples/toolbar';

// Layout
import { CardFancyComponent } from '~examples/card';
import { DividerOverviewComponent } from '~examples/divider';
import { ExpansionPanelOverviewComponent, ExpansionPanelStepsComponent } from '~examples/expansion-panel';
import { GridListDynamicComponent } from '~examples/grid-list';
import { ListSectionsComponent } from '~examples/list';
import { StepperOverviewComponent } from '~examples/stepper';
import {
  TabGroupBasicComponent, TabGroupCustomLabelComponent, TabGroupDynamicHeightComponent, TabGroupDynamicComponent,
  TabGroupHeaderBelowComponent, TabGroupLazyLoadedComponent, TabGroupStretchedComponent, TabGroupThemeComponent, TabGroupAsyncComponent,
  TabNavBarBasicComponent
} from '~examples/tab';
import {
  TreeDynamicComponent, TreeFlatOverviewComponent, TreeChecklistComponent, TreeNestedOverviewComponent, TreeLoadmoreComponent
} from '~examples/tree';

// Buttons & Indicators
import { ButtonTypesComponent } from '~examples/button';
import { ButtonToggleExclusiveComponent } from '~examples/button-toggle';
import { BadgeOverviewComponent } from '~examples/badge';
import { ChipsOverviewComponent, ChipsAutocompleteComponent, ChipsInputComponent, ChipsStackedComponent } from '~examples/chips';
import { IconSvgComponent } from '~examples/icon';
import { ProgressSpinnerConfigurableComponent } from '~examples/progress-spinner';
import { ProgressBarConfigurableComponent } from '~examples/progress-bar';
import { RippleOverviewComponent } from '~examples/ripple';

// Popups & Modals
import { BottomSheetOverviewComponent, BottomSheetOverviewSheetComponent } from '~examples/bottom-sheet';
import { DialogOverviewComponent, DialogOverviewDialogComponent } from '~examples/dialog';
import { SnackBarComponentComponent, SnackBarComponentSnackComponent } from '~examples/snack-bar';
import {
  TooltipOverviewComponent, TooltipPositionComponent, TooltipCustomClassComponent, TooltipDelayComponent, TooltipDisabledComponent,
  TooltipManualComponent, TooltipMessageComponent, TooltipModifiedDefaultsComponent, TooltipAutoHideComponent
} from '~examples/tooltip';

// Data table
import { PaginatorConfigurableComponent } from '~examples/paginator';
import { SortOverviewComponent } from '~examples/sort';
import {
  TableBasicComponent, TableBasicFlexComponent, TableDynamicColumnsComponent, TableExpandableRowsComponent, TableFilteringComponent,
  TableFooterRowComponent, TableHttpComponent, TableMultipleHeaderFooterComponent, TableOverviewComponent, TablePaginationComponent,
  TableRowContextComponent, TableSelectionComponent, TableSortingComponent, TableStickyColumnsComponent, TableStickyFooterComponent,
  TableStickyHeaderComponent,
} from '~examples/table';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,

    FormsModule, ReactiveFormsModule,

    // DynamicModule,

    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatBottomSheetModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatTreeModule,
    MatToolbarModule, MatTooltipModule,
  ],
  declarations: [
    CategoriesComponent,

    LayoutCategoriesComponent,
    SideNaviComponent,
    LayoutExampleComponent,
    DynamicDirective, DynamicListComponent, DynamicComponent,

    TopComponent,

    AutocompleteComponent, CheckboxComponent, DatepickerComponent, FormFieldComponent, InputComponent, RadioButtonComponent,
    SelectComponent, SliderComponent, SlideToggleComponent,

    MenuComponent, SidenavComponent, ToolbarComponent,

    CardComponent, DividerComponent, ExpansionPanelComponent, GridListComponent, ListComponent, StepperComponent,
    TabsComponent, TreeComponent,

    ButtonComponent, ButtonToggleComponent, BadgeComponent, ChipsComponent, IconComponent, ProgressSpinnerComponent, ProgressBarComponent,
    RipplesComponent,

    BottomSheetComponent, DialogComponent, SnackBarComponent, TooltipComponent,

    PaginatorComponent, SortHeaderComponent, TableComponent,

    /**
     * examples
     */
    // Form Controls
    AutocompleteOverviewComponent, AutocompleteSimpleComponent, AutocompleteDisplayComponent, AutocompleteFilterComponent,
    AutocompleteOptionGroupComponent, AutocompleteHighlightComponent,
    CheckboxConfigurableComponent,
    DatepickerOverviewComponent, DatepickerStartViewComponent, DatepickerValueComponent, DatepickerMinMaxComponent,
    DatepickerFilterComponent, DatepickerEventsComponent, DatepickerDisabledComponent, DatepickerTouchComponent, DatepickerApiComponent,
    DatepickerLocaleComponent, DatepickerMomentComponent, DatepickerFormatsComponent,
    FormFieldOverviewComponent, FormFieldLabelComponent, FormFieldHintComponent, FormFieldErrorComponent, FormFieldPrefixSuffixComponent,
    FormFieldThemingComponent, FormFieldCustomControlComponent, FormFieldTelInputComponent,
    InputOverviewComponent, InputErrorStateMatcherComponent, InputAutosizeTextareaComponent, InputClearableComponent, InputErrorsComponent,
    InputFormComponent, InputHintComponent, InputPrefixSuffixComponent,
    RadioButtonNgModelComponent,
    SelectOverviewComponent, SelectValueBindingComponent, SelectFormComponent, SelectHintErrorComponent, SelectDisabledComponent,
    SelectResetComponent, SelectOptionGroupComponent, SelectMultipleComponent, SelectCustomTriggerComponent, SelectNoRippleComponent,
    SelectPanelClassComponent, SelectErrorStateMatcherComponent,
    SliderConfigurableComponent,
    SlideToggleConfigurableComponent,

    // Navigation
    MenuOverviewComponent, MenuIconsComponent, MenuNestedComponent,
    SidenavDrawerOverviewComponent, SidenavAutosizeComponent,
    ToolbarMultirowComponent,

    // Layout
    CardFancyComponent,
    DividerOverviewComponent,
    ExpansionPanelOverviewComponent, ExpansionPanelStepsComponent,
    GridListDynamicComponent,
    ListSectionsComponent,
    StepperOverviewComponent,
    TabGroupBasicComponent, TabGroupCustomLabelComponent, TabGroupDynamicHeightComponent, TabGroupDynamicComponent,
    TabGroupHeaderBelowComponent, TabGroupLazyLoadedComponent, TabGroupStretchedComponent, TabGroupThemeComponent, TabGroupAsyncComponent,
    TabNavBarBasicComponent,
    TreeDynamicComponent, TreeFlatOverviewComponent, TreeChecklistComponent, TreeNestedOverviewComponent, TreeLoadmoreComponent,

    // Button & Indicators
    ButtonTypesComponent,
    ButtonToggleExclusiveComponent,
    BadgeOverviewComponent,
    ChipsOverviewComponent, ChipsAutocompleteComponent, ChipsInputComponent, ChipsStackedComponent,
    IconSvgComponent,
    ProgressSpinnerConfigurableComponent,
    ProgressBarConfigurableComponent,
    RippleOverviewComponent,

    // Popups & Modals
    BottomSheetOverviewComponent, BottomSheetOverviewSheetComponent,
    DialogOverviewComponent, DialogOverviewDialogComponent,
    SnackBarComponentComponent, SnackBarComponentSnackComponent,
    TooltipOverviewComponent, TooltipPositionComponent, TooltipCustomClassComponent, TooltipDelayComponent, TooltipDisabledComponent,
    TooltipManualComponent, TooltipMessageComponent, TooltipModifiedDefaultsComponent, TooltipAutoHideComponent,

    // Data table
    PaginatorConfigurableComponent,
    SortOverviewComponent,
    TableBasicComponent, TableBasicFlexComponent, TableDynamicColumnsComponent, TableExpandableRowsComponent, TableFilteringComponent,
    TableFooterRowComponent, TableHttpComponent, TableMultipleHeaderFooterComponent, TableOverviewComponent, TablePaginationComponent,
    TableRowContextComponent, TableSelectionComponent, TableSortingComponent, TableStickyColumnsComponent, TableStickyFooterComponent,
    TableStickyHeaderComponent,
  ],
  entryComponents: [
    // Form Controls
    AutocompleteOverviewComponent, AutocompleteSimpleComponent, AutocompleteDisplayComponent, AutocompleteFilterComponent,
    AutocompleteOptionGroupComponent, AutocompleteHighlightComponent,
    CheckboxConfigurableComponent,
    DatepickerOverviewComponent, DatepickerStartViewComponent, DatepickerValueComponent, DatepickerMinMaxComponent,
    DatepickerFilterComponent, DatepickerEventsComponent, DatepickerDisabledComponent, DatepickerTouchComponent, DatepickerApiComponent,
    DatepickerLocaleComponent, DatepickerMomentComponent, DatepickerFormatsComponent,
    FormFieldOverviewComponent, FormFieldLabelComponent, FormFieldHintComponent, FormFieldErrorComponent, FormFieldPrefixSuffixComponent,
    FormFieldThemingComponent, FormFieldCustomControlComponent, FormFieldTelInputComponent,
    InputOverviewComponent, InputErrorStateMatcherComponent, InputAutosizeTextareaComponent, InputClearableComponent, InputErrorsComponent,
    InputFormComponent, InputHintComponent, InputPrefixSuffixComponent,
    RadioButtonNgModelComponent,
    SelectOverviewComponent, SelectValueBindingComponent, SelectFormComponent, SelectHintErrorComponent, SelectDisabledComponent,
    SelectResetComponent, SelectOptionGroupComponent, SelectMultipleComponent, SelectCustomTriggerComponent, SelectNoRippleComponent,
    SelectPanelClassComponent, SelectErrorStateMatcherComponent,
    SliderConfigurableComponent,
    SlideToggleConfigurableComponent,

    // Navigation
    MenuOverviewComponent, MenuIconsComponent, MenuNestedComponent,
    SidenavDrawerOverviewComponent, SidenavAutosizeComponent,
    ToolbarMultirowComponent,

    // Layout
    CardFancyComponent,
    DividerOverviewComponent,
    ExpansionPanelOverviewComponent, ExpansionPanelStepsComponent,
    GridListDynamicComponent,
    ListSectionsComponent,
    StepperOverviewComponent,
    TabGroupBasicComponent, TabGroupCustomLabelComponent, TabGroupDynamicHeightComponent, TabGroupDynamicComponent,
    TabGroupHeaderBelowComponent, TabGroupLazyLoadedComponent, TabGroupStretchedComponent, TabGroupThemeComponent, TabGroupAsyncComponent,
    TabNavBarBasicComponent,
    TreeDynamicComponent, TreeFlatOverviewComponent, TreeChecklistComponent, TreeNestedOverviewComponent, TreeLoadmoreComponent,

    // Button & Indicators
    ButtonTypesComponent,
    ButtonToggleExclusiveComponent,
    BadgeOverviewComponent,
    ChipsOverviewComponent, ChipsAutocompleteComponent, ChipsInputComponent, ChipsStackedComponent,
    IconSvgComponent,
    ProgressSpinnerConfigurableComponent,
    ProgressBarConfigurableComponent,
    RippleOverviewComponent,

    // Popups & Modals
    BottomSheetOverviewComponent, BottomSheetOverviewSheetComponent,
    DialogOverviewComponent, DialogOverviewDialogComponent,
    SnackBarComponentComponent, SnackBarComponentSnackComponent,
    TooltipOverviewComponent, TooltipPositionComponent, TooltipCustomClassComponent, TooltipDelayComponent, TooltipDisabledComponent,
    TooltipManualComponent, TooltipMessageComponent, TooltipModifiedDefaultsComponent, TooltipAutoHideComponent,

    // Data table
    PaginatorConfigurableComponent,
    SortOverviewComponent,
    TableBasicComponent, TableBasicFlexComponent, TableDynamicColumnsComponent, TableExpandableRowsComponent, TableFilteringComponent,
    TableFooterRowComponent, TableHttpComponent, TableMultipleHeaderFooterComponent, TableOverviewComponent, TablePaginationComponent,
    TableRowContextComponent, TableSelectionComponent, TableSortingComponent, TableStickyColumnsComponent, TableStickyFooterComponent,
    TableStickyHeaderComponent,
  ],
  providers: [ TopGuard ]
})
export class CategoriesModule { }
