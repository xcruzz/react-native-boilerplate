import PropTypes from 'prop-types'
import SocialBar from '../SocialBar'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'

const candidatxs = mvcdb.candidatxs
const styles = globalStyles.candiProfile

export default class CandiProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      candidateKey: props.candidateKey,
      renderHeader: props.renderHeader,
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
            <Image
              style={styles.profilePicDim}
              source={{
                uri: this.state.candidate.photo.imgUri,
              }}
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
        {this.state.renderHeader && <View style={styles.separator} />}
      </View>
    )
  }
}

CandiProfile.propTypes = {
  candidateKey: PropTypes.string,
  renderHeader: PropTypes.bool,
}

CandiProfile.defaultProps = {
  candidateKey: -1,
  renderHeader: true,
}
