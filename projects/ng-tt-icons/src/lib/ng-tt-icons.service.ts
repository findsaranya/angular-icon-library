import { Injectable } from '@angular/core';
import { TTIcon } from './tt-icon.model';

@Injectable({
  providedIn: 'root'
})
export class TTIconRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: TTIcon[]): void {
    icons.forEach((icon: TTIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
