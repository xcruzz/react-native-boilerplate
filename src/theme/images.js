import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_negro: require('../../assets/images/mvclogo/mvcLogoNegro.png'),
  logo_oro: require('../../assets/images/mvclogo/mvcLogoOro.png'),
  logo_blanco: require('../../assets/images/mvclogo/blancoiris7.png'),
  logo_arcoiris: require('../../assets/images/mvclogo/blancoiris1.png'),
  welcome_screen: require('../../assets/images/welcome_screen.png'),

  victoria_icon: require('../../assets/victoria_icon.png'),
  victoria_icon_gold: require('../../assets/victoria_icon_gold.png'),
  victoria_icon_white: require('../../assets/victoria_icon_white.png'),

  agenda_urgente: require('../../assets/images/agenda_urgente_blanco.png'),
  agenda_urgente_dark: require('../../assets/images/agenda_urgente.png'),
  spinner_arcoiris: require('../../assets/images/spinnerL.gif'),
  loader_blancoiris: require('../../assets/images/loader_blancoiris.gif'),

  alugaro_arco: require('../../assets/alugaro/arco_icon.png'),
  alugaro_arco_gold: require('../../assets/alugaro/arco_icon_gold.png'),
  alugaro_arco_white: require('../../assets/alugaro/arco_icon_white.png'),
  alugaro_2020: require('../../assets/alugaro/Lugaro2020.png'),
  victoria_final: require('../../assets/alugaro/victoria_final.png'),
  lugaro_work: require('../../assets/alugaro/lugaro_work.jpg'),

  fb_icon: require('../../assets/social/fb_icon.png'),
  twitter_icon: require('../../assets/social/twitter_icon.png'),
  ig_icon: require('../../assets/social/ig_ico.png'),
  email_icon: require('../../assets/social/email_icon.png'),

  newsfeed_icon: require('../../assets/newsfeed/newsfeed_icon.png'),
  newsfeed_icon_white: require('../../assets/newsfeed/newsfeed_icon_white.png'),

  distritoS7: require('../../assets/candidatxs/distritoS_7.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
