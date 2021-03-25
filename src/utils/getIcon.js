export const getIcon = (icons, range) => {
  let icon = null

  switch (true) {
    case range >= 200 && range < 232:
      icon = icons.Thunderstorm
      break
    case range >= 300 && range <= 321:
      icon = icons.Drizzle
      break
    case range >= 500 && range <= 521:
      icon = icons.Rain
      break
    case range >= 600 && range <= 622:
      icon = icons.Snow
      break
    case range >= 701 && range <= 781:
      icon = icons.Atmosphere
      break
    case range === 800:
      icon = icons.Clear
      break
    case range >= 801 && range <= 804:
      icon = icons.Clouds
      break
    default:
      icon = icons.Clouds
  }

  return icon
}
