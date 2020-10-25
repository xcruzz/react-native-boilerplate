import ProgramaDeGobierno from '../../components/ProgramaDeGobierno'
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
          <ProgramaDeGobierno />
          <Text />
        </ScrollView>
      </View>
    )
  }
}
