import React from 'react'
import PropTypes from 'prop-types'
import BrowsePhoto from './BrowsePhoto'
import { View } from 'react-native'

const mvcStyles = {
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    // button style
    textAlign: 'center',
    fontSize: 16,
  },
}

const PhotoAnalizer = ({}) => (
  <View style={mvcStyles.container}>
    <BrowsePhoto />
  </View>
)

PhotoAnalizer.propTypes = {
  title: PropTypes.string,
  activityDisplay: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

PhotoAnalizer.defaultProps = {
  title: null,
  activityDisplay: null,
  width: 'auto',
  height: 'auto',
  color: 'black',
  backgroundColor: '#cacaca',
  onPress: () => {},
  textStyle: {},
  style: {},
}

export default PhotoAnalizer
