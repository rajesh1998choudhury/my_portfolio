// Email Service for Portfolio - Optimized Version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Email service initializing...');
    
    // Your EmailJS Configuration
    const EMAILJS_CONFIG = {
        serviceId: "service_y4pgp63",
        templateId: "template_dsc32br", 
        apiKey: "ZJ0MFyP47TTtS5VDb",
        toEmail: "rajeshchoudhury199716@gmail.com"
    };
    
    let emailServiceInitialized = false;
    
    // Simple EmailJS initialization
    function initEmailService() {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS library not found');
            alert('⚠️ EmailJS not loaded. Please refresh the page.');
            return false;
        }
        
        try {
            emailjs.init(EMAILJS_CONFIG.apiKey);
            emailServiceInitialized = true;
            console.log('✅ EmailJS initialized with key:', EMAILJS_CONFIG.apiKey.substring(0, 10) + '...');
            return true;
        } catch (error) {
            console.error('❌ EmailJS init error:', error);
            return false;
        }
    }
    
    // Simple form validation
    function validateForm(name, email, subject, message) {
        if (!name || name.length < 2) return 'Name (min 2 chars)';
        if (!email || !email.includes('@') || !email.includes('.')) return 'Valid email';
        if (!subject || subject.length < 3) return 'Subject (min 3 chars)';
        if (!message || message.length < 10) return 'Message (min 10 chars)';
        return null;
    }
    
    // Setup contact form
    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.error('Contact form not found');
            return;
        }
        
        console.log('✅ Setting up contact form...');
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate
            const error = validateForm(name, email, subject, message);
            if (error) {
                alert('Please enter: ' + error);
                return;
            }
            
            // Show loading
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Prepare template parameters
                const templateParams = {
                    name: name,           // Auto-reply uses {name}
                    title: subject,       // Auto-reply uses {title}
                    from_name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    reply_to: email,

                };
                
                console.log('Sending email with params:', templateParams);
                
                // Send email
                const response = await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.templateId,
                    templateParams
                );
                
                console.log('✅ Email sent successfully:', response);
                alert('🎉 Thank you! Your message has been sent successfully.');
                contactForm.reset();
                
            } catch (error) {
                console.error('❌ Email send error:', error);
                
                // User-friendly error messages
                let errorMsg = 'Failed to send. ';
                
                if (error.text) {
                    if (error.text.includes('Invalid login')) {
                        errorMsg = 'Email service error. Please try again later.';
                    } else if (error.text.includes('template')) {
                        errorMsg = 'Email template error. Please contact administrator.';
                    } else {
                        errorMsg += error.text;
                    }
                } else if (error.status === 0) {
                    errorMsg = 'Network error. Check internet connection.';
                } else if (error.status === 401) {
                    errorMsg = 'Authentication failed. Please refresh the page.';
                }
                
                alert('❌ Error: ' + errorMsg);
                
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Fallback email method
    function setupFallbackEmail() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (!submitBtn) return;
        
        submitBtn.textContent = '📧 Send Email';
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            const error = validateForm(name, email, subject, message);
            if (error) {
                alert('Please enter: ' + error);
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:rajeshchoudhury098@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show message
            alert('📧 Your email client will open.\n\nPlease send the email to contact me.\n\nThank you!');
            
            // Reset form after 2 seconds
            setTimeout(() => contactForm.reset(), 2000);
        });
    }
    
    // Initialize
    if (initEmailService()) {
        setupContactForm();
        console.log('✅ Email service ready');
    } else {
        console.warn('Using fallback email method');
        setupFallbackEmail();
    }
    
    // Debug function
    window.debugEmail = function() {
        console.log('=== DEBUG INFO ===');
        console.log('EmailJS loaded:', typeof emailjs !== 'undefined');
        console.log('Service ID:', EMAILJS_CONFIG.serviceId);
        console.log('Template ID:', EMAILJS_CONFIG.templateId);
        console.log('API Key:', EMAILJS_CONFIG.apiKey.substring(0, 8) + '...');
        console.log('Initialized:', emailServiceInitialized);
        
        if (typeof emailjs !== 'undefined') {
            console.log('EmailJS version:', emailjs.version);
        }
    };
});