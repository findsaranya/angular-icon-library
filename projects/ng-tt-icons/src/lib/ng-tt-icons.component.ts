import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Optional
} from '@angular/core';
import { TTIconRegistry } from './ng-tt-icons.service';

@Component({
  selector: 'tt-icons',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTtIconsComponent {
  private svgIcon?: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.ttIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(<string>svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private ttIconRegistry: TTIconRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
