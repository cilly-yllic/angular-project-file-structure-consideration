import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import LINKS from './links';

interface Link {
  title: string;
  link: string;
  content: string;
}

type Category = 'form_control' | 'navigation' | 'layout' | 'button_indicators' | 'popups_modals' | 'data_table';

@Component({
  selector: 'app-page-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  links: Link[] = LINKS.default;
  category: Category;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const subscription = this.route.params
      .pipe(
        map( params => params.category ),
        tap( category => this.category = category ),
        map( category => !!category ? LINKS[category] : LINKS.default )
      )
      .subscribe( links => this.links = links );
    this.subscriptions.add( subscription );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
