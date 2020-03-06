import { AuthSession } from 'expo'
import jwtDecode from 'jwt-decode'
import { auth0 } from './config'

const toQueryString = params =>
    "?" + Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&")

export const authorize = () => new Promise(async (resolve, reject) => {
  try {
    // get redirect url
    const redirectUrl = AuthSession.getRedirectUrl()
    
    // authorize
    const authUrl = `${auth0.domain}/authorize` + toQueryString({
      client_id: auth0.clientId,
      response_type: 'token id_token',
      scope: 'openid profile email',
      nonce: 'nonce',
      redirect_uri: redirectUrl,
    })

    // get access token
    const { params } = await AuthSession.startAsync({ authUrl })
    if (params && params.access_token && params.id_token) {
      resolve({
        accessToken: params.access_token,
        me: jwtDecode(params.id_token),
      })
    }

    reject('Failed to get access token')
  } catch (err) {
    reject(err.message)
  }
})
