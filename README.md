# DeeIgbo Translator - Frontend

Welcome to **DeeIgbo**, a web-based Igbo language translator powered by Hugging Face models. This is the **frontend** of the application, built with modern web technologies for a seamless user experience.

## 🏫 Class Group Project
This project was developed as part of a **class group project**, with **Igboanugo Chidera Goodness** as the software engineer.

## 🌟 Features
- Translate text from **Igbo to English**
- **Text-to-Speech (TTS)** for Igbo and English
- **Speech-to-Text (STT)** for English
- **Share** translated text via copy or social platforms
- **Copy** translated text with a single click
- **Responsive design** for all devices
- Simple and intuitive UI
- Fast response time
- **Requires an active internet connection**

## 🚀 Live Demo
🔗 [DeeIgbo Translator](https://deeigbo.vercel.app/)

## 📦 Technologies Used
- **Next.js (TypeScript)** - Frontend framework
- **Tailwind CSS** - Styling
- **Material UI** - UI components
- **Fetch API** - HTTP requests to backend
- **Hugging Face API** - Machine translation
- **Firebase** - Feedback storage

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ChidexWorld/deeigbo.git
cd deeigbo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
The app should now be running on `http://localhost:3000/`.

## 🖥️ Backend
This frontend interacts with an Express.js backend for translation processing.  
Backend Repository: [deeigbo-server](https://github.com/ChidexWorld/deeigbo-server)

### 🔗 API Endpoints
The frontend interacts with the following backend API endpoints:
- `POST /translate` - Translate Igbo text to English
- `POST /tts` - Convert text to speech (Igbo & English)
- `POST /stt` - Convert speech to text (English)

## 🛠️ Usage
- Enter text in **Igbo**
- Click **Translate**
- View the translated text in **English**
- Use **TTS** to listen to translations
- Use **STT** to input English via speech
- Copy or share the translated text

## 🌍 Environment Variables
Create a `.env` file in the project root and add:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

NEXT_PUBLIC_API_URL=https://deeigbo-server.onrender.com
```
Replace `your_*` values with the actual credentials from your Firebase and backend setup.

## 🌐 Deployment
### Deploy on Vercel
1. Push your changes to GitHub
2. Create a new project on [Vercel](https://vercel.com/)
3. Connect your GitHub repository
4. Add the required environment variables in Vercel settings
5. Deploy and share your live project link

## 🤝 Contributing
1. **Fork** the repository
2. **Create** a new branch (`feature-name`)
3. **Commit** changes (`git commit -m 'Added new feature'`)
4. **Push** to GitHub (`git push origin feature-name`)
5. **Create** a Pull Request

## 📜 License
This project is **MIT licensed**. Feel free to modify and share!

## 🙌 Credits
- **Hugging Face** - For providing the translation model
- **Firebase** - For handling user feedback storage

---
💡 **Need help?** Open an issue in the repo or reach out!
