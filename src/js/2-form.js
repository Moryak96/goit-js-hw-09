const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const formStateKey = 'feedback-form-state';

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(formStateKey, JSON.stringify(formData));
}

function getDataFromStorage() {
  const storedData = localStorage.getItem(formStateKey);
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

getDataFromStorage();
form.addEventListener('input', saveFormState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми');
    return;
  }

  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  console.log('Submitted data:', formData);
  localStorage.removeItem(formStateKey);
  form.reset(); 
});
