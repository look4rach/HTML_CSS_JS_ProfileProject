//Function to toggle menu items
function ToggleMenu() {
    // Write a function to hide and show the menu item
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";        
    }
    else {
        menu.style.display = "block";
    }
    
}

//Implement smooth scrolling behavior for links in the navigation that reference sections within the page.
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//create a filter feature for the �Projects� section. Example: filterProjects(category).
function filterProjects(category) {
    const projects = document.querySelectorAll('.projects');      
    projects.forEach(project => {        
        if (project.classList.contains(category)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

//Functions that display project images in a modal view when clicked.
function openModal(imageSrc) {
    // Get the modal    
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';    
    modalImage.src = imageSrc;
}
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

//add form validation for the �Contact� form. Ensure fields like name, email, and message are filled in before submission.

function validateContactForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (!name) {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (!message) {
        isValid = false;
        errorMessage += 'Message is required.\n';
    }

    if (!isValid) {
        alert(errorMessage); // Display error messages
    } else {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').submit(); // Submit the form
    }
}