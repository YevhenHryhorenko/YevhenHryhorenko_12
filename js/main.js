let num, degree;

do {
    num = parseFloat(prompt("Please enter the number:"));

    if (isNaN(num)) {
        alert("That's not a valid number. Please try again.");
    }
} while (isNaN(num));

do {
    degree = parseFloat(prompt("Please enter the power:"));

    if (isNaN(degree)) {
        alert("That's not a valid number. Please try again.");
    }
} while (isNaN(degree));

const res = pow(num, degree);

function pow(num, degree) {
    return degree == 1 ? num : num * pow(num, degree - 1);
}

document.write(`<h2>The number is raised to a power = ${res}</h2>`)