import React from 'react'
import Button from 'components/Button'
import ActiveDisplay from 'components/ActiveDisplay'
import { colors, images } from 'theme'
import { Alert, Modal, Image, StyleSheet, View, Text } from 'react-native'

import * as CognitiveService from './LogoPredictionService'
import * as ImagePicker from 'expo-image-picker'

const tolerance = 0.78
export default class PhotoAnalizer extends React.Component {
  componentDidMount() {
    this.openPhotoAnalizer = () => {
      this.selectPhotoFromLibrary()
        .then((selectedImg) => {
          if (!selectedImg.cancelled) this.confirmPhotoUseAlert(selectedImg)
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

    this.onModalConfirm = (selectedImg) => {
      this.setState({
        ...this.state,
        activityDisplay: images.loader_blancoiris,
        title: 'VIENDO A VER...',
        modalVisible: false,
        selectedImageUri: null,
      })
      console.log(`LOG: [IMAGE UPLOAD - CONFIRMED BY USER]`)
      console.log(`LOG: [IMAGE - RESIZE]`)

      CognitiveService.PredictLogoSvc(this.state.selectedImage).then(
        (predictionResponse) => {
          console.log(`LOG: [PREDICTIONS - RECEIVED])}`)
          let predictionBreakdown = this.breakdownPredictions(
            predictionResponse,
          )
          if (predictionBreakdown) {
            console.log(`LOG: [ANALYSIS - COMPLETE]`)
            this.updateUI(predictionBreakdown)
          }
        },
      )
    }

    this.confirmPhotoUseAlert = (selectedImg) => {
      // let localUri = selectedImg.uri
      this.setState({
        ...this.state,
        modalVisible: true,
        selectedImageUri: selectedImg.uri,
        selectedImage: selectedImg,
      })
    }
    this.breakdownPredictions = (response) => {
      console.log(`LOG: [FILTERING PREDICTIONS T - ${tolerance}]`)

      let definiteMatches = response.predictions.filter(
        (match) => match.probability > tolerance,
      )
      let result = {
        parties: [],
        mostProbable: { party: 'none', probability: 0.0 },
      }
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

        result = { parties: parties, mostProbable: mostProbable }
      }
      return result
    }
    this.updateUI = (results) => {
      let activityDisplay = images.logo_arcoiris
      let activityText = 'NO ENCONTRAMOS MUCHO'
      let mParty = results.mostProbable.party

      if (mParty == 'pnp_logo') {
        activityDisplay = images.logo_azul
        activityText = 'LA ESTADITUD...?'
      } else if (mParty == 'ppd_logo') {
        activityDisplay = images.logo_rojo
        activityText = 'LA COLONIA...?'
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
  }

  constructor(props) {
    super(props)
    this.state = {
      predictedResults: {},
      props: props,
      activityDisplay: images.logo_blanco,
      title: 'EL AUDITOR',
      modalVisible: false,
      selectedImageUri: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActiveDisplay
          title={this.state.title}
          activityDisplay={this.state.activityDisplay}
          onPress={() => {
            this.openPhotoAnalizer()
          }}
        />
        <Text style={styles.text}>Sube una foto... </Text>
        <Text style={styles.text}>va y el auditor le encuentra algo 😊</Text>
        <Button
          style={styles}
          title="BUSCAR MIS FOTOS"
          color="white"
          backgroundColor={colors.gray}
          onPress={() => {
            this.openPhotoAnalizer()
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.text}>EL AUDITOR</Text>
              <Image
                style={styles.modalImage}
                source={{ uri: this.state.selectedImageUri }}
              />
              <Text></Text>
              <Text>Tu imágen no se va a guardar en nuestro sistema 😉</Text>
              <Text></Text>
              <Button
                title="CONFIRMAR!"
                color="white"
                backgroundColor={colors.gray}
                onPress={() => {
                  this.onModalConfirm()
                }}
              />
              <Text></Text>
              <Button
                title="MEJOR NO!"
                color="white"
                backgroundColor={colors.gray}
                onPress={() => {
                  console.log(`LOG: [IMAGE UPLOAD - CANCELLED BY USER]`)
                  this.setState({
                    ...this.state,
                    modalVisible: !this.state.modalVisible,
                  })
                }}
              />
            </View>
          </View>
        </Modal>
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})
