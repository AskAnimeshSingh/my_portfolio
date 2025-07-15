# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality on your portfolio website.

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or "Custom SMTP"
4. Connect your Gmail account (askanimeshsingh@gmail.com)
5. Note down the **Service ID** (starts with "service_")

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** Portfolio Contact Form

**Subject:** New message from {{from_name}} - {{subject}}

**Email Content:**
```
Hello Animesh,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID** (starts with "template_")

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update the Contact Form
Replace the placeholder values in `components/contact.tsx`:

```javascript
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_xxxxxxx" // Your service ID
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx" // Your template ID  
const EMAILJS_PUBLIC_KEY = "public_key_xxxxxxx" // Your public key
```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (askanimeshsingh@gmail.com) for the test message

## 🔧 Configuration Details

### EmailJS Free Tier Limits:
- ✅ 200 emails per month
- ✅ Gmail integration
- ✅ Custom templates
- ✅ Spam protection

### Security Features:
- ✅ Public key authentication
- ✅ Rate limiting
- ✅ Spam filtering
- ✅ Email validation

## 🎯 Features Implemented

### ✅ Form Validation
- Required field validation
- Email format validation
- Real-time feedback

### ✅ User Experience
- Loading states during submission
- Success/error messages
- Form reset after successful submission
- Disabled form during submission

### ✅ Email Template
- Professional email format
- All form data included
- Clear sender information
- Automatic subject line

### ✅ Error Handling
- Network error handling
- EmailJS error handling
- User-friendly error messages
- Fallback options

## 🚨 Important Notes

1. **Environment Variables**: For production, consider moving the EmailJS credentials to environment variables
2. **Spam Protection**: EmailJS includes built-in spam protection
3. **Rate Limiting**: Free tier has rate limits to prevent abuse
4. **Email Delivery**: Emails are typically delivered within seconds

## 🔄 Troubleshooting

### Common Issues:
1. **"Service not found"**: Check your Service ID
2. **"Template not found"**: Check your Template ID  
3. **"Invalid public key"**: Check your Public Key
4. **"Email not received"**: Check spam folder, verify Gmail connection

### Debug Steps:
1. Check browser console for errors
2. Verify all credentials are correct
3. Test with EmailJS dashboard
4. Check email service connection

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation
2. Verify all credentials are correct
3. Test the service in EmailJS dashboard
4. Contact EmailJS support if needed

---

**Your contact form is now ready to send emails to askanimeshsingh@gmail.com! 🎉** 