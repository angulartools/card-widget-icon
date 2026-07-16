import { Component, ChangeDetectionStrategy, input, output, inject } from '@angular/core';
import { TranslationPipe, TranslationService } from '@angulartoolsdr/translation';
import { Skeleton } from '@angulartoolsdr/shared-utils';
import { DecimalPipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'lib-card-widget-icon',
  templateUrl: './card-widget-icon.html',
  styleUrls: ['./card-widget-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgStyle, DecimalPipe, TranslationPipe, Skeleton]
})
export class CardWidgetIcon {

  label = input<string>('');
  info = input<string>('');
  total = input<number>(0);
  totalFiltro = input<number | null>();
  cor = input<string>('');
  icon = input<string>('');

  percentual = input<number>(0);

  disabled = input<boolean>(false);
  loading = input<boolean>(true);
  selected = input<boolean>(false);
  isMaximize = input<boolean>(false);

  onCardClick = output<void>();

  translate = inject(TranslationService);

  cardClick() {
    if (!this.disabled()) {
      this.onCardClick.emit();
    }
  }
}