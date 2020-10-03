import ImgButton from '../../components/ImgButton'
import AButton from '../../components/ALugaroButton'
import AgendaUrgente from '../../components/AgendaUrgente'
import globalStyles from '../../theme/styles'
import React from 'react'

import { Text, View, StatusBar, ScrollView, Modal } from 'react-native'
import { images } from 'theme'

import AsyncStorage from '@react-native-community/async-storage'

const welcomeScreen = globalStyles.welcomeScreen
const styles = globalStyles.alugaro
const isFirst = 'first_time'

export default class Home extends React.Component {
  async componentDidMount() {
    AsyncStorage.getItem(isFirst)
      .then((value) => {
        if (value) {
          this.state.props.navigation.navigate('ALugaro')
          this.setState({ ...this.state, isModalActive: false, loading: false })
        } else
          this.setState({ ...this.state, isModalActive: true, loading: false })
      })
      .catch((e) => {
        this.setState({ ...this.state, isModalActive: true, loading: false })
      })
  }

  _onDone = () => {
    AsyncStorage.setItem(isFirst, isFirst)
      .then(() => {
        this.setState({ isModalActive: false })
      })
      .catch((e) =>
        alert(
          `Failed to set [${isFirst}] data to storage ${JSON.stringify(e)}`,
        ),
      )
  }

  constructor(props) {
    super(props)
    this.state = { isModalActive: false, props: props }
  }

  render() {
    return (
      <View style={styles.au_root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.verb} />
        <ScrollView>
          <AgendaUrgente />
          <Text />
        </ScrollView>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View style={welcomeScreen.centeredView}>
            <ScrollView>
              <View style={welcomeScreen.modalView}>
                <Text style={welcomeScreen.head}>
                  PUERTORRIQUEÑOS{'\n'}Y{'\n'}PUERTORRIQUEÑAS{'\n'}
                </Text>
                <Text style={welcomeScreen.text}>
                  El próximo 3 de noviembre tenemos la oportunidad de acabar con
                  el bipartidismo y comenzar a trabajar en los cambios que son
                  necesarios para mejorar nuestras condiciones de vida. Para
                  acabar con la situación tan nefasta que hemos heredado,
                  necesitamos contar con una mayoría de legisladores en la
                  Cámara y el Senado, con cuyosvotos logremos legislar los
                  cambios que son necesarios.{'\n\n'}A través de esta aplicación
                  podrás repasar la biografías de todos los candidatos
                  (incluyendo alcaldes y legisladores municiples) y la Agenda
                  Ciudadana del MVC, con la cual se comprometieron a trabajar
                  todo ellos, Espero que esta información te sea de beneficio
                  mientras evalúas quiénes son los mejores candidatos.
                </Text>
                <ImgButton
                  styles={welcomeScreen.signature}
                  imgSource={images.lugaro_signature}
                />
                <ImgButton
                  styles={welcomeScreen.modalImage}
                  imgSource={images.welcome_screen}
                />
                <AButton
                  title="Continuar"
                  onPress={() => {
                    this._onDone()
                  }}
                  onPressNavigate={this.state.props.navigation}
                  navigationProps={{
                    to: 'ALugaro',
                    from: 'WelcomeScreen',
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
