prepData('https://api.covid19api.com/summary')
.then(resData => {
  prepMapChart('#map', resData).then(handleMapUpdate)
})