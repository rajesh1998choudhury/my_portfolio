// // // // Email Service for Portfolio - Optimized Version
// // // document.addEventListener('DOMContentLoaded', function() {
// // //     console.log('Email service initializing...');
    
// // //     // Your EmailJS Configuration
// // //     const EMAILJS_CONFIG = {
// // //         serviceId: "service_yiaut9h",
// // //         templateId: "template_dsc32br", 
// // //         apiKey: "ZJ0MFyP47TTtS5VDb",
// // //         toEmail: "rajeshchoudhury098@gmail.com"
// // //     };
    
// // //     let emailServiceInitialized = false;

// // //         // ⭐⭐⭐ FORCE HIDE LOADING SCREEN COMPLETELY ⭐⭐⭐
// // //     function forceHideLoadingScreen() {
// // //         const loadingScreen = document.querySelector('.loading-screen');
// // //         if (loadingScreen) {
// // //             loadingScreen.classList.add('hidden');
// // //             loadingScreen.style.display = 'none';
// // //             loadingScreen.style.opacity = '0';
// // //             loadingScreen.style.visibility = 'hidden';
// // //             loadingScreen.style.pointerEvents = 'none';
// // //         }
// // //     }
    
// // //     // Hide loading screen multiple times to ensure it stays hidden
// // //     forceHideLoadingScreen();
// // //     window.addEventListener('load', forceHideLoadingScreen);
// // //     setTimeout(forceHideLoadingScreen, 100);
// // //     setTimeout(forceHideLoadingScreen, 500);
// // //     setTimeout(forceHideLoadingScreen, 1000);
// // //     setTimeout(forceHideLoadingScreen, 2000);
    
// // //     // Continuous protection - check every second
// // //     setInterval(forceHideLoadingScreen, 1000);

    
// // //     // Simple EmailJS initialization
// // //     function initEmailService() {
// // //         if (typeof emailjs === 'undefined') {
// // //             console.error('EmailJS library not found');
// // //             alert('⚠️ EmailJS not loaded. Please refresh the page.');
// // //             return false;
// // //         }
        
// // //         try {
// // //             emailjs.init(EMAILJS_CONFIG.apiKey);
// // //             emailServiceInitialized = true;
// // //             console.log('✅ EmailJS initialized with key:', EMAILJS_CONFIG.apiKey.substring(0, 10) + '...');
// // //             return true;
// // //         } catch (error) {
// // //             console.error('❌ EmailJS init error:', error);
// // //             return false;
// // //         }
// // //     }
    
// // //     // Simple form validation
// // //     function validateForm(name, email, subject, message) {
// // //         if (!name || name.length < 2) return 'Name (min 2 chars)';
// // //         if (!email || !email.includes('@') || !email.includes('.')) return 'Valid email';
// // //         if (!subject || subject.length < 3) return 'Subject (min 3 chars)';
// // //         if (!message || message.length < 10) return 'Message (min 10 chars)';
// // //         return null;
// // //     }
    
// // //     // Setup contact form
// // //     function setupContactForm() {
// // //         const contactForm = document.getElementById('contactForm');
// // //         if (!contactForm) {
// // //             console.error('Contact form not found');
// // //             return;
// // //         }
        
// // //         console.log('✅ Setting up contact form...');
        
// // //         // contactForm.addEventListener('submit', async function(e) {
// // //         //     e.preventDefault();

// // //                 // Remove any existing event listeners by cloning
// // //         const newForm = contactForm.cloneNode(true);
// // //         contactForm.parentNode.replaceChild(newForm, contactForm);
// // //         const finalForm = document.getElementById('contactForm');
        
// // //         finalForm.addEventListener('submit', async function(e) {
// // //             e.preventDefault();
// // //             e.stopPropagation();
            
// // //             // Force hide loading screen on submit
// // //             forceHideLoadingScreen();

            
// // //             // Get form values
// // //             const name = document.getElementById('name').value.trim();
// // //             const email = document.getElementById('email').value.trim();
// // //             const subject = document.getElementById('subject').value.trim();
// // //             const message = document.getElementById('message').value.trim();
            
// // //             // Validate
// // //             const error = validateForm(name, email, subject, message);
// // //             if (error) {
// // //                 alert('Please enter: ' + error);
// // //                 return;
// // //             }
            
// // //             // Show loading
// // //             const submitBtn = this.querySelector('button[type="submit"]');
// // //             const originalText = submitBtn.textContent;
// // //             submitBtn.textContent = 'Sending...';
// // //             submitBtn.disabled = true;
            
// // //             try {
// // //                 // Prepare template parameters
// // //                 const templateParams = {
// // //                     to_email: EMAILJS_CONFIG.toEmail,
// // //                     name: name,           // Auto-reply uses {name}
// // //                     title: subject,       // Auto-reply uses {title}
// // //                     from_name: name,
// // //                     email: email,
// // //                     subject: subject,
// // //                     message: message,
// // //                     reply_to: email,

// // //                 };

// // //                 console.log('Sending email to:', EMAILJS_CONFIG.toEmail);
// // //                 console.log('Sending email with params:', templateParams);
                
// // //                 // Send email
// // //                 const response = await emailjs.send(
// // //                     EMAILJS_CONFIG.serviceId,
// // //                     EMAILJS_CONFIG.templateId,
// // //                     templateParams
// // //                 );
                
// // //                 console.log('✅ Email sent successfully:', response);
// // //                 alert('🎉 Thank you! Your message has been sent successfully.');
// // //                 // contactForm.reset();
// // //                 finalForm.reset();
                
// // //             } catch (error) {
// // //                 console.error('❌ Email send error:', error);
                
// // //                 // // User-friendly error messages
// // //                 // let errorMsg = 'Failed to send. ';
                
// // //                 // if (error.text) {
// // //                 //     if (error.text.includes('Invalid login')) {
// // //                 //         errorMsg = 'Email service error. Please try again later.';
// // //                 //     } else if (error.text.includes('template')) {
// // //                 //         errorMsg = 'Email template error. Please contact administrator.';
// // //                 //     } else {
// // //                 //         errorMsg += error.text;
// // //                 //     }
// // //                 // } else if (error.status === 0) {
// // //                 //     errorMsg = 'Network error. Check internet connection.';
// // //                 // } else if (error.status === 401) {
// // //                 //     errorMsg = 'Authentication failed. Please refresh the page.';
// // //                 // }
                
// // //                 // alert('❌ Error: ' + errorMsg);

// // //                  // Handle Gmail Invalid grant error
// // //                 if (error.text && (error.text.includes('Invalid grant') || error.text.includes('Invalid login'))) {
// // //                     const useMailto = confirm('⚠️ Gmail connection needs to be reconnected.\n\nClick OK to open your email client and send directly.\nClick Cancel to try again later.');
                    
// // //                     if (useMailto) {
// // //                         const mailtoLink = `mailto:rajeshchoudhury098@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
// // //                         window.location.href = mailtoLink;
// // //                         alert('📧 Your email client will open. Please send the email.');
// // //                         finalForm.reset();
// // //                     }
// // //                 } else {
// // //                     let errorMsg = 'Failed to send. ';
                    
// // //                     if (error.text) {
// // //                         if (error.text.includes('template')) {
// // //                             errorMsg = 'Email template error. Please contact administrator.';
// // //                         } else {
// // //                             errorMsg += error.text;
// // //                         }
// // //                     } else if (error.status === 0) {
// // //                         errorMsg = 'Network error. Check internet connection.';
// // //                     } else if (error.status === 401) {
// // //                         errorMsg = 'Authentication failed. Please refresh the page.';
// // //                     }
                    
// // //                     alert('❌ Error: ' + errorMsg + '\n\nPlease email me directly at: rajeshchoudhury098@gmail.com');
// // //                 }
                
// // //             } finally {
// // //                 // Reset button
// // //                 submitBtn.textContent = originalText;
// // //                 submitBtn.disabled = false;
// // //                 // Force hide loading screen again
// // //                 forceHideLoadingScreen();
// // //             }
// // //         });
// // //     }
    
// // //     // Fallback email method
// // //     function setupFallbackEmail() {
// // //         const contactForm = document.getElementById('contactForm');
// // //         if (!contactForm) return;

// // //           // Remove any existing event listeners by cloning
// // //         const newForm = contactForm.cloneNode(true);
// // //         contactForm.parentNode.replaceChild(newForm, contactForm);
// // //         const finalForm = document.getElementById('contactForm');

// // //           const submitBtn = finalForm.querySelector('button[type="submit"]');
// // //         if (submitBtn) {
// // //             submitBtn.textContent = '📧 Send Email';
// // //         }
        
// // //         // const submitBtn = contactForm.querySelector('button[type="submit"]');
// // //         // if (!submitBtn) return;
        
// // //         // submitBtn.textContent = '📧 Send Email';
        
// // //         // contactForm.addEventListener('submit', function(e) {
// // //         //     e.preventDefault();

// // //             finalForm.addEventListener('submit', function(e) {
// // //             e.preventDefault();
// // //             e.stopPropagation();
            
// // //             // Force hide loading screen
// // //             forceHideLoadingScreen();
            
// // //             const name = document.getElementById('name').value.trim();
// // //             const email = document.getElementById('email').value.trim();
// // //             const subject = document.getElementById('subject').value.trim();
// // //             const message = document.getElementById('message').value.trim();
            
// // //             const error = validateForm(name, email, subject, message);
// // //             if (error) {
// // //                 alert('Please enter: ' + error);
// // //                 return;
// // //             }
            
// // //             // Create mailto link
// // //             const mailtoLink = `mailto:rajeshchoudhury098@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
// // //             // Open email client
// // //             window.location.href = mailtoLink;
            
// // //             // Show message
// // //             alert('📧 Your email client will open.\n\nPlease send the email to contact me.\n\nThank you!');
            
// // //             // Reset form after 2 seconds
// // //             // setTimeout(() => contactForm.reset(), 2000);
// // //             setTimeout(() => finalForm.reset(), 2000);
// // //         });
// // //     }
    
// // //     // Initialize
// // //     if (initEmailService()) {
// // //         setupContactForm();
// // //         console.log('✅ Email service ready');
// // //         console.log('📧 Emails will be sent to:', EMAILJS_CONFIG.toEmail);
// // //     } else {
// // //         console.warn('Using fallback email method');
// // //         setupFallbackEmail();
// // //     }
    
// // //     // Debug function
// // //     window.debugEmail = function() {
// // //         console.log('=== DEBUG INFO ===');
// // //         console.log('📧 Receiving email:', EMAILJS_CONFIG.toEmail);
// // //         console.log('EmailJS loaded:', typeof emailjs !== 'undefined');
// // //         console.log('Service ID:', EMAILJS_CONFIG.serviceId);
// // //         console.log('Template ID:', EMAILJS_CONFIG.templateId);
// // //         console.log('API Key:', EMAILJS_CONFIG.apiKey.substring(0, 8) + '...');
// // //         console.log('Initialized:', emailServiceInitialized);
        
// // //         if (typeof emailjs !== 'undefined') {
// // //             console.log('EmailJS version:', emailjs.version);
// // //         }
// // //     };
// // // });


// // // Email Service - Fixed for rajeshchoudhury098@gmail.com
// // document.addEventListener('DOMContentLoaded', function() {
// //     console.log('Email service initializing...');
    
// //     // Your EmailJS Configuration
// //     const EMAILJS_CONFIG = {
// //         serviceId: "service_yiaut9h",
// //         contactTemplateId: "template_dsc32br",   // Contact Us template
// //         autoReplyTemplateId: "template_r35i997", // Auto-Reply template
// //         apiKey: "ZJ0MFyP47TTtS5VDb",
// //         yourEmail: "rajeshchoudhury098@gmail.com"  // ✅ CHANGED - Where YOU receive emails
// //     };
    
// //     let emailServiceInitialized = false;

// //     // Force hide loading screen completely
// //     function forceHideLoadingScreen() {
// //         const loadingScreen = document.querySelector('.loading-screen');
// //         if (loadingScreen) {
// //             loadingScreen.classList.add('hidden');
// //             loadingScreen.style.display = 'none';
// //             loadingScreen.style.opacity = '0';
// //             loadingScreen.style.visibility = 'hidden';
// //             loadingScreen.style.pointerEvents = 'none';
// //         }
// //     }
    
// //     forceHideLoadingScreen();
// //     window.addEventListener('load', forceHideLoadingScreen);
// //     setTimeout(forceHideLoadingScreen, 100);
// //     setTimeout(forceHideLoadingScreen, 500);
// //     setTimeout(forceHideLoadingScreen, 1000);
// //     setTimeout(forceHideLoadingScreen, 2000);
// //     setInterval(forceHideLoadingScreen, 1000);
    
// //     function initEmailService() {
// //         if (typeof emailjs === 'undefined') {
// //             console.error('EmailJS library not found');
// //             return false;
// //         }
        
// //         try {
// //             emailjs.init(EMAILJS_CONFIG.apiKey);
// //             emailServiceInitialized = true;
// //             console.log('✅ EmailJS initialized');
// //             return true;
// //         } catch (error) {
// //             console.error('❌ EmailJS init error:', error);
// //             return false;
// //         }
// //     }
    
// //     function validateForm(name, email, subject, message) {
// //         if (!name || name.length < 2) return 'Name (min 2 chars)';
// //         if (!email || !email.includes('@') || !email.includes('.')) return 'Valid email';
// //         if (!subject || subject.length < 3) return 'Subject (min 3 chars)';
// //         if (!message || message.length < 10) return 'Message (min 10 chars)';
// //         return null;
// //     }
    
// //     function setupContactForm() {
// //         const contactForm = document.getElementById('contactForm');
// //         if (!contactForm) {
// //             console.error('Contact form not found');
// //             return;
// //         }
        
// //         console.log('✅ Setting up contact form...');
// //         console.log('📧 YOU will receive emails at:', EMAILJS_CONFIG.yourEmail);
        
// //         // Clone to remove old event listeners
// //         const newForm = contactForm.cloneNode(true);
// //         contactForm.parentNode.replaceChild(newForm, contactForm);
// //         const finalForm = document.getElementById('contactForm');
        
// //         finalForm.addEventListener('submit', async function(e) {
// //             e.preventDefault();
// //             e.stopPropagation();
// //             forceHideLoadingScreen();
            
// //             const name = document.getElementById('name').value.trim();
// //             const email = document.getElementById('email').value.trim();
// //             const subject = document.getElementById('subject').value.trim();
// //             const message = document.getElementById('message').value.trim();
            
// //             const error = validateForm(name, email, subject, message);
// //             if (error) {
// //                 alert('Please enter: ' + error);
// //                 return;
// //             }
            
// //             const submitBtn = this.querySelector('button[type="submit"]');
// //             const originalText = submitBtn.textContent;
// //             submitBtn.textContent = 'Sending...';
// //             submitBtn.disabled = true;
            
// //             try {
// //                 // 1. Send email to YOU (rajeshchoudhury098@gmail.com)
// //                 const contactParams = {
// //                     to_email: EMAILJS_CONFIG.yourEmail,  // ✅ Your receiving email
// //                     name: name,
// //                     title: subject,
// //                     from_name: name,
// //                     email: email,
// //                     subject: subject,
// //                     message: message,
// //                     reply_to: email
// //                 };
                
// //                 console.log('📧 Sending contact email to YOU:', EMAILJS_CONFIG.yourEmail);
// //                 const contactResponse = await emailjs.send(
// //                     EMAILJS_CONFIG.serviceId,
// //                     EMAILJS_CONFIG.contactTemplateId,
// //                     contactParams
// //                 );
// //                 console.log('✅ Contact email sent to you successfully');
                
// //                 // 2. Send auto-reply to visitor
// //                 const autoReplyParams = {
// //                     to_email: email,  // Sends to the person who filled the form
// //                     name: name,
// //                     title: subject,
// //                     from_name: "Rajesh Choudhury",
// //                     message: message,
// //                     reply_to: EMAILJS_CONFIG.yourEmail
// //                 };
                
// //                 console.log('📧 Sending auto-reply to visitor:', email);
// //                 const autoReplyResponse = await emailjs.send(
// //                     EMAILJS_CONFIG.serviceId,
// //                     EMAILJS_CONFIG.autoReplyTemplateId,
// //                     autoReplyParams
// //                 );
// //                 console.log('✅ Auto-reply sent to visitor');
                
// //                 // ✅ SUCCESS ALERT - Shows when emails send successfully
// //                 alert('🎉 Thank you! Your message has been sent successfully.\n\nYou will receive a confirmation email shortly.\n\nI will get back to you soon!');
// //                 finalForm.reset();
                
// //             } catch (error) {
// //                 console.error('❌ Email send error:', error);
                
// //                 // Show detailed error
// //                 let errorDetails = error.text || error.message || 'Unknown error';
// //                 console.log('Error details:', errorDetails);
                
// //                 // Offer mailto fallback to YOUR email
// //                 const useMailto = confirm(`⚠️ Email send failed: ${errorDetails}\n\nClick OK to open your email client and send directly to ${EMAILJS_CONFIG.yourEmail}\nClick Cancel to try again.`);
                
// //                 if (useMailto) {
// //                     const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
// //                     window.location.href = mailtoLink;
// //                     alert('📧 Your email client will open.\n\nPlease send the email to complete your message.\n\nThank you!');
// //                     finalForm.reset();
// //                 }
                
// //             } finally {
// //                 submitBtn.textContent = originalText;
// //                 submitBtn.disabled = false;
// //                 forceHideLoadingScreen();
// //             }
// //         });
// //     }
    
// //     function setupFallbackEmail() {
// //         const contactForm = document.getElementById('contactForm');
// //         if (!contactForm) return;
        
// //         const newForm = contactForm.cloneNode(true);
// //         contactForm.parentNode.replaceChild(newForm, contactForm);
// //         const finalForm = document.getElementById('contactForm');
        
// //         const submitBtn = finalForm.querySelector('button[type="submit"]');
// //         if (submitBtn) {
// //             submitBtn.textContent = '📧 Send Email';
// //         }
        
// //         finalForm.addEventListener('submit', function(e) {
// //             e.preventDefault();
// //             e.stopPropagation();
// //             forceHideLoadingScreen();
            
// //             const name = document.getElementById('name').value.trim();
// //             const email = document.getElementById('email').value.trim();
// //             const subject = document.getElementById('subject').value.trim();
// //             const message = document.getElementById('message').value.trim();
            
// //             const error = validateForm(name, email, subject, message);
// //             if (error) {
// //                 alert('Please enter: ' + error);
// //                 return;
// //             }
            
// //             // Mailto to YOUR email (rajeshchoudhury098@gmail.com)
// //             const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
// //             window.location.href = mailtoLink;
// //             alert('🎉 Thank you! Your email client will open.\n\nPlease send the email to complete your message.\n\nI will get back to you soon!');
// //             setTimeout(() => finalForm.reset(), 2000);
// //         });
// //     }
    
// //     // Initialize
// //     if (initEmailService()) {
// //         setupContactForm();
// //         console.log('✅ Email service ready');
// //         console.log('✅ YOU will receive emails at: rajeshchoudhury098@gmail.com');
// //         console.log('✅ Visitors will receive auto-reply emails');
// //     } else {
// //         console.warn('Using fallback email method');
// //         setupFallbackEmail();
// //     }
    
// //     // Debug function
// //     window.debugEmail = function() {
// //         console.log('=== EMAIL DEBUG INFO ===');
// //         console.log('📧 YOUR receiving email:', EMAILJS_CONFIG.yourEmail);
// //         console.log('🔧 Service ID:', EMAILJS_CONFIG.serviceId);
// //         console.log('📝 Contact Template:', EMAILJS_CONFIG.contactTemplateId);
// //         console.log('📝 Auto-Reply Template:', EMAILJS_CONFIG.autoReplyTemplateId);
// //         console.log('✅ EmailJS Ready:', emailServiceInitialized);
// //     };
// // });


// // Email Service - Fixed for Dynamic Form Loading
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Email service initializing...');
    
//     // Your EmailJS Configuration
//     const EMAILJS_CONFIG = {
//         serviceId: "service_yiaut9h",
//         contactTemplateId: "template_dsc32br",
//         autoReplyTemplateId: "template_r35i997",
//         apiKey: "ZJ0MFyP47TTtS5VDb",
//         yourEmail: "rajeshchoudhury098@gmail.com"
//     };
    
//     let emailServiceInitialized = false;
//     let retryCount = 0;
//     const maxRetries = 20; // Try for 10 seconds

//     // Force hide loading screen
//     function forceHideLoadingScreen() {
//         const loadingScreen = document.querySelector('.loading-screen');
//         if (loadingScreen) {
//             loadingScreen.classList.add('hidden');
//             loadingScreen.style.display = 'none';
//             loadingScreen.style.opacity = '0';
//             loadingScreen.style.visibility = 'hidden';
//             loadingScreen.style.pointerEvents = 'none';
//         }
//     }
    
//     forceHideLoadingScreen();
//     window.addEventListener('load', forceHideLoadingScreen);
//     setInterval(forceHideLoadingScreen, 1000);
    
//     function initEmailService() {
//         if (typeof emailjs === 'undefined') {
//             console.error('EmailJS library not found');
//             return false;
//         }
        
//         try {
//             emailjs.init(EMAILJS_CONFIG.apiKey);
//             emailServiceInitialized = true;
//             console.log('✅ EmailJS initialized');
//             return true;
//         } catch (error) {
//             console.error('❌ EmailJS init error:', error);
//             return false;
//         }
//     }
    
//     function validateForm(name, email, subject, message) {
//         if (!name || name.length < 2) return 'Name (min 2 chars)';
//         if (!email || !email.includes('@') || !email.includes('.')) return 'Valid email';
//         if (!subject || subject.length < 3) return 'Subject (min 3 chars)';
//         if (!message || message.length < 10) return 'Message (min 10 chars)';
//         return null;
//     }
    
//     // Wait for contact form to be loaded dynamically
//     function waitForContactForm() {
//         console.log('Waiting for contact form to load... (attempt ' + (retryCount + 1) + ')');
        
//         const contactForm = document.getElementById('contactForm');
        
//         if (contactForm) {
//             console.log('✅ Contact form found! Setting up...');
//             setupContactForm(contactForm);
//         } else if (retryCount < maxRetries) {
//             retryCount++;
//             setTimeout(waitForContactForm, 500); // Try again after 500ms
//         } else {
//             console.error('❌ Contact form not found after ' + maxRetries + ' attempts');
//             // Still try to setup with fallback
//             setupFallbackEmail();
//         }
//     }
    
//     function setupContactForm(contactForm) {
//         // Clone to remove old event listeners
//         const newForm = contactForm.cloneNode(true);
//         contactForm.parentNode.replaceChild(newForm, contactForm);
//         const finalForm = document.getElementById('contactForm');
        
//         finalForm.addEventListener('submit', async function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             forceHideLoadingScreen();
            
//             const name = document.getElementById('name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const subject = document.getElementById('subject').value.trim();
//             const message = document.getElementById('message').value.trim();
            
//             const error = validateForm(name, email, subject, message);
//             if (error) {
//                 alert('Please enter: ' + error);
//                 return;
//             }
            
//             const submitBtn = this.querySelector('button[type="submit"]');
//             const originalText = submitBtn.textContent;
//             submitBtn.textContent = 'Sending...';
//             submitBtn.disabled = true;
            
//             try {
//                 // 1. Send email to YOU
//                 const contactParams = {
//                     // to_email: EMAILJS_CONFIG.yourEmail,
//                     name: name,
//                     title: subject,
//                     from_name: name,
//                     email: email,
//                     subject: subject,
//                     message: message,
//                     reply_to: email
//                 };
                
//                 console.log('📧 Sending to you:', EMAILJS_CONFIG.yourEmail);
//                 const contactResponse = await emailjs.send(
//                     EMAILJS_CONFIG.serviceId,
//                     EMAILJS_CONFIG.contactTemplateId,
//                     contactParams
//                 );
//                 console.log('✅ Email sent to you');
                
//                 // 2. Send auto-reply to visitor
//                 const autoReplyParams = {
//                     to_email: email,
//                     name: name,
//                     title: subject,
//                     from_name: "Rajesh Choudhury",
//                     message: message,
//                     reply_to: EMAILJS_CONFIG.yourEmail
//                 };
                
//                 console.log('📧 Sending auto-reply to:', email);
//                 const autoReplyResponse = await emailjs.send(
//                     EMAILJS_CONFIG.serviceId,
//                     EMAILJS_CONFIG.autoReplyTemplateId,
//                     autoReplyParams
//                 );
//                 console.log('✅ Auto-reply sent');
                
//                 // ✅ SUCCESS ALERT
//                 alert('🎉 Thank you! Your message has been sent successfully.\n\nYou will receive a confirmation email shortly.');
//                 finalForm.reset();
                
//             } catch (error) {
//                 console.error('❌ Email error:', error);
                
//                 let errorDetails = error.text || error.message || 'Unknown error';
                
//                 const useMailto = confirm(`⚠️ Email send failed: ${errorDetails}\n\nClick OK to open your email client and send directly.`);
                
//                 if (useMailto) {
//                     const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
//                     window.location.href = mailtoLink;
//                     alert('📧 Your email client will open. Please send the email.\n\nThank you!');
//                     finalForm.reset();
//                 }
                
//             } finally {
//                 submitBtn.textContent = originalText;
//                 submitBtn.disabled = false;
//                 forceHideLoadingScreen();
//             }
//         });
        
//         console.log('✅ Contact form setup complete');
//     }
    
//     function setupFallbackEmail() {
//         console.log('Setting up fallback email...');
        
//         // Keep trying to find the form
//         let fallbackRetry = 0;
        
//         function trySetupFallback() {
//             const contactForm = document.getElementById('contactForm');
//             if (contactForm) {
//                 const newForm = contactForm.cloneNode(true);
//                 contactForm.parentNode.replaceChild(newForm, contactForm);
//                 const finalForm = document.getElementById('contactForm');
                
//                 const submitBtn = finalForm.querySelector('button[type="submit"]');
//                 if (submitBtn) {
//                     submitBtn.textContent = '📧 Send Email';
//                 }
                
//                 finalForm.addEventListener('submit', function(e) {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     forceHideLoadingScreen();
                    
//                     const name = document.getElementById('name').value.trim();
//                     const email = document.getElementById('email').value.trim();
//                     const subject = document.getElementById('subject').value.trim();
//                     const message = document.getElementById('message').value.trim();
                    
//                     const error = validateForm(name, email, subject, message);
//                     if (error) {
//                         alert('Please enter: ' + error);
//                         return;
//                     }
                    
//                     const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
//                     window.location.href = mailtoLink;
//                     alert('🎉 Thank you! Your email client will open.\n\nPlease send the email.\n\nI will get back to you soon!');
//                     setTimeout(() => finalForm.reset(), 2000);
//                 });
                
//                 console.log('✅ Fallback email setup complete');
//             } else if (fallbackRetry < 20) {
//                 fallbackRetry++;
//                 setTimeout(trySetupFallback, 500);
//             }
//         }
        
//         trySetupFallback();
//     }
    
//     // Initialize EmailJS first
//     if (initEmailService()) {
//         console.log('✅ EmailJS ready, waiting for contact form...');
//         // Wait for form to be loaded by loader.js
//         waitForContactForm();
//     } else {
//         console.warn('EmailJS not available, using fallback');
//         setupFallbackEmail();
//     }
    
//     // Debug function
//     window.debugEmail = function() {
//         console.log('=== DEBUG INFO ===');
//         console.log('📧 Your email:', EMAILJS_CONFIG.yourEmail);
//         console.log('🔧 Service ID:', EMAILJS_CONFIG.serviceId);
//         console.log('📝 Contact Template:', EMAILJS_CONFIG.contactTemplateId);
//         console.log('📝 Auto-Reply Template:', EMAILJS_CONFIG.autoReplyTemplateId);
//         console.log('✅ EmailJS Ready:', emailServiceInitialized);
//         console.log('🔍 Contact form exists:', !!document.getElementById('contactForm'));
//     };
// });

// Email Service - For Hardcoded Template (No to_email variable)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Email service initializing...');
    
    const EMAILJS_CONFIG = {
        serviceId: "service_uu9l1qq", // "service_yiaut9h",
        contactTemplateId: "template_wc2oxcq", //"template_dsc32br"
        autoReplyTemplateId:  "template_z1rvl5i", // "template_r35i997"
        apiKey:  "MXzmw-ixQa6dghDi7", //"ZJ0MFyP47TTtS5VDb",
        yourEmail: "rajeshchoudhury098@gmail.com"
    };
    
    let emailServiceInitialized = false;
    let retryCount = 0;
    const maxRetries = 20;

    function forceHideLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            loadingScreen.style.display = 'none';
        }
    }
    
    forceHideLoadingScreen();
    window.addEventListener('load', forceHideLoadingScreen);
    setInterval(forceHideLoadingScreen, 1000);
    
    function initEmailService() {
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS library not found');
            return false;
        }
        
        try {
            emailjs.init(EMAILJS_CONFIG.apiKey);
            emailServiceInitialized = true;
            console.log('✅ EmailJS initialized');
            return true;
        } catch (error) {
            console.error('❌ EmailJS init error:', error);
            return false;
        }
    }
    
    function validateForm(name, email, subject, message) {
        if (!name || name.length < 2) return 'Name (min 2 chars)';
        if (!email || !email.includes('@') || !email.includes('.')) return 'Valid email';
        if (!subject || subject.length < 3) return 'Subject (min 3 chars)';
        if (!message || message.length < 10) return 'Message (min 10 chars)';
        return null;
    }
    
    function waitForContactForm() {
        console.log('Waiting for contact form... (attempt ' + (retryCount + 1) + ')');
        
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            console.log('✅ Contact form found!');
            setupContactForm(contactForm);
        } else if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(waitForContactForm, 500);
        } else {
            console.error('❌ Contact form not found');
            setupFallbackEmail();
        }
    }
    
    function setupContactForm(contactForm) {
        const newForm = contactForm.cloneNode(true);
        contactForm.parentNode.replaceChild(newForm, contactForm);
        const finalForm = document.getElementById('contactForm');
        
        finalForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            e.stopPropagation();
            forceHideLoadingScreen();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            const error = validateForm(name, email, subject, message);
            if (error) {
                alert('Please enter: ' + error);
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // IMPORTANT: NO to_email parameter because template has hardcoded email
                const contactParams = {
                    name: name,
                    title: subject,
                    from_name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    reply_to: email
                };
                
                console.log('📧 Sending contact email...');
                console.log('📧 Params:', contactParams);
                
                const contactResponse = await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.contactTemplateId,
                    contactParams
                );
                console.log('✅ Email sent successfully:', contactResponse);
                
                // Auto-reply params
                const autoReplyParams = {
                    to_email: email,
                    name: name,
                    title: subject,
                    from_name: "Rajesh Choudhury",
                    message: message,
                    reply_to: EMAILJS_CONFIG.yourEmail
                };
                
                console.log('📧 Sending auto-reply to:', email);
                const autoReplyResponse = await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.autoReplyTemplateId,
                    autoReplyParams
                );
                console.log('✅ Auto-reply sent:', autoReplyResponse);
                
                alert('🎉 Thank you! Your message has been sent successfully.\n\nYou will receive a confirmation email shortly.');
                finalForm.reset();
                
            } catch (error) {
                console.error('❌ Email error:', error);
                console.error('Error details:', error.text);
                
                let errorDetails = error.text || error.message || 'Unknown error';
                
                const useMailto = confirm(`⚠️ Email send failed: ${errorDetails}\n\nClick OK to open your email client and send directly.`);
                
                if (useMailto) {
                    const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                    window.location.href = mailtoLink;
                    alert('📧 Your email client will open. Please send the email.\n\nThank you!');
                    finalForm.reset();
                }
                
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                forceHideLoadingScreen();
            }
        });
        
        console.log('✅ Contact form setup complete');
    }
    
    function setupFallbackEmail() {
        console.log('Setting up fallback email...');
        
        let fallbackRetry = 0;
        
        function trySetupFallback() {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                const newForm = contactForm.cloneNode(true);
                contactForm.parentNode.replaceChild(newForm, contactForm);
                const finalForm = document.getElementById('contactForm');
                
                const submitBtn = finalForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.textContent = '📧 Send Email';
                }
                
                finalForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    forceHideLoadingScreen();
                    
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const subject = document.getElementById('subject').value.trim();
                    const message = document.getElementById('message').value.trim();
                    
                    const error = validateForm(name, email, subject, message);
                    if (error) {
                        alert('Please enter: ' + error);
                        return;
                    }
                    
                    const mailtoLink = `mailto:${EMAILJS_CONFIG.yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                    window.location.href = mailtoLink;
                    alert('🎉 Thank you! Your email client will open.\n\nPlease send the email.\n\nI will get back to you soon!');
                    setTimeout(() => finalForm.reset(), 2000);
                });
                
                console.log('✅ Fallback email setup complete');
            } else if (fallbackRetry < 20) {
                fallbackRetry++;
                setTimeout(trySetupFallback, 500);
            }
        }
        
        trySetupFallback();
    }
    
    if (initEmailService()) {
        waitForContactForm();
        console.log('📧 Contact form ready');
    } else {
        setupFallbackEmail();
    }
    
    window.debugEmail = function() {
        console.log('=== DEBUG INFO ===');
        console.log('📧 Your email:', EMAILJS_CONFIG.yourEmail);
        console.log('🔧 Service ID:', EMAILJS_CONFIG.serviceId);
        console.log('📝 Contact Template:', EMAILJS_CONFIG.contactTemplateId);
        console.log('📝 Auto-Reply Template:', EMAILJS_CONFIG.autoReplyTemplateId);
        console.log('✅ EmailJS Ready:', emailServiceInitialized);
        console.log('🔍 Contact form exists:', !!document.getElementById('contactForm'));
    };
});