import axios from 'axios'

export default {
  getTodos: function() {
    return axios.get("/api/todo/")
  },
  createTodo: function(data){
    return axios.post("api/todo/", data)
  }
}
