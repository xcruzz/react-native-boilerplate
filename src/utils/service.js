import axios from 'axios'

const service = ({
  method,
  pathname,
  headers,
  data,
  params,
}) => new Promise(async (resolve, reject) => {
  try {
    const res = await axios({
      method,
      url: pathname,
      headers: {
        // 'Authorization': `Bearer ${getAccessToken()}`,
        ...headers,
      },
      data,
      params,
    })

    resolve(res.data)
  } catch (err) {
    reject(err.message)
  }
})

const get = async ({ pathname, headers = {}, params }) => {
  return service({
    method: 'GET', pathname, headers, params,
  })
}

const post = async ({ pathname, headers = {}, data }) => {
  return service({
    method: 'POST', pathname, headers, data,
  })
}

const put = async ({ pathname, headers = {}, data }) => {
  return service({
    method: 'PUT', pathname, headers, data,
  })
}

const del = async ({ pathname, headers = {}, data }) => {
  return service({
    method: 'DELETE', pathname, headers, data,
  })
}

const methods = {
  get,
  post,
  put,
  del,
}

export default methods
