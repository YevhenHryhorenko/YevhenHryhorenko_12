const res = pow(3, 4);

function pow(num, degree) {
    return degree != 1 ? num * pow(num, degree - 1) : num
}

document.write(`<h2>The number is raised to a power = ${res}</h2>`)