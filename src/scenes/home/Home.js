import AButton from '../../components/ALugaroButton'
import AgendaUrgente from '../../components/AgendaUrgente'
import globalStyles from '../../theme/styles'
import React from 'react'

import { Text, View, StatusBar, ScrollView } from 'react-native'

export default class Home extends React.Component {
  async componentDidMount() {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <AgendaUrgente />
          <Text />
        </ScrollView>
      </View>
    )
  }
}
