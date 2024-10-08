let array = [];

function updateDisplay() {
    const displayArea = document.getElementById("arrayDisplay");
    displayArea.innerHTML = "";
    array.forEach(item => {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.innerText = item;
        displayArea.appendChild(tag);
    });
}

function showMessage(message) {
    document.getElementById("actionMessage").innerText = message;
}

function addToArray() {
    const element = document.getElementById("arrayElement").value;
    if (element !== "") {
        array.push(element);
        updateDisplay();
        showMessage(`Element added using addToArray()`);
        document.getElementById("arrayElement").value = "";
    }
}

function pushElement() {
    if (confirm("Do you want to push a new element to the array?")) {
        const newElement = prompt("Enter the element to push:");
        if (newElement !== null && newElement !== "") {
            array.push(newElement);
            updateDisplay();
            showMessage(`Element added using push()`);
        }
    }
}

function popElement() {
    if (confirm("Do you want to pop the last element from the array?")) {
        const poppedElement = array.pop();
        if (poppedElement !== undefined) {
            alert("Popped element: " + poppedElement);
            showMessage(`Element removed using pop()`);
        } else {
            alert("Array is empty, nothing to pop.");
            showMessage(`Array is empty, pop operation failed.`);
        }
        updateDisplay();
    }
}

function shiftElement() {
    if (confirm("Do you want to shift the first element from the array?")) {
        const shiftedElement = array.shift();
        if (shiftedElement !== undefined) {
            alert("Shifted element: " + shiftedElement);
            showMessage(`Element removed using shift()`);
        } else {
            alert("Array is empty, nothing to shift.");
            showMessage(`Array is empty, shift operation failed.`);
        }
        updateDisplay();
    }
}

function unshiftElement() {
    if (confirm("Do you want to unshift a new element to the array?")) {
        const newElement = prompt("Enter the element to unshift:");
        if (newElement !== null && newElement !== "") {
            array.unshift(newElement);
            updateDisplay();
            showMessage(`Element added using unshift()`);
        }
    }
}

function sliceArray() {
    if (confirm("Do you want to slice the array?")) {
        const startIndex = prompt("Enter the start index for slicing:");
        if (startIndex !== null && !isNaN(startIndex)) {
            const sliced = array.slice(Number(startIndex));
            alert("Sliced array: " + sliced.join(", "));
            showMessage(`Array sliced from index ${startIndex}`);
        } else {
            alert("Invalid input. Please enter a valid index.");
            showMessage(`Slice operation failed due to invalid input.`);
        }
    }
}

function spliceArray() {
    if (confirm("Do you want to splice the array?")) {
        const index = prompt("Enter the index at which you want to splice:");
        const deleteCount = prompt("Enter how many elements to delete from the array:");
        if (index !== null && deleteCount !== null && !isNaN(index) && !isNaN(deleteCount)) {
            array.splice(Number(index), Number(deleteCount));
            updateDisplay();
            showMessage(`Array spliced at index ${index}, ${deleteCount} element(s) deleted`);
        } else {
            alert("Invalid input. Please enter valid numbers.");
            showMessage(`Splice operation failed due to invalid input.`);
        }
    }
}