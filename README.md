# Arijit Dey - Portfolio Website

A modern, responsive portfolio website with contact form functionality.

## 🚀 Features

- **Modern Design**: Glass morphism effects, gradients, and smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistence
- **Contact Form**: Working contact form with email notifications
- **Resume Download**: Direct download functionality
- **Fast Performance**: Optimized for speed and accessibility

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **For development**
   ```bash
   npm run dev
   ```

## 📧 Email Configuration

To enable the contact form:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update .env file** with your email and app password

## 🌐 Deployment

### Local Development
```bash
npm start
# Visit http://localhost:5000
```

### Production Deployment
The app is ready for deployment on platforms like:
- **Heroku**
- **Vercel**
- **Netlify**
- **Railway**
- **DigitalOcean**

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── server.js           # Express server
├── package.json        # Dependencies
├── .env               # Environment variables
├── public/            # Static assets
│   ├── front.png      # Profile images
│   ├── second.jpg
│   ├── Cu.jpg         # Education images
│   ├── school.jpg
│   ├── *.jpg          # Project images
│   └── resume.htm.pdf # Resume file
└── README.md          # This file
```

## 🔧 API Endpoints

- **GET /** - Serve portfolio website
- **POST /contact** - Handle contact form submissions
- **GET /health** - Server health check
- **GET /api/*** - 404 handler for API routes

## 📱 Contact Form

The contact form includes:
- **Name** (required)
- **Email** (required)
- **Phone** (required)
- **Message** (required)

Form submissions are sent via email to the configured address.

## 🎨 Customization

### Colors
The design uses CSS custom properties that can be easily modified in the Tailwind config:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Success: `#10b981` (Green)

### Content
Update the following sections in `index.html`:
- Personal information in the About section
- Skills and technologies
- Education details
- Project descriptions and links
- Contact information

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Arijit Dey**
- Email: deyarijitag7@gmail.com
- Location: Kolkata, India
- Specialization: Cloud Computing & Software Development

---

Built with ❤️ using modern web technologies.
