import * as SRD from '../../../src/main';
import { IconNodeModel } from './IconNodeModel';
import { IconPortModel } from './IconPortModel';

export class IconNodeFactory extends SRD.AbstractInstanceFactory {
  constructor() {
    super('IconNodeModel');
  }

  getInstance() {
    return new IconNodeModel();
  }
}

export class IconPortFactory extends SRD.AbstractInstanceFactory {
  constructor() {
    super('IconPortModel');
  }

  getInstance() {
    return new IconPortModel();
  }
}
