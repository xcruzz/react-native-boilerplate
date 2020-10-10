import PropTypes from 'prop-types'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import AButton from '../ALugaroButton'
import TownInfo from '../TownInfo'
import { colors, images, fonts } from 'theme'

const deviceSize = Dimensions.get('window')

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
    marginBottom: 0,
    alignSelf: 'center',
    fontFamily: fonts.NeuePlak.CondExtraBlack,
  },
  holder: {
    flex: 1, //must
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  bholder: {
    backgroundColor: colors.black,
    height: 60,
    marginBottom: 20,
  },
  space: {
    alignSelf: 'center',
    height: 25,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },
})

export default class TownTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalActive: false,
      townKey: props.townKey,
      town: mvcdb.pueblos.find((t) => {
        return t.key == props.townKey
      }),
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <AButton
          isDark={true}
          title={this.state.town.name}
          onPress={() => {
            this.setState({
              ...this.state,
              isModalActive: true,
            })
          }}
        />
        <Modal
          fullScreen={false}
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View style={styles.holder}>
            {Platform.OS === 'ios' && <View style={styles.space} />}
            <View style={styles.header}>
              <Image style={styles.logo} source={images['logo_negro']} />
              <Text style={styles.title}>{this.state.town.name}</Text>
            </View>

            <ScrollView
              scrollEventThrottle={32}
              onScroll={(n) => {
                this.setState({
                  ...this.state,
                  isModalBackButtonActive: true,
                })
              }}
            >
              <View style={styles.modalView}>
                <TownInfo renderHeader={false} townKey={this.state.townKey} />
              </View>
            </ScrollView>
            {this.state.isModalBackButtonActive && (
              <View style={styles.bholder}>
                <AButton
                  title="Regresar"
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      isModalActive: false,
                    })
                  }}
                />
              </View>
            )}
          </View>
        </Modal>
      </View>
    )
  }
}
TownTile.propTypes = {
  townKey: PropTypes.string,
}

TownTile.defaultProps = {
  townKey: '',
}
