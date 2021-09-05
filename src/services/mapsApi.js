import axios from 'axios'
import mocksForMapsApi from '__mocks__/mocksForMapsApi'

const mapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
})

const getGeocodeData = async (address) => {
  if (mocksForMapsApi.mapsApi) {
    return mocksForMapsApi.mapsApi
  }

  const response = await mapsApi.get(
    `/geocode/json?address=${address}&key=${process.env.MAPS_API_KEY}`
  )

  return response.data
}

export default getGeocodeData
