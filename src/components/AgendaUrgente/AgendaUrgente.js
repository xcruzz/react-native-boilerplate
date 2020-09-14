import content from './content.json'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View } from 'react-native'
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native'
import { images } from 'theme'

const styles = globalStyles.articlePage

const AgendaUrgente = ({}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.logo} source={images.logo_negro} />
        <Text style={styles.verb} />
        <Text style={styles.articleTitle}>{content.article.toUpperCase()}</Text>
        <Text style={styles.verb}>
          {content.intro.map((i) => {
            return i + '\n\n'
          })}
        </Text>
      </View>
      <View style={styles.collapse}>
        {content.itemsCollapse.map((i, j) => {
          return (
            <Collapse key={`i${j}`} style={styles.collapse}>
              <CollapseHeader style={styles.collapseH}>
                <Text style={styles.title}>{i.title + ' >>'}</Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseB}>
                {i.prologue ? (
                  <Text style={styles.verb}>{'\n' + i.prologue}</Text>
                ) : null}
                <Text style={styles.head}>{i.head}</Text>
                {i.numbered.map((m, o) => {
                  return (
                    <Text key={`m${o}`} style={styles.list}>
                      {m.head ? m.head + '\n\n' : null}
                      {m.list.map((l, n) => {
                        return `  ${n + 1}. ${l}\n`
                      })}
                    </Text>
                  )
                })}
              </CollapseBody>
            </Collapse>
          )
        })}
      </View>
    </View>
  )
}

export default AgendaUrgente
