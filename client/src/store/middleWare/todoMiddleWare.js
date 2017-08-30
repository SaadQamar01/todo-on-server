import ActionTodo from "./../action/todo.js";
import axios from 'axios';
//Update in counter 13 -- create Middleware
export default class TodoMiddleware {
    constructor() {

    }
    //Update in counter 13 -- This function will be called 
    static asyncAddTodo(item) {

        // ///////////
        return (dispatch) => {
            console.log(item)
            // dispatch(ActionTodo.addTodo(item));
            var todo = {
                item: item
            }
            axios.post('https://shielded-sea-56935.herokuapp.com/CREATETODO', todo)
                .then(() => {
                    axios.get('https://shielded-sea-56935.herokuapp.com/getData')
                        .then((data) => dispatch(ActionTodo.addTodo(data.data)))
                        .catch((err) => console.log(err))
                })
                .catch((err) => alert(err));

        }
    }
    static asyncLoadTodo() {
        // console.log("test ",data);
        return (dispatch) => {
            axios.get('https://shielded-sea-56935.herokuapp.com/getData')
                .then((data) => dispatch(ActionTodo.addTodo(data.data)))
                .catch((err) => alert(err))
        }
    }
    static asyncDeleteTodo(id) {
        // console.log("test ",data);
        return (dispatch) => {
            console.log(id)
            axios.post('https://shielded-sea-56935.herokuapp.com/deleteData', { id })
                .then(() => {
                    axios.get('https://shielded-sea-56935.herokuapp.com/getData')
                        .then((data) => dispatch(ActionTodo.addTodo(data.data)))
                        .catch((err) => alert(err))
                }).catch((err) => alert(err))
        }
    }
    static asyncDeleteAllTodo() {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(ActionTodo.deleteAllTodo());
        }
    }
}
