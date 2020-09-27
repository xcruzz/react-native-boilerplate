import ImgButton from '../../components/ImgButton'
import AButton from '../../components/ALugaroButton'
import AgendaUrgente from '../../components/AgendaUrgente'
import globalStyles from '../../theme/styles'
import React from 'react'

import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Button,
  ScrollView,
  Modal,
} from 'react-native'
import { images, colors } from 'theme'

const styles = globalStyles.alugaro
const welcomeScreen = globalStyles.welcomeScreen
export default class Home extends React.Component {
  // const Home = ({ navigation }) => (
  componentDidMount() {}

  constructor(props) {
    super(props)
    this.state = { modalVisible: false, props: props }
  }

  render() {
    return (
      <View style={styles.au_root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.verb} />
        <ScrollView style={{ flex: 1 }}>
          <AgendaUrgente />
          <Text />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalActive}
        >
          <View style={welcomeScreen.centeredView}>
            <ScrollView>
              <View style={welcomeScreen.modalView}>
                <Text>{'\n\n'}</Text>
                <Text style={welcomeScreen.head}>
                  PUERTORRIQUEÑOS{'\n'}Y{'\n'}PUERTORRIQUEÑAS
                </Text>
                <Text>{'\n'}</Text>
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
                  {'\n\n -Alexandra Lúgaro \n'}
                </Text>
                <ImgButton
                  styles={welcomeScreen.modalImage}
                  imgSource={images.welcome_screen}
                />
                <Text>{'\n\n'}</Text>
                <AButton
                  title="Continuar"
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      isModalActive: false,
                    })
                  }}
                  onPressNavigate={this.state.props.navigation}
                  navigationProps={{
                    to: 'ALugaro',
                    from: 'WelcomeScreen',
                  }}
                />
                <Text />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
