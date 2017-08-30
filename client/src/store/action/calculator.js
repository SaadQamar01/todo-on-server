export default class CalculatorAction {

    // static properties to be used in reducer for switch cases
    static MULTIPLICATION = "MULTIPLICATION";
    static DIVISION = "DIVISION";


    // static functions to be mapped with dispatch in component
    static multiplicationAction(firstData,secondData) {
        return {
            type: 'MULTIPLICATION',
            firstInput: firstData,
            secondInput:secondData
        }
    }

    static divisionAction(firstData,secondData) {
        return {
            type: 'DIVISION',
             firstInput: firstData,
            secondInput:secondData
        }
    }
}