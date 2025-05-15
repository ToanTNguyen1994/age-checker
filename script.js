function checkAge() {
    const age = document.getElementById("ageInput").value;
    const result = document.getElementById("result");
  
    if (age === "") {
      result.textContent = "Please enter your age.";
      result.style.color = "red";
      return;
    }
  
    const ageNum = Number(age);
  
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
      result.textContent = "Please enter a valid age between 0 and 120.";
      result.style.color = "red";
    } else if (ageNum < 18) {
      result.textContent = "You are a minor.";
      result.style.color = "orange";
    } else {
      result.textContent = "You are an adult.";
      result.style.color = "green";
    }
  }
  