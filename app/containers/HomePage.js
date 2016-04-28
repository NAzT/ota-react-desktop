import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import * as OtaActions from '../actions/ota';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    ota: state.ota
  };
}

function mapDispatchToProps(dispatch) {
  var ret = bindActionCreators(OtaActions, dispatch);
  return ret;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default class HomePage extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }
