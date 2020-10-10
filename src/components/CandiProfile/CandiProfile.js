import SocialBar from '../SocialBar'
import { colors, images, fonts } from 'theme'
import React from 'react'
import { Dimensions, StyleSheet, Image, Text, View } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import Animage from '../Animage'
const deviceSize = Dimensions.get('window')

const candidatxs = mvcdb.candidatxs
const styles = StyleSheet.create({
  holder: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
  },
  candName: {
    fontFamily: fonts.NeuePlak.Black,
    fontSize: 36,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    textAlign: 'right',
  },
  candTitle: {
    alignSelf: 'flex-end',
    fontSize: 16,
    paddingEnd: 10,
    fontFamily: fonts.NeuePlak.Bold,
  },
  candidatureBar: {
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
    height: 1,
    width: '95%',
    backgroundColor: colors.victoryGold,
  },
  textB: {
    marginTop: 10,
    fontSize: 22,
    paddingLeft: 10,
    fontFamily: fonts.NeuePlak.WideExtraBlack,
  },
  boxT: {
    paddingStart: 10,
    fontSize: 20,
    color: colors.white,
    paddingLeft: 10,
    fontFamily: fonts.NeuePlak.Bold,
  },
  boxTB: {
    paddingStart: 10,
    fontSize: 24,
    color: colors.white,
    paddingLeft: 10,
    fontFamily: fonts.NeuePlak.Black,
  },
  box: {
    backgroundColor: colors.black,
    color: colors.white,
    paddingLeft: 10,
    borderTopWidth: 10,
  },
  profilePic: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  profilePicDim: {
    width: 220,
    height: 220,
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: fonts.NeuePlak.Regular,
    textAlign: 'left',
  },
})

export default class CandiProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidateKey: props.candidateKey == null ? -1 : props.candidateKey,
      renderHeader: props.renderHeader == null ? true : props.renderHeader,
      candidate: candidatxs.find((c) => {
        return c.key == props.candidateKey
      }),
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        {this.state.renderHeader && (
          <View style={styles.holder}>
            <View>
              <Text style={styles.candName}>{this.state.candidate.nombre}</Text>
            </View>
            <View style={styles.candidatureBar}>
              <Text style={styles.candTitle}>
                {this.state.candidate.candidatura.toUpperCase()}
              </Text>
            </View>
          </View>
        )}
        <View>
          <Text style={styles.textB}>Biografía</Text>
          <Text />
          <Text style={styles.content}>
            {this.state.candidate.biografia.map((i, n) => {
              return n != 0 ? '\n\n' + i : i
            })}
          </Text>
        </View>
        {this.state.candidate.photo.imgUri.length ? (
          <View style={styles.profilePic}>
            <Text />
            <Animage
              thumbnailSource={images.victoria_icon_grey_x}
              source={{
                uri: this.state.candidate.photo.imgUri,
              }}
              bh={styles.profilePicDim.width}
              bw={styles.profilePicDim.width}
              style={{
                width: styles.profilePicDim.width,
                height: styles.profilePicDim.height,
              }}
              resizeMode="cover"
            />
          </View>
        ) : (
          <Text />
        )}
        <View style={styles.box}>
          {this.state.candidate.planDeTrabajo ? (
            <Text style={styles.boxTB}>{'Plan de Trabajo\n'}</Text>
          ) : (
            <View style={{ height: 0 }} />
          )}
          {this.state.candidate.planDeTrabajo ? (
            this.state.candidate.planDeTrabajo.map((i) => {
              return (
                <Text key={`pdtt${i}`} style={styles.boxT}>
                  {'• ' + i + '\n'}
                </Text>
              )
            })
          ) : (
            <View style={{ height: 0 }} />
          )}
          <SocialBar
            fbHandle={this.state.candidate.contacto.fb}
            twitterHandle={this.state.candidate.contacto.twitter}
            igHandle={this.state.candidate.contacto.ig}
            emailAddr={this.state.candidate.contacto.email}
          />
        </View>
        <Text />
        {this.state.renderHeader && <View style={styles.separator} />}
      </View>
    )
  }
}

// CandiProfile.propTypes = {
//   candidateKey: PropTypes.string,
//   renderHeader: PropTypes.bool,
// }

// CandiProfile.defaultProps = {
//   candidateKey: -1,
//   renderHeader: true,
// }
