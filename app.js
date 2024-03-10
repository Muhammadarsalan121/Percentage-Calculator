let chemMarks = document.querySelector('#chem-marks')
let phyMarks = document.querySelector('#phy-marks')
let mathMarks = document.querySelector('#math-marks')
let comMarks = document.querySelector('#com-marks')
let studentTotal = document.querySelector('#total-marks')
let percentage = document.querySelector('#percentage')
let grade = document.querySelector('#grade')


function calculatePercentage() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);

    let totalMarks = 400;
    let obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    let studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;


    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}