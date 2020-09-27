import content from './agendaurgente.json'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Text, View } from 'react-native'

const styles = globalStyles.agendaUrgente

const AgendaUrgente = ({}) => {
  return (
    <View>
      <View style={styles.holder}>
        <Text />
        <Text style={styles.header}>{content.article}</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.center}>{content.intro}</Text>
        <Text>{'\n\n\n'}</Text>
        {content.itemsCollapse.map((i, k) => {
          return (
            <View key={`kv${k}`}>
              <Text key={`kt${k}`} style={styles.title}>
                {i.title + '\n'}
              </Text>
              {i.numbered.map((n, p) => {
                return (
                  <View key={`pv${p}`}>
                    <Text key={`pt${p}`} style={styles.topic}>
                      {n.head ? n.head + '\n' : ''}
                    </Text>
                    {n.list.map((l, c) => {
                      return (
                        <Text key={`c${c}`} style={styles.content}>{`${
                          c + 1
                        }. ${l} \n`}</Text>
                      )
                    })}
                  </View>
                )
              })}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default AgendaUrgente
