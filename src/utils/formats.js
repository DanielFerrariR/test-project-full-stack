const formatUsersData = (content) => {
  const users = []
  let user = {}

  content.split('\n').forEach((contentText) => {
    if (!contentText) {
      users.push(user)
      user = {}
      return
    }

    const contentLength = Object.keys(user).length

    if (contentLength === 0) {
      user.name = contentText
      return
    }

    const address = `address${contentLength}`

    user[address] = contentText
  })

  return users
}

export default formatUsersData
