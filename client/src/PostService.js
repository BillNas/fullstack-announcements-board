import axios from 'axios'
const url = 'api/posts/'

class PostService {
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url)
        const data = response.data
        resolve(
          data.map(post => ({
            ...post
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }
  static addPost (body) {
    return axios.post(url, {
      body
    })
  }
}
export default PostService
