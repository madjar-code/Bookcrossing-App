export default class APIService {

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

  static async putCurrentUser(credentials, authTokens) {
    let response = await fetch('/api/accounts/current/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      },
      body: JSON.stringify(credentials)
    })
    let data = await response.json()

    if (response.status === 200) {
      return data
    }
  }

  static async postUserAvatar(formData, authTokens){
    let response = await fetch('/api/accounts/avatar/', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + String(authTokens.access)
      },
      body: formData
    })
    console.log(response.status)
  }

  static async getOneUser(slug) {
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

  static async getAdsByGenre(genreSlug) {
    let response = await fetch(`/api/ads/genre-${genreSlug}`, {
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

  static async getGenres() {
    let response = await fetch('/api/ads/genre-list', {
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

  static async getAdDetails(slug){
    let response = await fetch(`/api/ads/${slug}/`, {
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
}