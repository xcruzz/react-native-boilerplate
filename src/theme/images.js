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

  spinner_arcoiris: require('../../assets/images/spinnerL.gif'),
  loader_blancoiris: require('../../assets/images/loader_blancoiris.gif'),

  alugaro_arco: require('../../assets/alugaro/arco_icon.png'),
  alugaro_arco_gold: require('../../assets/alugaro/arco_icon_gold.png'),
  alugaro_2020: require('../../assets/alugaro/Lugaro2020.png'),
  victoria_final: require('../../assets/alugaro/victoria_final.png'),
  lugaro_work: require('../../assets/alugaro/lugaro_work.jpg'),

  fb_icon: require('../../assets/social/fb_icon.png'),
  twitter_icon: require('../../assets/social/twitter_icon.png'),
  ig_icon: require('../../assets/social/ig_ico.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
