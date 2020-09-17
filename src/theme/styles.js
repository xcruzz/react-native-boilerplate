'use-strict'
import { StyleSheet } from 'react-native'
import { colors } from 'theme'

const homePage = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 70,
  },
  display: {
    width: 350,
    height: 140,
  },
  icon: {
    width: 60,
    height: 30,
  },
  icon_landscape: {
    width: 28,
    height: 25,
  },
})

const alugaro = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 70,
  },
  display: {
    width: 350,
    height: 140,
  },
  icon: {
    width: 60,
    height: 30,
  },
  backgroundImg: {
    width: 350,
    height: 140,
  },
  verb: { textDecorationColor: '#fff' },
})

const detailsPage = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.black,
    textAlign: 'center',
  },
})

const drawerMenu = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 20,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  collapse: {
    paddingLeft: 4,
  },
  collapseH: {
    flexDirection: 'row',
    padding: 0,
  },
  collapseB: { backgroundColor: colors.lightGray },
})

const articlePage = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#fff',
    paddingLeft: 6,
  },
  articleTitle: {
    fontSize: 24,
    color: colors.black,
    paddingBottom: 25,
  },
  title: {
    fontSize: 23,
    color: colors.black,
  },
  verb: {
    fontSize: 22,
  },
  head: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  list: {
    fontSize: 18,
    textDecorationLine: 'none',
    paddingTop: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
  collapse: {
    backgroundColor: colors.victoryGold,
    borderColor: colors.black,
  },
  collapseH: {
    flexDirection: 'row',
    borderWidth: 1.5,
  },
  collapseB: {
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 5,
  },
})

const navigation = StyleSheet.create({
  nav_icon: {
    width: 20,
    height: 19,
  },
})

const activeDisplay = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
})

export default {
  homePage,
  detailsPage,
  drawerMenu,
  articlePage,
  activeDisplay,
  navigation,
  alugaro,
}
