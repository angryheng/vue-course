const getAppName = () => new Promise((resolve, reject) => {
  const err = null
  setTimeout(() => {
    if (!err) {
      resolve({ code: 200, info: { appName: 'newAppName1111' } })
    } else {
      reject(err)
    }
  })
})
export { getAppName }
