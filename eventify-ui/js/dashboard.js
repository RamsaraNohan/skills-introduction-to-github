// EventiFy Event Creation Dashboard JavaScript

let currentStep = 1;
const totalSteps = 4;
let selectedServices = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeServiceSelection();
    initializeDateValidation();
    updateProgressBar();
});

// Initialize service card selection
function initializeServiceSelection() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.dataset.service;
            
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedServices = selectedServices.filter(s => s !== service);
            } else {
                this.classList.add('selected');
                selectedServices.push(service);
            }
        });
    });
}

// Initialize date validation (can't select past dates)
function initializeDateValidation() {
    const eventDateInput = document.getElementById('eventDate');
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
}

// Navigate to next step
function nextStep() {
    if (validateCurrentStep()) {
        // Mark current step as completed
        const currentStepElement = document.querySelector(`.wizard-step[data-step="${currentStep}"]`);
        currentStepElement.classList.add('completed');
        currentStepElement.classList.remove('active');
        
        // Hide current form step
        const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        currentFormStep.classList.remove('active');
        
        // Move to next step
        currentStep++;
        
        // Show next form step
        const nextFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        nextFormStep.classList.add('active');
        
        // Activate next step indicator
        const nextStepElement = document.querySelector(`.wizard-step[data-step="${currentStep}"]`);
        nextStepElement.classList.add('active');
        
        // Update progress bar
        updateProgressBar();
        
        // If we're on the review step, populate the review
        if (currentStep === 4) {
            populateReview();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Save draft to local storage
        saveDraft();
    }
}

// Navigate to previous step
function prevStep() {
    // Remove completed status from current step
    const currentStepElement = document.querySelector(`.wizard-step[data-step="${currentStep}"]`);
    currentStepElement.classList.remove('active');
    
    // Hide current form step
    const currentFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    currentFormStep.classList.remove('active');
    
    // Move to previous step
    currentStep--;
    
    // Show previous form step
    const prevFormStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    prevFormStep.classList.add('active');
    
    // Activate previous step indicator
    const prevStepElement = document.querySelector(`.wizard-step[data-step="${currentStep}"]`);
    prevStepElement.classList.add('active');
    prevStepElement.classList.remove('completed');
    
    // Update progress bar
    updateProgressBar();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    document.getElementById('stepProgress').style.width = `${progress}%`;
}

// Validate current step
function validateCurrentStep() {
    if (currentStep === 1) {
        return validateStep1();
    } else if (currentStep === 2) {
        return validateStep2();
    } else if (currentStep === 3) {
        return validateStep3();
    }
    return true;
}

// Validate Step 1: Basic Information
function validateStep1() {
    const eventName = document.getElementById('eventName').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value.trim();
    const eventBudget = document.getElementById('eventBudget').value;
    
    if (!eventName) {
        showAlert('Please enter an event name', 'error');
        return false;
    }
    
    if (!eventDate) {
        showAlert('Please select an event date', 'error');
        return false;
    }
    
    // Check if date is in the future
    const selectedDate = new Date(eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showAlert('Event date must be in the future', 'error');
        return false;
    }
    
    if (!eventTime) {
        showAlert('Please select an event time', 'error');
        return false;
    }
    
    if (!eventLocation) {
        showAlert('Please enter an event location', 'error');
        return false;
    }
    
    if (!eventBudget || eventBudget <= 0) {
        showAlert('Please enter a valid budget', 'error');
        return false;
    }
    
    return true;
}

// Validate Step 2: Event Details
function validateStep2() {
    const eventType = document.getElementById('eventType').value;
    const guestCount = document.getElementById('guestCount').value;
    
    if (!eventType) {
        showAlert('Please select an event type', 'error');
        return false;
    }
    
    if (!guestCount || guestCount <= 0) {
        showAlert('Please enter the expected number of guests', 'error');
        return false;
    }
    
    return true;
}

// Validate Step 3: Service Selection
function validateStep3() {
    if (selectedServices.length === 0) {
        showAlert('Please select at least one service for your event', 'error');
        return false;
    }
    return true;
}

// Populate review section
function populateReview() {
    // Basic Information
    document.getElementById('review-eventName').textContent = document.getElementById('eventName').value;
    
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const formattedDate = new Date(eventDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    document.getElementById('review-dateTime').textContent = `${formattedDate} at ${eventTime}`;
    
    document.getElementById('review-location').textContent = document.getElementById('eventLocation').value;
    
    const budget = parseFloat(document.getElementById('eventBudget').value);
    document.getElementById('review-budget').textContent = `LKR ${budget.toLocaleString()}`;
    
    // Event Details
    const eventType = document.getElementById('eventType').value;
    document.getElementById('review-eventType').textContent = eventType.charAt(0).toUpperCase() + eventType.slice(1);
    
    const guestCount = document.getElementById('guestCount').value;
    document.getElementById('review-guestCount').textContent = `${guestCount} guests`;
    
    const description = document.getElementById('eventDescription').value || 'No description provided';
    document.getElementById('review-description').textContent = description;
    
    // Services
    const servicesContainer = document.getElementById('review-services');
    if (selectedServices.length > 0) {
        const serviceNames = {
            'venue': 'Venue',
            'catering': 'Catering',
            'decoration': 'Decoration',
            'photography': 'Photography',
            'music': 'Music & DJ',
            'lighting': 'Lighting',
            'transportation': 'Transportation',
            'planning': 'Event Planning'
        };
        
        const servicesList = selectedServices.map(service => 
            `<span class="badge badge-primary" style="margin-right: 8px; margin-bottom: 8px;">${serviceNames[service]}</span>`
        ).join('');
        
        servicesContainer.innerHTML = servicesList;
    } else {
        servicesContainer.innerHTML = 'No services selected';
    }
}

// Form submission
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect all form data
    const eventData = {
        basicInfo: {
            eventName: document.getElementById('eventName').value,
            eventDate: document.getElementById('eventDate').value,
            eventTime: document.getElementById('eventTime').value,
            location: document.getElementById('eventLocation').value,
            budget: parseFloat(document.getElementById('eventBudget').value)
        },
        details: {
            eventType: document.getElementById('eventType').value,
            guestCount: parseInt(document.getElementById('guestCount').value),
            description: document.getElementById('eventDescription').value
        },
        services: selectedServices,
        createdAt: new Date().toISOString()
    };
    
    // In a real application, this would send data to the server
    console.log('Event created:', eventData);
    
    // Show success message
    showSuccessModal(eventData);
    
    // Clear draft from local storage
    localStorage.removeItem('eventDraft');
});

// Save draft to local storage
function saveDraft() {
    const draftData = {
        currentStep: currentStep,
        eventName: document.getElementById('eventName').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        location: document.getElementById('eventLocation').value,
        budget: document.getElementById('eventBudget').value,
        eventType: document.getElementById('eventType').value,
        guestCount: document.getElementById('guestCount').value,
        description: document.getElementById('eventDescription').value,
        services: selectedServices
    };
    
    localStorage.setItem('eventDraft', JSON.stringify(draftData));
}

// Load draft from local storage (if exists)
window.addEventListener('load', function() {
    const draft = localStorage.getItem('eventDraft');
    
    if (draft) {
        const shouldLoadDraft = confirm('You have a saved draft. Would you like to continue where you left off?');
        
        if (shouldLoadDraft) {
            const draftData = JSON.parse(draft);
            
            // Populate form fields
            document.getElementById('eventName').value = draftData.eventName || '';
            document.getElementById('eventDate').value = draftData.eventDate || '';
            document.getElementById('eventTime').value = draftData.eventTime || '';
            document.getElementById('eventLocation').value = draftData.location || '';
            document.getElementById('eventBudget').value = draftData.budget || '';
            document.getElementById('eventType').value = draftData.eventType || '';
            document.getElementById('guestCount').value = draftData.guestCount || '';
            document.getElementById('eventDescription').value = draftData.description || '';
            
            // Restore selected services
            selectedServices = draftData.services || [];
            selectedServices.forEach(service => {
                const card = document.querySelector(`.service-card[data-service="${service}"]`);
                if (card) {
                    card.classList.add('selected');
                }
            });
        } else {
            localStorage.removeItem('eventDraft');
        }
    }
});

// Show alert message
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `<span>${message}</span>`;
    
    const formStep = document.querySelector('.form-step.active');
    formStep.insertBefore(alertDiv, formStep.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show success modal
function showSuccessModal(eventData) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 16px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        ">
            <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
            <h2 style="color: #10b981; margin-bottom: 16px;">Event Created Successfully!</h2>
            <p style="color: #6b7280; margin-bottom: 24px;">
                Your event "${eventData.basicInfo.eventName}" has been created. 
                Our AI will now recommend the best vendors for your event.
            </p>
            <a href="vendors.html" class="btn btn-primary btn-lg">Browse Vendors</a>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
