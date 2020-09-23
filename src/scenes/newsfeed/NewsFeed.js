import globalStyles from '../../theme/styles'
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar, Dimensions, Image } from 'react-native'
import newsfeed from '../../../assets/newsfeed/NewsFeed.json'
import AButton from '../../components/ALugaroButton'

const styles = globalStyles.newsFeed
const previews = newsfeed.previews

const deviceSize = Dimensions.get('window')

const NewsFeed = ({ navigation }) => {
  return (
    <View style={styles.holder}>
      <StatusBar barStyle="light-content" />
      <Text />
      <ScrollView>
        {previews.map((o, j) => {
          return (
            <View>
              <Text style={styles.header}>{o.header}</Text>
              <Text />
              {o.content.map((n, i) => {
                let bullet = n.bullet ? '- ' : ''
                return (
                  <Text key={`it${i}`} style={styles.content}>
                    {bullet + n.text + '\n'}
                  </Text>
                )
              })}
              <Image
                style={{
                  width: deviceSize.width,
                  height: o.image.height,
                }}
                source={{
                  uri: o.image.url,
                }}
              />
              <AButton title="Ver mas detalles" onPressURL={o.sourceURL} />
              <View style={styles.separator} />
              <Text />
            </View>
          )
        })}
        <Text style={styles.center}>Fin</Text>
      </ScrollView>
    </View>
  )
}

NewsFeed.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

NewsFeed.defaultProps = {
  navigation: {
    state: {
      params: {
        from: 'NewsFeed',
      },
    },
    goBack: () => null,
  },
}

export default NewsFeed
