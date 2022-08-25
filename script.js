function CreateCounter(count = 0) {
    if (!new.target) {
        return new CreateCounter(count);
    }

    this.counter = count;

    this.increment = () => {
        return this.counter++;
    };

    this.decrement = () => {
        return this.counter--;
    };

    const setCounter = () => {
        buttonInc.disabled = this.counter >= inputMax.valueAsNumber
        buttonDec.disabled = this.counter <= inputMin.valueAsNumber

        if (inputMin.valueAsNumber > inputMax.valueAsNumber) {
            return value.innerHTML = 'ERROR: The Max value cannot be less than the Min'
        } else if (inputMin.valueAsNumber > this.counter) {
            this.counter = inputMin.valueAsNumber
            return value.innerHTML = "counter: " + inputMin.valueAsNumber
        } else if (inputMax.valueAsNumber < this.counter) {
            this.counter = inputMax.valueAsNumber
            return value.innerHTML = "counter: " + inputMax.valueAsNumber
        } else {
            return value.innerHTML = "counter: " + this.counter
        }
    }

    const setMin = () => {
        return inputMin.valueAsNumber
    }

    const setMax = () => {
         return inputMax.valueAsNumber;
    }

    //Counter
    let counterBlock = document.createElement('div');
    document.body.append(counterBlock);

    //Min Value span
    let spanMin = document.createElement('span');
    spanMin.innerHTML = "Min:";
    document.body.append(spanMin);

    //Min Value input
    let inputMin = document.createElement('input');
    inputMin.type = 'number';
    inputMin.valueAsNumber = 0;
    inputMin.placeholder = inputMin.value;
    inputMin.onchange = setMin
    inputMin.addEventListener('change', setCounter )
    document.body.append(inputMin);

    //Max Value span
    let spanMax = document.createElement('span');
    spanMax.innerHTML = "Max:";
    document.body.append(spanMax);

    //Max Value input
    let inputMax = document.createElement('input');
    inputMax.type = 'number';
    inputMax.valueAsNumber = this.counter;
    inputMax.placeholder = inputMax.value;
    inputMax.onchange = setMax
    inputMax.addEventListener('change', setCounter)
    document.body.append(inputMax);

    //Button Decrement
    let buttonDec = document.createElement('button');
    buttonDec.innerHTML = "-";
    buttonDec.disabled = count === 0;
    buttonDec.onclick = this.decrement;
    buttonDec.addEventListener('click', setCounter);
    document.body.append(buttonDec);

    //Button Increment
    let buttonInc = document.createElement('button');
    buttonInc.innerHTML = "+";
    buttonInc.disabled = true;
    buttonInc.onclick = this.increment;
    buttonInc.addEventListener('click', setCounter);
    document.body.append(buttonInc);

    //Value counter
    let value = document.createElement('span');
    value.innerHTML = "counter: " + this.counter;
    document.body.append(value);
}

const counter_1 = CreateCounter();
const counter_2 = CreateCounter(3);
const counter_3 = CreateCounter(15);

//
// console.log(counter_1.counter);
// console.log(counter_2.counter);
// console.log(counter_3.counter);
//
// counter_1.decrement()
// console.log(counter_1.counter)
// counter_3.increment()
// console.log(counter_3.counter)