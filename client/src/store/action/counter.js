export default class CounterAction {

    // static properties to be used in reducer for switch cases
    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";
    static INCREMENT_WITH_FIVE = "INCREMENT_WITH_FIVE";
    static DECREMENT_WITH_FIVE = "DECREMENT_WITH_FIVE";
    static USER_INPUT = "USER_INPUT"

    // static functions to be mapped with dispatch in component
    static increment() {
        return {
            type: 'INCREMENT'
        }
    }

    static decrement() {
        return {
            type: 'DECREMENT'
        }
    }

    static incrementWithFive(value) {
        return {
            type: 'INCREMENT_WITH_FIVE',
            val: value
        }
    }

    static decrementWithFive(value) {
        return {
            type: 'DECREMENT_WITH_FIVE',
            val: value
        }
    }
    static userInput(value) {
        return {
            type: 'USER_INPUT',
            val: value
        }
    }
}