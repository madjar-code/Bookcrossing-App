export default class APIService {

  static async getUser(slug, setUser) {
    let response = await fetch(`/api/accounts/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setUser(data)     
    }
  }
}