const submitBtn = document.querySelector('.submit-btn');
const mainCard = document.querySelector('.main-card');
const subscribedDiv = document.querySelector('.subscribed');
const emailText = document.querySelector('.email-text');
const emailInput = document.querySelector('input');
const dismissBtn = document.querySelector('.dismiss');
const emailValue = document.querySelector('input').value;
const form = document.querySelector('form');
console.log(emailValue);
subscribedDiv.style.display = 'none';
// mainCard.style.display = 'none';

form.addEventListener('submit', (e)=>{
    document.body.removeChild(mainCard);
    subscribedDiv.style.display = 'block';
    emailText.textContent = `A confirmation email has been sent to  ${emailInput.value}  Please open it and click the button inside to confirm your subscription.`;

});
dismissBtn.addEventListener('click', () => {
  confirm('are you sure you want to dismiss message?')?  subscribedDiv.style.display = 'none':   subscribedDiv.style.display = 'block';
  ;
})