import { readFile, formatUsersData } from 'src/utils'
import getGeocodeData from 'src/services/mapsApi'

const app = document.getElementById('root')

const updateDom = async () => {
  const content = await readFile('./data/testdaten.txt')

  const usersData = formatUsersData(content)
  let newContent = ''

  for (const userData of usersData) {
    for (const [index, value] of Object.entries(Object.values(userData))) {
      if (Number(index) === 0) {
        newContent += `Name: ${value}\n`
        continue
      }
      if (Number(index) === Object.values(userData).length - 1) {
        const response = await getGeocodeData(value)

        if (!response.results.some((e) => e)) {
          newContent += `Address${index}: ${value}\n`
          newContent += `Federal State: Not found\n\n`
          continue
        }

        const address = response.results[0].address_components.find(
          (e) => e.types[0] === 'administrative_area_level_1'
        ).long_name

        newContent += `Address${index}: ${value}\n`
        newContent += `Federal State: ${address}\n\n`
        continue
      }
      newContent += `Address${index}: ${value}\n`
    }
  }

  const element = document.createElement('pre')

  element.appendChild(document.createTextNode(newContent))

  app.appendChild(element)
}

updateDom()
