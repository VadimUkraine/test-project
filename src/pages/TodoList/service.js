import axios from 'axios';

class TodoListService{

  createTask(task){
    return axios({
      method: 'post',
      url: `/api/tasks`,
      baseURL: 'http://localhost:8080',
      data: task,
      headers: {  
        'Content-Type': 'application/json'
      }
    })
  }

  getAllTasks(){
    return axios({
      method: 'get',
      url: `/api/tasks`,
      baseURL: 'http://localhost:8080',
      headers: {  
        'Content-Type': 'application/json'
      }
    })
  }

  updateTask(params){
    return axios({
      method: 'put',
      url: `/api/tasks`,
      baseURL: 'http://localhost:8080',
      data: params,
      headers: {  
        'Content-Type': 'application/json'
      }
    })
  }



  deleteTask(id){
    return axios({
      method: 'delete',
      url: `/api/tasks/${id}`,
      baseURL: 'http://localhost:8080',
      headers: {  
        'Content-Type': 'application/json'
      }
    })
  }

}

export const todoService = new TodoListService();
