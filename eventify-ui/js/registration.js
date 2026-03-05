// EventiFy Registration Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('registrationForm');
    const clientCard = document.getElementById('clientCard');
    const vendorCard = document.getElementById('vendorCard');
    const vendorFields = document.getElementById('vendorFields');
    const roleInputs = document.querySelectorAll('input[name="role"]');
    
    // Form inputs
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    
    // Error elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Password strength elements
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    // Alert message
    const alertMessage = document.getElementById('alertMessage');
    
    // Role selection handler
    roleInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'client') {
                clientCard.classList.add('active');
                vendorCard.classList.remove('active');
                vendorFields.classList.add('d-none');
            } else {
                vendorCard.classList.add('active');
                clientCard.classList.remove('active');
                vendorFields.classList.remove('d-none');
            }
        });
    });
    
    // Full name validation
    fullNameInput.addEventListener('blur', function() {
        validateFullName();
    });
    
    fullNameInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateFullName();
        }
    });
    
    function validateFullName() {
        const value = fullNameInput.value.trim();
        if (value.length < 2) {
            showError(fullNameInput, fullNameError, 'Please enter your full name (at least 2 characters)');
            return false;
        }
        hideError(fullNameInput, fullNameError);
        return true;
    }
    
    // Email validation
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });
    
    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateEmail();
        }
    });
    
    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        hideError(emailInput, emailError);
        return true;
    }
    
    // Phone validation
    phoneInput.addEventListener('blur', function() {
        validatePhone();
    });
    
    phoneInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validatePhone();
        }
    });
    
    function validatePhone() {
        const value = phoneInput.value.trim();
        // Sri Lankan phone number format: +94 XX XXX XXXX or 0XX XXX XXXX
        const phoneRegex = /^(\+94|0)[0-9]{9,10}$/;
        
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            showError(phoneInput, phoneError, 'Please enter a valid Sri Lankan phone number');
            return false;
        }
        hideError(phoneInput, phoneError);
        return true;
    }
    
    // Password strength checker
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        validatePassword();
    });
    
    function checkPasswordStrength(password) {
        let strength = 0;
        
        // Check length
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        
        // Check for lowercase
        if (/[a-z]/.test(password)) strength++;
        
        // Check for uppercase
        if (/[A-Z]/.test(password)) strength++;
        
        // Check for numbers
        if (/[0-9]/.test(password)) strength++;
        
        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        
        // Update strength indicator
        strengthFill.className = 'strength-fill';
        
        if (strength === 0) {
            strengthText.textContent = 'Password strength: None';
            strengthFill.style.width = '0%';
        } else if (strength <= 2) {
            strengthText.textContent = 'Password strength: Weak';
            strengthText.style.color = 'var(--error)';
            strengthFill.classList.add('strength-weak');
        } else if (strength <= 4) {
            strengthText.textContent = 'Password strength: Medium';
            strengthText.style.color = 'var(--warning)';
            strengthFill.classList.add('strength-medium');
        } else {
            strengthText.textContent = 'Password strength: Strong';
            strengthText.style.color = 'var(--success)';
            strengthFill.classList.add('strength-strong');
        }
        
        return strength;
    }
    
    function validatePassword() {
        const value = passwordInput.value;
        const strength = checkPasswordStrength(value);
        
        // Password must have at least medium strength
        if (value.length < 8 || !/[a-z]/.test(value) || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters with uppercase, lowercase, and number');
            return false;
        }
        
        hideError(passwordInput, passwordError);
        return true;
    }
    
    // Confirm password validation
    confirmPasswordInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateConfirmPassword();
        }
    });
    
    confirmPasswordInput.addEventListener('blur', function() {
        validateConfirmPassword();
    });
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (password !== confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            return false;
        }
        hideError(confirmPasswordInput, confirmPasswordError);
        return true;
    }
    
    // Helper functions for showing/hiding errors
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }
    
    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.classList.remove('active');
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        // Check terms and conditions
        if (!termsCheckbox.checked) {
            showAlert('Please accept the Terms and Conditions', 'error');
            return;
        }
        
        // If vendor, validate vendor fields
        const role = document.querySelector('input[name="role"]:checked').value;
        if (role === 'vendor') {
            const businessName = document.getElementById('businessName').value.trim();
            const serviceCategory = document.getElementById('serviceCategory').value;
            
            if (!businessName || !serviceCategory) {
                showAlert('Please fill in all vendor information', 'error');
                return;
            }
        }
        
        // Check if all validations passed
        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            // Collect form data
            const formData = {
                role: role,
                fullName: fullNameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                password: passwordInput.value,
                timestamp: new Date().toISOString()
            };
            
            if (role === 'vendor') {
                formData.businessName = document.getElementById('businessName').value.trim();
                formData.serviceCategory = document.getElementById('serviceCategory').value;
            }
            
            // In a real application, this would send data to the server
            console.log('Registration data:', formData);
            
            // Show success message
            showAlert('Registration successful! Redirecting to login...', 'success');
            
            // Reset form after 2 seconds and redirect
            setTimeout(() => {
                form.reset();
                clientCard.classList.add('active');
                vendorCard.classList.remove('active');
                vendorFields.classList.add('d-none');
                strengthFill.style.width = '0%';
                strengthText.textContent = 'Password strength: None';
                // In a real app, redirect to login page
                // window.location.href = 'login.html';
            }, 2000);
        } else {
            showAlert('Please fix the errors in the form', 'error');
        }
    });
    
    // Alert message function
    function showAlert(message, type) {
        alertMessage.className = `alert alert-${type}`;
        alertMessage.textContent = message;
        alertMessage.classList.remove('d-none');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            alertMessage.classList.add('d-none');
        }, 5000);
        
        // Scroll to top to show alert
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
