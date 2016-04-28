import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Home.css';


export default class Home extends Component {

  constructor(props) {
    super(props)
    console.log("constructore");
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ""
    };
  }

  handleClick(firmware) {
    const {ota, upgradeFirmware} = this.props;
    var that = this;
    let fn = () => {
      var input = this.myTextInput;
      upgradeFirmware(firmware, that.state.text);
    };

    return fn;
  }

  handleChange(e) {
    console.log("handleChanged", e.target.value);
    // this.state.text = e.target.value;

    this.setState({text: e.target.value})
  }

// {/* <h2>Home</h2> <Link to="/counter">to Counter</Link> */}

  render() {
    const {upgradeFirmware} = this.props;
    console.log("PROPS", this.props);
    return (
      <div className={styles.parent}>
        <div className={styles["flex-container"]}>
          <div className={styles["flex-content-wrapper"]}>
            <div className={styles["flex-left"]}>
              <input onChange={this.handleChange} styles={styles.input} type="text" ref={(ref) => this.myTextInput = ref}/>
              {/* <div>:)</div>*/ }
            </div>
            <div className={styles["flex-right"]}>
              <button className={styles.btn} onClick={this.handleClick(1)}>
                <i className="fa fa-minus"></i> BLINK FIRMWARE
              </button>
              <button className={styles.btn} onClick={this.handleClick(2)}>
                <i className="fa fa-minus"></i> FAST FIRMWARE
              </button>
            </div>
          </div>
          <div className={styles.status}>ESPert/{this.state.text}/Command</div>
        </div>
      </div>
    );
  }
}
