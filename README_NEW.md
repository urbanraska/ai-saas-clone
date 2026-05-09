# AI SaaS Platform

A modern full-stack SaaS application built with Next.js that provides AI-powered tools for generating conversations, code, images, music, and videos.

## 🚀 Features

- **Conversation AI** - AI-powered conversation generation and assistance
- **Code Generation** - Intelligent code generation and assistance
- **Image Generation** - AI-powered image creation and manipulation
- **Music Generation** - Generate music compositions with AI
- **Video Generation** - Create videos with AI assistance
- **Authentication** - Secure user authentication with Clerk
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Real-time Chat Support** - Integrated Crisp chat widget
- **User Dashboard** - Personalized user experience with sidebar navigation

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14+ (React framework)
- TypeScript
- Tailwind CSS (styling)
- Shadcn UI (component library)
- React Hook Form (form handling)

**Backend:**
- Next.js API routes
- Node.js runtime

**Authentication & Hosting:**
- Clerk (authentication)
- Vercel (recommended deployment)

**Additional Services:**
- Crisp (customer support widget)

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Environment variables configured (see setup)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables in `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CRISP_WEBSITE_ID` (optional, for Crisp chat)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
ai-saas/
├── app/
│   ├── (auth)/ - Authentication pages (sign-in, sign-up)
│   ├── (dashboard)/ - Main application dashboard
│   │   ├── (routes)/
│   │   │   ├── code/ - Code generation
│   │   │   ├── conversation/ - Conversation AI
│   │   │   ├── image/ - Image generation
│   │   │   ├── music/ - Music generation
│   │   │   ├── video/ - Video generation
│   │   │   └── dashboard/ - Main dashboard
│   ├── (landing)/ - Public landing page
│   ├── api/ - API routes for backend logic
│   └── globals.css - Global styles
├── components/
│   ├── ui/ - Reusable UI components (buttons, cards, forms, etc.)
│   ├── Sidebar.tsx - Navigation sidebar
│   ├── Navbar.tsx - Top navigation bar
│   ├── bot-avatar.tsx - Bot avatar component
│   ├── user-avatar.tsx - User avatar component
│   └── ... other components
├── lib/
│   └── utils.ts - Utility functions
├── public/ - Static assets
├── package.json - Project dependencies
├── tailwind.config.ts - Tailwind CSS configuration
├── tsconfig.json - TypeScript configuration
└── next.config.js - Next.js configuration
```

## 🔌 API Routes

The application includes the following API endpoints:

- `POST /api/conversation` - Handle conversation requests
- `POST /api/code` - Handle code generation requests
- `POST /api/image` - Handle image generation requests
- `POST /api/music` - Handle music generation requests
- `POST /api/video` - Handle video generation requests

## 🎨 Components Overview

### Layout Components
- **Sidebar.tsx** - Main navigation sidebar with links to different features
- **Navbar.tsx** - Top navigation bar with user menu
- **Mobile Sidebar** - Mobile-responsive navigation

### Feature Components
- **Heading.tsx** - Consistent heading styling
- **Empty.tsx** - Empty state display
- **Loader.tsx** - Loading indicator
- **Bot/User Avatar** - Avatar displays for conversations

### Providers
- **toaster-provider.tsx** - Toast notification provider
- **crisp-provider.tsx** - Crisp chat widget provider

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with a single click

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- AWS
- Google Cloud Platform
- DigitalOcean
- etc.

## 📝 Environment Variables Example

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_secret_here
NEXT_PUBLIC_CRISP_WEBSITE_ID=your_website_id_here
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please use the Crisp chat widget integrated into the application or contact the development team.

## 🔮 Future Enhancements

- [ ] Advanced user analytics dashboard
- [ ] API key management for third-party integrations
- [ ] Subscription tiers and billing
- [ ] More AI model options
- [ ] Export/download generated content
- [ ] Social sharing features
- [ ] Usage statistics and history

---

**Built with ❤️ using Next.js and modern web technologies**
