import content from './programadegobierno.json'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Text, View } from 'react-native'

const styles = globalStyles.agendaUrgente

export default class ProgramaDeGobierno extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.holder}>
          <Text />
          <Text style={styles.header}>{content.article}</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.center}>{content.intro}</Text>
        </View>
      </View>
    )
  }
}
