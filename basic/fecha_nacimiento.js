const year = 1989, month = 7, day = 12

const birthDate = new Date(year,month,day)
const today = new Date()

const diff = today - birthDate

const seconds = diff/ 1000,
minutes = seconds /60,
hours = minutes /60,
days = hours /24,
years = days/ 365

console.log(Math.round(years))