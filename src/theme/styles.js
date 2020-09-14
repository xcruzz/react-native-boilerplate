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
    fontSize: 24,
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

const mapPage = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGris,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})

const svgMap = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: colors.black,
  },
  head: {
    fontSize: 22,
    marginBottom: 20,
    height: 45,
    color: colors.white,
  },
  main: {
    height: 165,
    backgroundColor: colors.white,
  },
  foot: {
    fontSize: 20,
    marginTop: 10,
    height: 90,
    color: colors.white,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  canvas: {
    flex: 0,
    backgroundColor: colors.black,
  },
  view: {
    backgroundColor: colors.black,
  },
})

export default {
  homePage,
  detailsPage,
  drawerMenu,
  articlePage,
  activeDisplay,
  mapPage,
  svgMap,
}
