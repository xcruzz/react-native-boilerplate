import SocialBar from '../../components/SocialBar'
import AButton from '../../components/ALugaroButton'
import ActiveLogo from '../../components/ActiveLogo'
import globalStyles from '../../theme/styles'
import React from 'react'
import {
  TouchableOpacity,
  Modal,
  View,
  StatusBar,
  Image,
  Platform,
  StyleSheet,
  Dimensions,
  Linking,
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
    width: deviceSize.width,
  },
  logo: {
    width: 62,
    height: 70,
    marginTop: 45,
    marginBottom: 10,
  },
  display_lugaro: {
    width: 150,
    height: 68,
    marginVertical: 5,
    marginBottom: 10,
  },
  tile: {
    width: deviceSize.width * 0.65,
    height: deviceSize.width * 0.65 * 1.005,
    marginVertical: 10,
  },
  tileM: {
    width: deviceSize.width * 0.85,
    height: deviceSize.width * 0.85 * 0.704,
    marginVertical: 10,
  },
  tile2: {
    width: deviceSize.width * 0.75,
    height: deviceSize.width * 0.75 * 0.733,
    marginVertical: 10,
  },
  separator: {
    height: 30,
    backgroundColor: colors.black,
  },
})

const welcomeScreen = globalStyles.welcomeScreen
const isFirst = 'mvcApp:v5.10.20'

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
        <ActiveLogo isHeader={false} />
        <ScrollView>
          <View style={styles.root}>
            {Platform.OS === 'ios' ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.state.props.navigation.navigate('Map', {
                      from: 'ALugaro',
                    })
                  }}
                >
                  <Image style={styles.tileM} source={images.PRTowns} />
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
              <Image style={styles.tile2} source={images.candidatxsButton} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.state.props.navigation.navigate('Details', {
                  from: 'ALugaro',
                  articleKey: 'programadegobierno',
                })
              }}
            >
              <Image style={styles.tile} source={images.programadegobierno} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('http://www.defiendeelvoto.com/')
              }}
            >
              <Image style={styles.tile} source={images.defiendeelvoto} />
            </TouchableOpacity>
            <SocialBar
              fbHandle="alugaro"
              twitterHandle="alexandralugaro"
              igHandle="alexandralugaro"
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <AButton
                title="Haz tu donación"
                onPressURL="https://secure.qgiv.com/for/cala"
              />
              <AButton
                title="Mensaje de Alexandra"
                onPress={() => {
                  this.setState({
                    ...this.state,
                    isModalActive: true,
                    loading: false,
                  })
                }}
              />
            </View>
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
