// Get the necessary elements from the DOM
const additionalTextElement = document.getElementById('additionalText');
const dynamicTextElement = document.getElementById('dynamicText');
const blinkingCursorElement = document.getElementById('blinkingCursor');

// Initial text and array of words to iterate
const additionalText = ' ';
const texts = ['Student', 'Learner', 'Frontend Developer', 'Future Software Engineer', 'Future Developer'];

// Variables to control the animation
let currentTextIndex = 0;
let currentCharIndex = 0;
let isAddingText = true;
let isFirstIteration = true;

/**
 * Function to animate the dynamic text.
 * This function will be called recursively to update the dynamic text and cursor animation.
 */
function typeText() {
  const currentText = texts[currentTextIndex];

  if (isAddingText) {
    // Show text being added character-by-character
    dynamicTextElement.textContent = additionalText + '\n' + currentText.substring(0, currentCharIndex);
    currentCharIndex++;

    if (currentCharIndex <= currentText.length) {
      setTimeout(typeText, 100); // Adjust the timing for adding text
    } else {
      // Pause for 3 seconds after adding the word
      isAddingText = false;
      setTimeout(() => {
        isAddingText = false;
        isDeleting = true;
        setTimeout(typeText, 0); // Wait for 3 seconds before starting text deletion
      }, 1000);
    }
  } else {
    // Show text being deleted character-by-character
    dynamicTextElement.textContent = additionalText + '\n' + currentText.substring(0, currentCharIndex);
    currentCharIndex--;

    if (currentCharIndex >= 0) {
      setTimeout(typeText, 50); // Adjust the timing for deleting text
    } else {
      // Move to the next word after deleting the previous one
      isAddingText = true;
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      if (currentTextIndex === 0) {
        isFirstIteration = true;
      }
      setTimeout(typeText, 10); // Wait for a short time before starting the next word addition
    }
  }
}

typeText(); // Start the animation


// Form

var form = document.getElementById("my-form"); 
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Your reposnse has been subimtted sucessfully!! \n I will reach you as soon as possible')
      status.innerHTML = "Your Response has beem submitted successfully!!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          
          status.innerHTML = "Oops! There was a problem submitting your repsonse"
        }
      })
    }
  }).catch(error => {
    alert('There was an error while submitting your from')
    status.innerHTML = "Oops! There was a problem submitting your Response"
  });
}
form.addEventListener("submit", handleSubmit)

function submitForm() {
  // var name = document.getElementById("name").value;
  // var email = document.getElementById("email").value;
  // var phone = document.getElementById("phone").value;
  // var message = document.getElementById("message").value;

  // var url = "https://wa.me/91number?text="
  //   + "Name : " + encodeURIComponent(name) + "%0a"
  //   + "Email : " + encodeURIComponent(email) + "%0a"
  //   + "Phone : " + encodeURIComponent(phone) + "%0a"
  //   + "Message : " + encodeURIComponent(message);

  // var url = "https://kunalyadav.pages.dev/#contact"

  alert('Do you Want to submit form')

  // window.open(url, '_blank').focus();
}

function resetForm() {
  alert('Continue Resetting form')

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

$('input').on('change', function () {
  $('body').toggleClass('blue');
});