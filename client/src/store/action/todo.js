export default class ActionTodo {

    // static properties to be used in reducer for switch cases
    static ADD_TODO = "ADD_TODO";
    static DELETE_TODO = "DELETE_TODO";
    static DELETE_ALL_TODO = "DELETE_ALL_TODO";


    // static functions to be mapped with dispatch in component
    static addTodo(todoArry) {
        return {
            type: 'ADD_TODO',
            todoArry:todoArry
        }
    }
    static deleteTodo(index) {
        return {
            type: 'DELETE_TODO',
             index:index
        }
    }
    static deleteAllTodo() {
        return {
            type: 'DELETE_ALL_TODO'
        }
    }
}