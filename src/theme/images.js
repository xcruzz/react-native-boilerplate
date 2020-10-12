import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_negro: require('../../assets/images/mvclogo/mvcLogoNegro.png'),
  logo_blanco: require('../../assets/images/mvclogo/blancoiris7.png'),
  logo_arcoiris: require('../../assets/images/mvclogo/blancoiris1.png'),
  welcome_screen: require('../../assets/images/welcome_screenAL.png'),
  
  victoria_icon_grey: require('../../assets/victoria_icon_grey.png'),
  victoria_icon_grey_x: require('../../assets/victoria_icon_grey_x.png'),
  victoria_icon_bmLugaro: require('../../assets/victoria_icon_bmLugaro.png'),
  victoria_icon_white: require('../../assets/victoria_icon_white.png'),
  victoria_icon_bmWhite: require('../../assets/victoria_icon_bmWhite.png'),
  victoria_icon_bmPurple: require('../../assets/victoria_icon_bmPurple.png'),
  victoria_icon_bmLGBTQ: require('../../assets/victoria_icon_bmLGBTQ.png'),
  victoria_icon_bmBlack: require('../../assets/victoria_icon_batman.png'),
  spinner_arcoiris: require('../../assets/images/spinnerL.gif'),
  loader_blancoiris: require('../../assets/images/loader_blancoiris.gif'),

  alugaro_arco_grey: require('../../assets/alugaro/arco_icon_grey.png'),
  alugaro_arco_white: require('../../assets/alugaro/arco_icon_white.png'),
  alugaro_2020: require('../../assets/alugaro/Lugaro2020.png'),
  defiendeelvoto: require('../../assets/alugaro/defiendeelvoto.png'),
  programadegobierno: require('../../assets/alugaro/programadegobierno.png'),

  fb_icon: require('../../assets/social/fb_iconAL.png'),
  twitter_icon: require('../../assets/social/twitter_iconAL.png'),
  ig_icon: require('../../assets/social/ig_iconAL.png'),
  email_icon: require('../../assets/social/email_iconAL.png'),

  distritoS_logoI: require('../../assets/candidatxs/Ib.png'),
  distritoS_logoII: require('../../assets/candidatxs/IIb.png'),
  distritoS_logoIII: require('../../assets/candidatxs/IIIb.png'),
  distritoS_logoIV: require('../../assets/candidatxs/IVb.png'),
  distritoS_logoV: require('../../assets/candidatxs/Vb.png'),
  distritoS_logoVI: require('../../assets/candidatxs/VIb.png'),
  distritoS_logoVII: require('../../assets/candidatxs/VIIb.png'),
  distritoS_logoVIII: require('../../assets/candidatxs/VIIIb.png'),
  PRTowns: require('../../assets/candidatxs/PRTowns.png'),
  candidatxsButton: require('../../assets/alugaro/candidatxsFrame.png'),
  candidatxsMapHeader: require('../../assets/candidatxs/MapHeader.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
