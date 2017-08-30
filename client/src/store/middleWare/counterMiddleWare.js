import CounterAction from "./../action/counter.js";

//Update in counter 13 -- create Middleware
export default class CounterMiddleware {

    //Update in counter 13 -- This function will be called 
    static asyncIncrement() {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(CounterAction.increment())
        }
    }
        static asyncDecrement() {
        // console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(CounterAction.decrement())
        }
    }
        static asyncUserInput(data) {
        console.log("test ",data);
        return (dispatch) => {
            // My Business logic Here
            // data = data * 2;
            dispatch(CounterAction.userInput(data))
        }
    }
}