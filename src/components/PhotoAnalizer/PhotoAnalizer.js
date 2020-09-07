import React from 'react'
import Button from 'components/Button'
import ActiveDisplay from 'components/ActiveDisplay'
import { colors, images } from 'theme'
import { Alert, StyleSheet, View, Text } from 'react-native'

import * as CognitiveService from './LogoPredictionService'
import * as ImagePicker from 'expo-image-picker'

const tolerance = 0.78
export default class PhotoAnalizer extends React.Component {
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
      props: props,
      activityDisplay: images.logo_mono,
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

    this.confirmPhotoUseAlert = (selectedImg) => {
      let localUri = selectedImg.uri
      let filename = localUri.split('/').pop()
      Alert.alert(
        'EL AUDITOR',
        `Tu imagen ${filename} no se va a guardar en nuestro sistema 😉`,
        [
          {
            text: 'CONFIRMAR',
            onPress: () => {
              console.log(JSON.stringify(this.state))
              this.setState({
                ...this.state,
                activityDisplay: images.spinner_arcoiris,
              })
              console.log(`LOG: [IMAGE UPLOAD - CONFIRMED BY USER]`)
              console.log(`LOG: [IMAGE - RESIZE]`)

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
            },
          },
          {
            text: 'MEJOR NO',
            onPress: () => {
              console.log(`LOG: [IMAGE UPLOAD - CANCELLED BY USER]`)
            },
            style: 'cancel',
          },
        ],
        { cancelable: false },
      )
    }
  }

  render() {
    return (
      <View>
        <ActiveDisplay
          title="EL AUDITOR"
          activityDisplay={this.state.activityDisplay}
          onPress={() => {}}
        />
        <Text style={styles.text}>
          Sube una foto a ver si el auditor le encuentra algo...
        </Text>
        <Button
          style={styles.baseText}
          title="BUSCAR MIS FOTOS"
          color="white"
          backgroundColor={colors.gray}
          onPress={({ props }) => {
            this.selectPhotoFromLibrary()
              .then((selectedImg) => {
                if (!selectedImg.cancelled)
                  this.confirmPhotoUseAlert(selectedImg)
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
      </View>
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
