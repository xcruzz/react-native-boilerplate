import React from 'react'
import Button from 'components/Button'
import { colors } from 'theme'
import { StyleSheet } from 'react-native'

import * as CognitiveService from './LogoPredictionService'
import * as ImagePicker from 'expo-image-picker'

const tolerance = 0.78
export default class BrowsePhoto extends React.Component {
  handlePredictionResponse = (response) => {
    console.log(`LOG: [FILTERING PREDICTIONS T - ${tolerance}]`)

    let definiteMatches = response.predictions.filter(
      (match) => match.probability > tolerance,
    )

    let parties = definiteMatches.map((p) => {
      return { party: p.tagName, probability: p.probability }
    })
    if (parties.length > 0) {
      let mostProbable = parties[0]
      let max_prob = 0
      parties.map((pty) => {
        if (pty.probability > max_prob) mostProbable = pty
      })
      console.log(`LOG: [${parties.length} PARTIES MATCHED T - ${tolerance}]`)
      console.log(`[INTERESANTE: ${parties.length} PARTIDO(S)]`)
      console.log(`[MÁS PROBABLE: ${mostProbable.party}]`)
      return mostProbable.party
    } else {
      console.log(`NADA INTERESANTE :(`)
      return `NADA INTERESANTE :(`
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      predictedResults: {},
    }
  }

  componentDidMount() {
    this.selectPhotoFromLibrary = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!')
        return
      }
      console.log(`LOG: [OPENING IMAGE LIBRARY]`)
      let result = await ImagePicker.launchImageLibraryAsync()
      return result
    }
  }

  render() {
    return (
      <Button
        style={styles.baseText}
        title="BUSCAR MIS FOTOS"
        color="white"
        backgroundColor={colors.gray}
        onPress={() => {
          this.selectPhotoFromLibrary()
            .then((selectedImg) => {
              console.log(`LOG: [IMAGE - RESIZE]`)
              //console.log(`${JSON.stringify(selectedImg)}`);
              //Resize
              let predictionResponse = CognitiveService.PredictLogoSvc(
                selectedImg,
              )
              predictionResponse.then((predictionResponse) => {
                console.log(`LOG: [PREDICTIONS - RECEIVED])}`)
                let mProbable = this.handlePredictionResponse(
                  predictionResponse,
                )
                if (mProbable) {
                  alert(mProbable)
                }
              })
            })
            .catch((error) => {
              if (
                error.message.includes(
                  "undefined is not an object (evaluating 'localUri.split')",
                )
              ) {
                console.log(`LOG: [CATCH - CANCEL PHOTO LIBRARY]`)
              } else {
                console.log(`LOG: [CATCH - ${error.message}]`)
              }
            })
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#fff',
  },
})
