import {
  connect
} from "react-redux";
import Counter from "./Counter";

// Map Redux state to component props
const mapStateToProps = (state) => ({countValue: state.count});

// Action
var increaseAction = {
  type: "increase"
};
var decreaseAction = {
  type: "decrease"
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseAction),
  decreaseCount: () => dispatch(decreaseAction)
});


// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default connectedComponent;
