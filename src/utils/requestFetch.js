export const requestFetch = async (url) => {
  try {
    const response = await fetch(`${url}&appid=${process.env.VUE_APP_API_KEY}`)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Oops!')
    }

    return data
  } catch (err) {
    return err
  }
}
