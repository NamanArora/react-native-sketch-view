import React, { Component } from 'react';
import {
  Text,

} from 'react-native';
import PropTypes from 'prop-types';

import { 
  requireNativeComponent, 
  View,
  UIManager,
  findNodeHandle,
  DeviceEventEmitter 
} from 'react-native';

class SketchView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View >
      <RNSketchView style={this.props.sketchStyle} {... this.props} onChange={this.onChange}/>
      <Text style={this.props.textStyle} {... this.textProps}> {this.props.text} </Text>
      </View>
    );
  }

}
SketchView.propTypes = {
  ...View.propTypes, // include the default view properties
  selectedTool: PropTypes.number,
  localSourceImagePath: PropTypes.string,
  text : PropTypes.string
};

let RNSketchView = requireNativeComponent('RNSketchView', SketchView, {
  nativeOnly: { onChange: true }
});

export default SketchView;