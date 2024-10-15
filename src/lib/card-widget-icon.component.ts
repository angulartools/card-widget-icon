import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card-widget-icon',
  templateUrl: './card-widget-icon.component.html',
  styleUrls: ['./card-widget-icon.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxSkeletonLoaderModule]  
})
export class CardWidgetIconComponent {

  @Input() label: string | undefined;
  @Input() info: string | undefined;
  @Input() total: number | undefined;
  @Input() totalFiltro: number | undefined;
  @Input() cor: string | undefined;
  @Input() icon: string | undefined;

  @Input('percentual')
  set _percentual(value: number) {
    if (value !== null && value !== undefined) {
      this.percentual = this.roundNumber(value, 2);
    }
  }

  @Input('disabled')
  set _disabled(value: any){
    this.disabled = value;
  }

  @Input('loading')
  set _loading(value: any){
    this.loading = value;
  }

  @Input('selected')
  set _selected(value: any) {
    this.selecionado = value;
  }

  @Input('isMaximize')
  set _isMaximize(value: any) {
    this.isMaximize = value;
  }

  loading = true;
  disabled = false;
  percentual = 0;
  isMaximize = false;

  @Output() onCardClick = new EventEmitter();
  selecionado = false;

  constructor(protected translate: TranslateService){}

  cardClick() {
    if (!this.disabled) {
      this.onCardClick.emit();
    }
  }

  roundNumber(num: number, casas: number) {
    const potencia = Math.pow(10, casas);
    return (Math.round((num + Number.EPSILON) * potencia) / potencia);
  }

}
