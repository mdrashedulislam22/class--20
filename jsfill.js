
document.getElementById('toggler').addEventListener("click", function() {
    document.getElementById('sidebar').classList.toggle("show"); 
});

document.getElementById('search-btn').addEventListener('click', function() {
    document.getElementById('search-box').classList.add("show");
});

document.getElementById("search-close").addEventListener("click", function () {
    document.getElementById("search-box").classList.remove("show");
});


document.getElementById('colorchangeing').addEventListener('click',function(){
    let hexCode = '#';

    hexCode += (Math.random()*100).toString(16).substring(3,9);

    document.body.style.background = hexCode;
})

setInterval(function () {
    let hexCode = '#';

    hexCode += (Math.random()*100).toString(16).substring(3,9);

    document.body.style.background = hexCode;
    
},500)







function checkNumber() {
    var number = document.getElementById("numberInput").value;
    
    if (number % 2 == 0) {
      alert(number + " is even");
    } else {
      alert(number + " is odd");
    }
  }
  



  function calculateGrade() {
    const marks = document.getElementById("marks").value;
    let grade;
  
    switch (true) {
      case marks >= 90 && marks <= 100:
        grade = "A+";
        break;
      case marks >= 80 && marks <= 89:
        grade = "A";
        break;
      case marks >= 70 && marks <= 79:
        grade = "A-";
        break;
      case marks >= 60 && marks <= 69:
        grade = "B";
        break;
      case marks >= 50 && marks <= 59:
        grade = "C";
        break;
      case marks >= 40 && marks <= 49:
        grade = "D";
        break;
    case marks >= 33 && marks <= 39:
        grade = "E";
       break;

      default:
        grade = "F";
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `Grade: ${grade}`;
  }
  