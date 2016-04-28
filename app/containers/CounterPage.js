import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  console.log("STSTE=", state);
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  var ret = bindActionCreators(CounterActions, dispatch);
  console.log("NAT", CounterActions, dispatch, ret);
  return ret;
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
