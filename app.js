  //getting data from local storage
  function readData() {
    return JSON.parse(localStorage.getItem('register-users'));
  }
  //conditions for data rendering
 var data =   (readData()) ?  [...readData()] : []  ; 
 
 var start = ()=>{
   window.location.replace('./Pages/quiz.html')
  }
  var onNext = (event)=>{
    event.preventDefault()
    //getting input values
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var rollNumber = document.getElementById('roll-num').value 
    //regexs for validation
    var numberRegex = /^\d+$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
    if (username!==''&&email!==''&&rollNumber!=='') {
      //form validation
      //username validation
      if (username.length<3) {
        alert ("Username must be of 3 characters or more")
        return
      }
      
      //email validation
      if (email.match(emailRegex)===null) {
        alert('Invalid email');
        return
      }
      
      //roll number validation
      if (rollNumber.match(numberRegex)===null) {
        alert('No characters allowed on Roll Number');
        return
      }
      if (rollNumber.length<4||rollNumber.length>4) {
        alert("Roll Number required 4 digits only")
      return}
        //checking existed users
        for (let i = 0; i < data.length; i++) {
          if (rollNumber===data[i].roll_Number) {
            alert("Roll Number Already Exist")
            return
          }
          if (email===data[i].Email) {
            alert("Email Already Exist")
            return
          }
        }
        //putting data of user in local storage
        data = [...data,{
          name:username,
          roll_Number:rollNumber,
          Email : email
        }]
        localStorage.setItem('register-users',JSON.stringify(data))
        var userForm = document.getElementsByClassName('user-data')[0]
        var instructionBox = document.getElementsByClassName('quiz-container')[0]
        var wishLuckUser = document.getElementById('wish-user')
        wishLuckUser.innerText = `Best of Luck ${username}!`
        userForm.style.display = 'none'
        instructionBox.style.display = 'block'
      }
      else{
      alert('Please Input the fields!')
      
    }
}
