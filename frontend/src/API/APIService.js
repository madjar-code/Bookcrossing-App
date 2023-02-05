export default class APIService {

  static async getUser(slug) {
    let response = await fetch(`/api/accounts/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      return data
    }
  }

  static async getCurrentUser(authTokens) {
    let response = await fetch('/api/accounts/current/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      return data
    }
  }

  static async getAds() {
    let response = await fetch('/api/ads/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      return data
    }
  }

  static async getMyAds(authTokens) {
    let response = await fetch('/api/ads/current/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      return data
    }
  }
}