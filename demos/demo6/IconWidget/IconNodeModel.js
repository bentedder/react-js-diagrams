import * as SRD from '../../../src/main';
import { IconPortModel } from './IconPortModel';
export class IconNodeModel extends SRD.NodeModel {
  constructor(iconName = 'camera') {
    super('icon');
    this.iconName = iconName;
    this.addPort(new IconPortModel('left'));
    this.addPort(new IconPortModel('right'));
  }

  serialize() {
    return _.merge(super.serialize(), {
      iconName: this.iconName,
    });
  }

  deSerialize(data) {
    super.deSerialize(data);
    this.iconName = data.iconName;
  }
}
