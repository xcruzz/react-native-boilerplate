import globalStyles from '../../theme/styles'
import React from 'react'
import { Path, G } from 'react-native-svg'
import Button from 'components/Button'
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom'
import { colors } from 'theme'
import prtowns from './PRTowns.json'

import {
  Dimensions,
  Alert,
  Modal,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native'

const deviceSize = Dimensions.get('window')
const styles = globalStyles.svgMap

export default class SVGMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      modalVisible: false,
      selectedImageUri: null,
      isDragging: false,
      towns: prtowns,
      gTownFill: colors.black,
      gTownOutline: colors.white,
      gStrokeWidth: '.12',
      gTransform: '0.0 0.0',
      canvasBGColor: colors.black,
      viewBGColor: colors.black,
      selectedTowns: [],
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Button
          title="MAPA DE CANDIDATOS"
          color="white"
          textStyle={styles.head}
          backgroundColor={colors.black}
        />
        <View style={styles.main}>
          <SvgPanZoom
            canvasWidth={deviceSize.width * 0.85}
            canvasHeight={deviceSize.height * 0.14 - 10}
            minScale={1}
            maxScale={3.5}
            initialZoom={1.15}
            onZoom={(zoom) => {
              console.log('onZoom:' + zoom)
            }}
            canvasStyle={styles.canvas}
            viewStyle={styles.view}
          >
            {this.state.towns.map((town, k) => {
              return (
                <SvgPanZoomElement
                  x={114}
                  y={-53}
                  key={town.key}
                  onDrag={() => {
                    console.log(`isDraggingOD: ${this.state.isDragging}`)
                    this.setState({
                      ...this.state,
                      isDragging: true,
                    })
                  }}
                  onClickRelease={() => {
                    let dragStatus = !this.state.isDragging
                    console.log(`isDraggingOCR: ${this.state.isDragging}`)
                    this.setState({
                      ...this.state,
                      isDragging: false,
                      selectedTowns: [town.key],
                    })
                    if (!dragStatus) {
                      console.log(`!dragStatus: ${town.key}`)
                    }
                  }}
                >
                  <G
                    transform={`translate(${this.state.gTransform})`}
                    stroke={this.state.gTownOutline}
                    stroke-width={this.state.gStrokeWidth * 0.01}
                    fill={this.state.gTownFill}
                  >
                    <Path id={town.key} d={town.d} />
                  </G>
                </SvgPanZoomElement>
              )
            })}
          </SvgPanZoom>
        </View>
        <View style={styles.foot}>
          <Text style={styles.foot}>
            Haz click en tu pueblo, en el mapa. Pincha con dos dedos para
            hacercar o alejar el mapa...
          </Text>
          {this.state.selectedTowns.map((selectedTown) => {
            return (
              <Button
                key={`VER ${selectedTown}`}
                style={styles}
                title={selectedTown.toUpperCase()}
                color="white"
                backgroundColor={colors.gray}
                onPress={() => {
                  this.state.props.pNavigation.navigate('Details', {
                    from: 'Map',
                    articleKey: selectedTown,
                    isTown: true,
                  })
                }}
              />
            )
          })}
        </View>
      </View>
    )
  }
}
