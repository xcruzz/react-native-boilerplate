import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'

export const svgs = {
  logo: Logo,
}

// png/jpeg
export const images = {
  logo_negro: require('../../assets/images/mvclogo/mvcLogoNegro.png'),
  logo_azul: require('../../assets/images/mvclogo/mvcLogoAzul.png'),
  logo_rojo: require('../../assets/images/mvclogo/mvcLogoRojo.png'),
  logo_verde: require('../../assets/images/mvclogo/mvcLogoVerde.png'),
  logo_oro: require('../../assets/images/mvclogo/mvcLogoOro.png'),
  logo_blanco: require('../../assets/images/mvclogo/blancoiris7.png'),
  logo_arcoiris: require('../../assets/images/mvclogo/blancoiris1.png'),
  logo_mono: require('../../assets/images/mvclogo/mvcLogoMono.png'),
  spinner_arcoiris: require('../../assets/images/spinnerL.gif'),
  loader_blancoiris: require('../../assets/images/loader_blancoiris.gif'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
