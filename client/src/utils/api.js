import axios from 'axios'

export default {
  getTodos: function() {
    return axios.get("/api/todo/")
  },
  createTodo: function(data){
    return axios.post("api/todo/", data)
  },
  deleteTodo: function(id){
    return axios.delete("api/todo/", {data:id})
  },
  updateTodo : function(data){
    return axios.put("api/todo/", {id: data.id, completed: data.completed})
  }
}
