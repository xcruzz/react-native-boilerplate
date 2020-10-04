import React from 'react'
import PropTypes from 'prop-types'
import { Linking, ImageBackground, Button } from 'react-native'

const ImgButton = ({
  onPressURL,
  imgSource,
  styles,
  isDisabled,
  navigation,
  navigationProps,
}) => {
  return (
    <ImageBackground style={styles} source={imgSource}>
      <Button
        title=""
        onPress={() => {
          if (!isDisabled)
            if (navigation != null)
              navigation.navigate(navigationProps.to, navigationProps)
            else Linking.openURL(onPressURL)
        }}
      />
    </ImageBackground>
  )
}

ImgButton.propTypes = {
  content: PropTypes.string,
  onPressUrl: PropTypes.string,
  imgSource: PropTypes.number,
  styles: PropTypes.object,
  isDisabled: PropTypes.bool,
  navigation: PropTypes.object,
  navigationProps: PropTypes.object,
}

ImgButton.defaultProps = {
  content: '',
  onPressUrl: '',
  imgSource: null,
  styles: {},
  isDisabled: false,
  navigation: null,
  navigationProps: null,
}

export default ImgButton
