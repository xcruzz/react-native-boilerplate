import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_blanco: require('../../assets/images/mvcLogoBlanco.png'),
  logo_negro: require('../../assets/images/mvcLogoNegro.png'),
  logo_arcoiris: require('../../assets/images/L.png'),
  logo_mono: require('../../assets/images/mvcLogoMono.png'),
  spinner_arcoiris: require('../../assets/images/spinnerL.gif'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
