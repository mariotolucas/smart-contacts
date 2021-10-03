export function removeFromArray (array, element) {
  const index = array.indexOf(element)
  if (index > -1) {
    array.splice(index, 1)
  }
  return array
}

export function getDateString (dateString) {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return null

  const year = date.getFullYear()
  const month = (1 + date.getMonth()).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  // returns an english format date
  return month + '/' + day + '/' + year
}
