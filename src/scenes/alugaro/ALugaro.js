import SocialBar from '../../components/SocialBar'
import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import {
  TouchableOpacity,
  Modal,
  View,
  StatusBar,
  Image,
  Linking,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { images, colors } from 'theme'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
const deviceSize = Dimensions.get('window')

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  logo: {
    width: 62,
    height: 70,
    marginVertical: 10,
    marginBottom: 20,
  },
  display_lugaro: {
    width: 150,
    height: 68,
    marginVertical: 5,
    marginBottom: 10,
  },
  tile: {
    width: deviceSize.width * 0.98,
    height: deviceSize.width * 0.98 * 0.608,
  },
  separator: {
    height: 30,
    backgroundColor: colors.black,
  },
})

const welcomeScreen = globalStyles.welcomeScreen
const isFirst = 'first_time123455'

export default class ALugaro extends React.Component {
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
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={styles.separator} />
        <ScrollView>
          <View style={styles.root}>
            <View style={styles.separator} />
            <Image style={styles.logo} source={images.logo_blanco} />
            {Platform.OS === 'ios' ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.state.props.navigation.navigate('Map', {
                      from: 'ALugaro',
                    })
                  }}
                >
                  <Image style={styles.tile} source={images.PRTowns} />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
            <TouchableOpacity
              onPress={() => {
                this.state.props.navigation.navigate('CandiBrowser', {
                  from: 'ALugaro',
                })
              }}
            >
              <Image style={styles.tile} source={images.candidatxsButton} />
            </TouchableOpacity>
            <SocialBar
              fbHandle="alugaro"
              twitterHandle="alexandralugaro"
              igHandle="alexandralugaro"
            />
            <View style={{ flexDirection: 'row' }}>
              <AButton
                title="Defiende el Voto"
                onPressURL="https://www.defiendeelvoto.com/"
              />
              <AButton
                title="Haz tu donación"
                onPressURL="https://secure.qgiv.com/for/cala"
              />
            </View>
            <View style={styles.separator} />
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  ...this.state,
                  isModalActive: true,
                  loading: false,
                })
              }}
            >
              <Image
                style={styles.display_lugaro}
                source={images.alugaro_2020}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
        </ScrollView>
        {
          //Modal - Welcome Message
        }
        <Modal
          fullScreen={true}
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View>
            <ScrollView>
              <View style={welcomeScreen.modalView}>
                <Image
                  style={welcomeScreen.modalImage}
                  source={images.welcome_screen}
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
                <View style={styles.separator} />
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
