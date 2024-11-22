# 📰 MERN_NEWS 📡  
**Real-time News Management System using the MERN stack**  

Welcome to **MERN_NEWS**, a cutting-edge news management platform where you can view, archive, and manage news articles in real-time! This responsive web app ensures instant synchronization of changes across users via **Socket.IO**, making it the ultimate solution for live news updates. 🚀

---

## 🌟 Features  

### 🔥 Real-Time Updates
- Seamless live updates with **Socket.IO**: 
  - New articles automatically appear on the **News** view.  
  - Archived or deleted articles reflect instantly across all connected users.

### 🗞 Two Views:
1. **News View**:  
   - Displays all unarchived news.  
   - Archive any article to move it to the "Archived" section.  
2. **Archived View**:  
   - View all archived articles.  
   - Options to:
     - **Unarchive** to bring it back to the main list.  
     - **Delete** to permanently remove it from the database.  

### 🖥 Fully Responsive
- Designed with **TailwindCSS**, ensuring the app works flawlessly across all devices. 📱💻  

---

## 💻 Tech Stack  

**Backend**  
- ⚡ **Node.js**: The server backbone.
- - **TypeScript (TS)**: Adds static typing, improving code maintainability and reducing runtime errors.
- 🌐 **Express.js**: API creation with fast routing.  
- 📦 **Socket.IO**: Real-time communication between server and clients.  
- ✅ **Express-Validator & Zod**: Validation for secure and reliable API inputs.  

**Frontend**  
- ⚛️ **React.js**: Interactive and reusable UI components.
- - **TypeScript (TS)**: Adds static typing, improving code maintainability and reducing runtime errors.
- 🧭 **React Router DOM**: Seamless navigation between views.  
- 🌬 **TailwindCSS**: Stunning and responsive design with minimal effort.  

**State Management**  
- 🐻 **Zustand**: Lightweight yet powerful global state management.  

**Database & Networking**  
- 📊 **MongoDB**: Storing articles with efficiency.  
- 📡 **Axios**: Making API calls seamless and reliable.  

---

## 🛠 How It Works  

1. **Live Updates**:  
   - All updates (adding, archiving, unarchiving, or deleting news) are broadcast live to all users connected via **Socket.IO**.

2. **Validation & Security**:  
   - API endpoints are protected with robust validations from **Express-Validator** and **Zod**.  

3. **Dynamic State**:  
   - State is handled using **Zustand**, ensuring smooth and reactive updates across the application.  

---

## 🚀 Installation  

### Backend Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/news_MERN.git
   cd server
   ```
   2. Install
   ```bash
   npm install
   ```
   3. Run the server
     ```bash
   npm run dev
   ```

### Frontend Setup  
1. Navigate to the client folder:  
   ```bash
   git clone https://github.com/your-username/news_MERN.git
   cd client
   ```
   2. Install dependencies
   ```bash
   npm install
   ```
   3. Run the server
     ```bash
   npm run dev
   ```
4. Access the app at http://localhost:5173
