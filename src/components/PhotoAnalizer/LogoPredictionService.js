import { GetMockPredictions } from '../../../tests/mocked_responses'

function timeoutPromise(timeout, err, promise) {
  return new Promise(function (resolve, reject) {
    promise.then(resolve, reject)
    setTimeout(reject.bind(null, err), timeout)
  })
}
const timeOut = 36000
const imgSize = 0
export function PredictLogoSvc(selectedImg) {
  const prediction = '1a377b443688419985e29b42d65923f8'
  const endPoint = 'https://eastus.api.cognitive.microsoft.com/'
  const predictionResourceId =
    'customvision/v3.0/Prediction/41641520-c2cf-4e4c-883f-a001e9d2e4c4/detect/iterations/LogosIteration3/image'

  let localUri = selectedImg.uri
  let filename = localUri.split('/').pop()

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename)
  let type = match ? `image/${match[1]}` : `image`

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData()
  formData.append('image', { uri: localUri, name: filename, type })

  var azureHeaders = new Headers()
  azureHeaders.append('Prediction-Key', prediction)
  azureHeaders.append('Content-Type', 'application/octet-stream')
  // azureHeaders.append("Content-Length", formData.size);

  console.log(`LOG: [GETTING PREDICTIONS - FETCH]`)

  return (
    timeoutPromise(
      timeOut,
      new Error(`PREDICTION SERVICE : TIMED OUT (${timeOut})`),
      fetch(endPoint + predictionResourceId, {
        method: 'POST',
        body: formData,
        headers: azureHeaders,
        redirect: 'follow',
      }),
    )
      .then((response) => {
        if (response.ok) {
          console.log(`LOG: [GETTING PREDICTIONS - SUCCESS]`)
          return response.json()
        } else {
          let yellow = response.json().then((json) => {
            console.log(
              'LOG: \u001b[' +
                93 +
                'm' +
                '[PREDICTIONS UPLOAD - BAD REQUEST]' +
                '\u001b[0m',
            )
            yellow = `[${json.code} - ${json.message}]`
            console.log('LOG: \u001b[' + 93 + 'm' + `${yellow}` + '\u001b[0m')
          })
        }
      })
      //If response is in json then in success
      .then((responseJson) => {
        console.log(`LOG: [PREDICTIONS - VALIDATING]`)
        if (!responseJson) {
          responseJson = GetMockPredictions()
          console.log(
            'LOG: \u001b[' + 90 + 'm' + '[USING MOCK DATA]' + '\u001b[0m',
          )
        }

        console.log(`LOG: [PREDICTIONS - READY]`)
        return responseJson
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.log(`LOG: [CATCH - ${error}]`)
        console.log(
          'LOG: \u001b[' + 90 + 'm' + '[USING MOCK DATA]' + '\u001b[0m',
        )
        let r = GetMockPredictions()
        return r
      })
  )
}
