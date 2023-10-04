function sendEmail() {
    const message = document.getElementById('message').value;
  
    // Replace 'your-email@example.com' with your actual email address
    const toEmail = 'your-email@example.com';
  
    // Basic email sending using mailto (replace with a server-side solution in production)
    window.location.href = `mailto:${toEmail}?subject=Job Application&body=${message}`;
  }
  