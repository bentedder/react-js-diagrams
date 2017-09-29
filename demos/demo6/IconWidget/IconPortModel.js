import * as SRD from '../../../src/main';
import * as _ from 'lodash';

export class IconPortModel extends SRD.PortModel {
  constructor(pos = 'left') {
    super(pos);
    this.position = pos;
  }

  serialize() {
    return _.merge(super.serialize(), {
      position: this.position,
    });
  }

  deSerialize(data) {
    super.deSerialize(data);
    this.position = data.position;
  }
}
