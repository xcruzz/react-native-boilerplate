import React from 'react'
import Button from 'components/Button'
import ActiveDisplay from 'components/ActiveDisplay'
import { colors, images } from 'theme'
import { Alert, StyleSheet, View, Text } from 'react-native'

import * as CognitiveService from './LogoPredictionService'
import * as ImagePicker from 'expo-image-picker'

const tolerance = 0.78
export default class PhotoAnalizer extends React.Component {
  componentDidMount() {
    this.breakdownPredictions = (response) => {
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

        let result = { parties: parties, mostProbable: mostProbable }
        return result
      } else {
        return null
      }
    }

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
        `Tu imagen no se va a guardar en nuestro sistema 😉`,
        [
          {
            text: 'CONFIRMAR',
            onPress: () => {
              console.log(JSON.stringify(this.state))
              this.setState({
                ...this.state,
                activityDisplay: images.loader_blancoiris,
                title: 'VIENDO A VER...',
              })
              console.log(`LOG: [IMAGE UPLOAD - CONFIRMED BY USER]`)
              console.log(`LOG: [IMAGE - RESIZE]`)

              let predictionResponse = CognitiveService.PredictLogoSvc(
                selectedImg,
              )

              predictionResponse.then((predictionResponse) => {
                console.log(`LOG: [PREDICTIONS - RECEIVED])}`)
                let predictionBreakdown = this.breakdownPredictions(
                  predictionResponse,
                )
                if (predictionBreakdown) {
                  console.log(`LOG: [ANALYSIS - COMPLETE]`)
                  console.log(`${JSON.stringify(predictionBreakdown)}`)

                  let activityDisplay = images.logo_arcoiris
                  let activityText = 'NO ENCONTRAMOS MUCHO'
                  let mParty = predictionBreakdown.mostProbable.party
                  console.log(JSON.stringify(mParty))
                  if (mParty == 'pnp_logo') {
                    activityDisplay = images.logo_azul
                    activityText = 'LA ESTADITUD...?'
                  } else if (mParty == 'ppd_logo') {
                    activityDisplay = images.logo_rojo
                    activityText = 'EL ELA...?'
                  } else if (mParty == 'pip_logo') {
                    activityDisplay = images.logo_verde
                    activityText = 'PR LIBRE...?'
                  } else if (mParty == 'mvc_logo') {
                    activityDisplay = images.logo_oro
                    activityText = 'VICTORIA CIUDADANA!!'
                  }

                  setTimeout(() => {
                    this.setState({
                      ...this.state,
                      activityDisplay: activityDisplay,
                      title: activityText,
                    })
                  }, 0)

                  setTimeout(() => {
                    this.setState({
                      ...this.state,
                      activityDisplay: images.logo_blanco,
                      title: 'EL AUDITOR',
                    })
                  }, 5000)
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

  constructor(props) {
    super(props)
    this.state = {
      predictedResults: {},
      props: props,
      activityDisplay: images.logo_blanco,
      title: 'EL AUDITOR',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActiveDisplay
          title={this.state.title}
          activityDisplay={this.state.activityDisplay}
          onPress={() => {}}
        />
        <Text style={styles.text}>
          Sube una foto a ver si el auditor le encuentra algo...
        </Text>
        <Button
          style={styles}
          title="BUSCAR MIS FOTOS"
          color="white"
          backgroundColor={colors.gray}
          onPress={() => {
            this.selectPhotoFromLibrary()
              .then((selectedImg) => {
                if (!selectedImg.cancelled)
                  this.confirmPhotoUseAlert(selectedImg)
                else console.log(`LOG: [CANCEL PHOTO LIBRARY]`)
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
    textDecorationColor: 'black',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    alignContent: 'center',
  },
})
