import * as SRD from '../../../src/main';
import { IconNodeWidgetFactory } from './IconNodeWidget';

export class IconWidgetFactory extends SRD.NodeWidgetFactory {
  constructor() {
    super('icon');
  }
  
  generateReactWidget(diagramEngine, node) {
    return IconNodeWidgetFactory({ node });
  }
}
