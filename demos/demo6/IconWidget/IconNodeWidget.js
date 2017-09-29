import React, { Component, OnChanges } from 'react';
import { PortWidget } from '../../../src/main';

const ChangeIconForm = ({ icon, closeForm, changeIcon }) => (
  <form style={styles.changeForm} onSubmit={closeForm}>
    <div>Change Icon (font-awesome class)</div><br/>
    fa-<input type="text" value={icon} onChange={changeIcon} />
    <button type="submit">Change</button>
    <button type="submit">Cancel</button><br/><br/>
    <div>Preview: <i className={`fa fa-${icon}`}></i></div><br/><br/>
    <small>
      <a style={{ color: '#efefef' }}
         href="http://fontawesome.io/icons/"
         target="_blank">See all options on fontawesome.io</a>
    </small>
  </form>
);

export class IconNodeWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconName: '',
      showChangeForm: false,
    };
    this.openChangeForm = this.openChangeForm.bind(this);
    this.closeChangeForm = this.closeChangeForm.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ iconName: props.node.iconName });
  }

  openChangeForm() {
    this.setState({ showChangeForm: true });
  }

  closeChangeForm() {
    this.setState({ showChangeForm: false });
  }

  changeIcon(e) {
    this.setState({ iconName: e.target.value });
  }

  render() {
    return (
      <div style={styles.icon} onClick={this.openChangeForm}>
        {!this.state.showChangeForm &&
          <i style={styles.faIcon} className={`fa fa-${this.state.iconName || 'file'} fa-2x`}></i>
        }
        {this.state.showChangeForm &&
          <i style={styles.faIcon.spin} className={'fa fa-cog fa-spin fa-2x'}></i>
        }
        <div style={{ ...styles.port, ...styles.port.left }}>
          <PortWidget name="left" node={this.props.node} />
        </div>
        <div style={{ ...styles.port, ...styles.port.right }}>
          <PortWidget name="right" node={this.props.node} />
        </div>
        {this.state.showChangeForm &&
          <ChangeIconForm 
            icon={this.state.iconName} 
            closeForm={this.closeChangeForm}
            changeIcon={this.changeIcon}
          />
        }
      
      </div>
    );
  }
}

// Beginnings of some css vars
const base = 8; // 8px grid for design

// styles here for now
const styles = {
  icon: {
    position: 'relative', 
    width: base * 8, 
    height: base * 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faIcon: {
    color: 'white',
    spin: {
      color: 'black',
    }
  },
  port: {
    position: 'absolute',
    top: '50%',
    borderRadius: '50%',
    backgroundColor: 'white',
    left: {
      left: 0,
      transform: 'translate(-50%, -50%)',
    },
    right: {
      right: 0,
      transform: 'translate(50%, -50%)',
    },
  },
  changeForm: {
    fontFamily: 'Arial',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, 20%)',
    background: 'rgba(0,0,0,0.2)',
    color: 'white',
    padding: base * 2,
    width: 300,
    zIndex: 50,
  }
};

export var IconNodeWidgetFactory = React.createFactory(IconNodeWidget);
