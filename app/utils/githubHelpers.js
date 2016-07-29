import axios from 'axios'

let githubHelpers = {
  getUserInfo (username) {
    return axios.get(`http://api.github.com/users/${username}`)
  },

  getPalyersInfo (players) {
    return axios.all(players.map((username) => {
      return this.getUserInfo(username)
    })).then((info) => {
      return info.map((user) => user.data)
    }).catch((err) => {
      console.warn('Error in getPalyersInfo', err)
    })
  }
}

export default githubHelpers
