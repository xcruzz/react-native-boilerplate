import PropTypes from 'prop-types'
import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AButton from '../ALugaroButton'
import CandiProfile from '../CandiProfile'
import { colors } from 'theme'

const deviceSize = Dimensions.get('window')

const candidatxs = mvcdb.candidatxs
const styles = StyleSheet.create({
  holder: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  bholder: {
    backgroundColor: colors.black,
    height: 60,
    marginBottom: 20,
  },
  candName: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 30,
  },
  candNameModal: {
    fontSize: 38,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    textAlign: 'right',
  },
  candTitle: {
    alignSelf: 'flex-end',
    fontSize: 12,
    marginEnd: 10,
  },
  candTitleModal: {
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  candidatureBar: {
    alignSelf: 'flex-end',
    width: '100%',
    backgroundColor: colors.victoryGold,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingRight: 5,
  },
  candidatureBarModal: {
    alignSelf: 'center',
    height: 34,
    alignContent: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
    width: deviceSize.width * 0.98,
    backgroundColor: colors.victoryGold,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    marginBottom: 15,
    elevation: 5,
  },
  separator: {
    alignSelf: 'center',
    height: 25,
    backgroundColor: colors.white,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  profilePicDim: {
    width: 75,
    height: 75,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default class CandiTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      candidateKey: props.candidateKey,
      isModalBackButtonActive: false,
      isModalActive: false,
      candidate: candidatxs.find((c) => {
        return c.key == props.candidateKey
      }),
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              ...this.state,
              isModalActive: true,
            })
          }}
        >
          <View style={styles.profileRow}>
            <View style={styles.profilePic}>
              <Text style={styles.candName}>{this.state.candidate.nombre}</Text>
            </View>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicDim}
                source={{
                  uri: this.state.candidate.photo.imgUri,
                }}
              />
            </View>
          </View>
          <View style={styles.candidatureBar}>
            <Text style={styles.candTitle}>
              {this.state.candidate.candidatura.toUpperCase()}
            </Text>
          </View>
          <Text />
        </TouchableOpacity>
        <Modal
          fullScreen={false}
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View style={styles.holder}>
            {Platform.OS === 'ios' && <View style={styles.separator} />}
            <View>
              <Text style={styles.candNameModal}>
                {this.state.candidate.nombre}
              </Text>
            </View>
            <View style={styles.candidatureBarModal}>
              <Text style={styles.candTitleModal}>
                {this.state.candidate.candidatura.toUpperCase()}
              </Text>
            </View>
            <ScrollView
              onScroll={(n) => {
                this.setState({
                  ...this.state,
                  isModalBackButtonActive: true,
                })
              }}
            >
              <View style={styles.modalView}>
                <CandiProfile
                  renderHeader={false}
                  candidateKey={this.state.candidateKey}
                />
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

CandiTile.propTypes = {
  candidateKey: PropTypes.string,
}

CandiTile.defaultProps = {
  candidateKey: -1,
}
