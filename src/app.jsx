import { hot } from 'react-hot-loader/root'
import React from 'react'
import { readFile, formatUsersData } from 'src/utils'
import getGeocodeData from 'src/services/mapsApi'

const App = () => {
  const [usersData, setUsersData] = React.useState()

  React.useEffect(() => {
    const asyncEffect = async () => {
      const content = await readFile('./data/testdaten.txt')

      const newUsersData = formatUsersData(content)

      for (const userData of newUsersData) {
        const zipCode =
          Object.values(userData)[Object.values(userData).length - 1]

        const response = await getGeocodeData(zipCode)

        if (!response.results.some((e) => e)) {
          userData['Federal State'] = 'Federal State: Not found'
        } else {
          const address = response.results[0].address_components.find(
            (e) => e.types[0] === 'administrative_area_level_1'
          ).long_name

          userData['Federal State'] = `Federal State: ${address}`
        }
      }

      setUsersData(newUsersData)
    }

    asyncEffect()
  }, [])

  if (!usersData) return null

  return (
    <div>
      {usersData.map((userData, index) => (
        <React.Fragment key={index}>
          {Object.values(userData).map((param, paramIndex) => (
            <p key={paramIndex}>{param}</p>
          ))}
          <br />
        </React.Fragment>
      ))}
    </div>
  )
}

export default hot(App)
