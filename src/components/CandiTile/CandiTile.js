import PropTypes from 'prop-types'
import SocialBar from '../SocialBar'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxsDev.json'

const candidatxs = mvcdb.candidatxs
const styles = globalStyles.candiTile

export default class CandiTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      key: props.candidateKey,
      candidate: candidatxs.find((c) => {
        return c.key == props.candidateKey
      }),
    }
  }

  render() {
    return (
      //Name
      <View style={styles.holder}>
        <View>
          <Text style={styles.candName}>{this.state.candidate.nombre}</Text>
        </View>
        {
          //Candidature
        }
        <View style={styles.candidatureBar}>
          <Text style={styles.candTitle}>
            {this.state.candidate.candidatura.toUpperCase()}
          </Text>
        </View>
        {
          //Biography
        }
        <View>
          <Text style={styles.textB}>Biografía</Text>
          <Text />
          <Text style={styles.content}>
            {this.state.candidate.biografia.map((i, n) => {
              return n != 0 ? '\n\n' + i : i
            })}
          </Text>
        </View>
        {
          //Profile Pic
          this.state.candidate.photo.imgUri.length ? (
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
          )
        }
        {
          //Candidate Plan
        }
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

          {
            //Social media links
          }
          <SocialBar
            fbHandle={this.state.candidate.contacto.fb}
            twitterHandle={this.state.candidate.contacto.twitter}
            igHandle={this.state.candidate.contacto.ig}
            emailAddr={this.state.candidate.contacto.email}
          />
        </View>
        <Text />
        <View style={styles.separator} />
      </View>
    )
  }
}

CandiTile.propTypes = {
  key: PropTypes.number,
}

CandiTile.defaultProps = {
  key: -1,
}
