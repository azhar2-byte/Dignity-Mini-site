

document.addEventListener('DOMContentLoaded', function() {
    console.log('Hope Foundation website loaded successfully!');
    

    initMobileNavigation();
    initDonationForm();
    initSponsorshipForm();
    initContactForm();
    initFAQAccordion();
    initSmoothScrolling();
});

function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        

        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

function initDonationForm() {
  
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customInput = document.getElementById('custom-input');
    const customAmountField = document.getElementById('custom-amount');
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
       
            amountButtons.forEach(btn => btn.classList.remove('selected'));
            
           
            this.classList.add('selected');
            
         
            if (this.classList.contains('custom-amount')) {
                if (customInput) {
                    customInput.style.display = 'block';
                    if (customAmountField) {
                        customAmountField.focus();
                    }
                }
            } else {
                if (customInput) {
                    customInput.style.display = 'none';
                }
            }
        });
    });
}


function selectAmount(amount) {
    console.log(`Selected donation amount: $${amount}`);
}

function selectCustomAmount() {
    console.log('Custom amount selected');
    const customInput = document.getElementById('custom-input');
    if (customInput) {
        customInput.style.display = 'block';
        const customAmountField = document.getElementById('custom-amount');
        if (customAmountField) {
            customAmountField.focus();
        }
    }
}

function selectMonthlyPlan(amount) {
    console.log(`Selected monthly plan: $${amount}/month`);
 
    alert(`You selected the $${amount}/month plan. In a real implementation, this would redirect to secure payment processing.`);
}

function processDonation(type) {
    console.log(`Processing ${type} donation`);
  
    alert('Thank you for your interest in donating! In a real implementation, this would redirect to secure payment processing.');
}

function initSponsorshipForm() {
  
}


function selectChild(childName) {
    console.log(`Selected child for sponsorship: ${childName}`);
  
    alert(`You've selected to sponsor ${childName}. In a real implementation, this would start the sponsorship application process.`);
}

function startSponsorship() {
    console.log('Starting sponsorship process');
  
    alert('Starting sponsorship process! In a real implementation, this would redirect to a detailed sponsorship form.');
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
       
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
}

function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    
  
    field.classList.remove('error');

    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        return false;
    }
  
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    

    if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            field.classList.add('error');
            return false;
        }
    }
    
    return true;
}

function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (isValid) {
      
        console.log('Form submitted successfully');
        
        
        alert('Thank you for your message! We will get back to you within 24 hours.');
       
        form.reset();
    } else {
        alert('Please fill in all required fields correctly.');
    }
}

function initFAQAccordion() {
   
}


function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentElement;
    const isActive = faqItem.classList.contains('active');
    s
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 80; 
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.card, .program-item, .child-card, .story-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', function() {
 
    if ('IntersectionObserver' in window) {
        initScrollAnimations();
    }
});


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


window.addEventListener('resize', debounce(function() {

    if (window.innerWidth > 800) {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}, 250));


function addErrorStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #dc3545 !important;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addErrorStyles);

console.log(`
 Dignity For Children Foundation Website
 Contact: dignity@dignityforchildren.org
 Built with HTML5, CSS3, and Vanilla JavaScript
 Theme: Bright Yellow (#ffc400) on White
`);
