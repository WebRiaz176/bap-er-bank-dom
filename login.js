document.getElementById('submit-btn').addEventListener('click', function(){
  const emailInput=document.getElementById('email-btn').value;
  console.log(emailInput);
  
  const passwordInput=document.getElementById ('pass-btn').value;
  console.log('passwordInput');
  
  if(emailInput=='atif@gmail.com' && passwordInput=='secret'){
    window.location.href='bank.html';
  }
  else{
    alert('please input valid user');
  }
})
