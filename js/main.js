let content = document.querySelector('.content-holder');

content.addEventListener("submit", function(e) {
    e.preventDefault();
    const output = document.querySelector('.content-output');
    output.innerHTML = "";

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    
    let bmi = weight / Math.pow(height, 2);
    output.insertAdjacentHTML("beforeend", `Your BMI is:<br> ${bmi.toFixed(2)}`)
})