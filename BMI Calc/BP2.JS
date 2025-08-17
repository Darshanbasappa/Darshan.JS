const form = document.querySelector("form");

form.addEventListener(`submit`,function(event){
  event.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const results = document.querySelector("#results");

  if(height === `` || height < 0 || isNaN(height)){
    results.textContent = "Please enter a valid height.";
  } else if(weight === `` || weight < 0 || isNaN(weight)){
    results.textContent = "Please enter a valid weight.";
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    
  
  

  if(bmi <= 18.6){
    results.textContent = `Your BMI is ${bmi}. Your BMI indicates that you are underweight.`;
  } else if(bmi > 18.6 && bmi < 24.9){
    results.textContent = `Your BMI is ${bmi}. Your BMI indicates that you are in the normal range.`;
  } else if(bmi >= 24.9) {
    results.textContent = `Your BMI is ${bmi}. Your BMI indicates that you are overweight.`;
  }
}


});
  




  
