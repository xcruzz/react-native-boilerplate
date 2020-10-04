import AButton from '../../components/ALugaroButton'
import AgendaUrgente from '../../components/AgendaUrgente'
import globalStyles from '../../theme/styles'
import React from 'react'

import { Text, View, StatusBar, ScrollView } from 'react-native'

const styles = globalStyles.alugaro

export default class Home extends React.Component {
  async componentDidMount() {}

  constructor(props) {
    super(props)
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
      </View>
    )
  }
}
