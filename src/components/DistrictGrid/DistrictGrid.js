import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { images, colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: colors.white,
  },
  column: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: colors.white,
  },
  icon: {
    width: 145,
    height: 145,
    marginHorizontal: 10,
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
  },
  verb: {
    color: '#000',
    //fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 7,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '100%',
    backgroundColor: colors.victoryGold,
  },
})

export default class DistrictGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navigation: props.navigation,
    }
  }

  renderTile(title, imageSrc, districtNumber) {
    return (
      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => {
            this.state.navigation.navigate('Candidaturas', {
              from: 'DistrictGrid',
              districtNumber: districtNumber,
            })
          }}
        >
          <Image style={styles.icon} source={imageSrc} />
          <Text style={styles.verb}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Text />
          <View style={styles.separator} />
          <Text style={styles.head}>Distrito Senatoriales</Text>
          <View style={styles.separator} />
          <View style={styles.root}>
            {this.renderTile('Distrito I', images.distritoS_logoI, 1)}
            {this.renderTile('Distrito II', images.distritoS_logoII, 2)}
          </View>
          <View style={styles.root}>
            {this.renderTile('Distrito III', images.distritoS_logoIII, 3)}
            {this.renderTile('Distrito IV', images.distritoS_logoIV, 4)}
          </View>
          <View style={styles.root}>
            {this.renderTile('Distrito V', images.distritoS_logoV, 5)}
            {this.renderTile('Distrito VI', images.distritoS_logoVI, 6)}
          </View>
          <View style={styles.root}>
            {this.renderTile('Distrito VII', images.distritoS_logoVII, 7)}
            {this.renderTile('Distrito VIII', images.distritoS_logoVIII, 8)}
          </View>
        </ScrollView>
      </View>
    )
  }
}
