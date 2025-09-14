# 🩺 CareHub – Doctor Appointment & Video Consultation Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://care-hub-seven.vercel.app/)  
[![License](https://img.shields.io/badge/License-MIT-green)]()  

**CareHub** is a **full-stack doctor consultation platform** built with **React 19**, **Next.js 15**, **Tailwind CSS**, **NeonDB**, **Prisma**, **Clerk Authentication**, **Vonage Video API**, and **Shadcn UI**. It allows users to **book appointments, consult via video call, and manage their medical journey securely**.  


Designed for a seamless and secure healthcare experience, CareHub connects patients and doctors anytime, anywhere.


> ⭐ Star this repository to help the project grow and attract contributors!
> 
[![OSCI-Project-Banner.png](https://i.postimg.cc/76mJvBmF/OSCI-Project-Banner.png)](https://postimg.cc/8JfzMb84)
---

## 🚀 Live Demo

👉 [CareHub Live](https://care-hub-seven.vercel.app/)

---

## 📸 Screenshots

**Homepage:**  
![Homepage](https://github.com/amitkumardemo/CareHub/blob/master/Screenshot%202025-06-10%20131341.png)

**Video Consultation Screen (optional example):**  
*(Add screenshot if available)*

---

## ✨ Features

- 🧑‍⚕️ Browse and consult **verified doctors**
- 📅 Book appointments with **real-time availability**
- 📹 Secure **high-quality video consultations** (Vonage)
- 💳 Credit-based subscription system (**2 credits = 1 consult**)
- 🔐 Secure **login/register** using Clerk Authentication
- 📄 Manage **past consultations** and **doctor notes**
- 📱 Fully **responsive** and **mobile-friendly UI**
- 💡 Built with **modern components** using Shadcn UI

---

## 🛠 Tech Stack

| Category            | Technology                      |
|---------------------|---------------------------------|
| Frontend            | React 19, Next.js 15, Tailwind CSS |
| UI Components       | Shadcn UI                        |
| Backend             | Next.js App Router, Prisma ORM   |
| Database            | NeonDB (PostgreSQL)             |
| Authentication      | Clerk Authentication            |
| Video Calls         | Vonage Video API                |
| Styling             | Tailwind CSS                    |
| Deployment          | Vercel (recommended)            |

---



## 🧑‍💻 Getting Started for Contributors

We welcome contributions! Follow the steps below:

1. **Fork the Repository**  
   Click the "Fork" button at the top right of the repo.

2. **Clone the Forked Repository**
```bash
git clone https://github.com/<your-username>/CareHub.git
cd CareHub
```
3. **Create a Branch**
```bash
git checkout -b feature/your-feature-name
```
4.**Install Dependencies**
```bash
npm install
```
5.**Configure Environment Variables**
Create a .env file in the root and add:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
VONAGE_API_KEY=your_vonage_api_key
VONAGE_API_SECRET=your_vonage_api_secret
DATABASE_URL=your_neondb_connection_string
```
6.**Run the Development Server**
```bash
npm run dev
```
7.**Make Changes & Commit**
```bash
git add .
git commit -m "Add feature/fix: description"
git push origin feature/your-feature-name
```


## 🤝 Contributors
<a href="https://github.com/amitkumardemo/CareHub/graphs/contributors"> <img src="https://contrib.rocks/image?repo=amitkumardemo/CareHub" /> </a>

## 🛡️ License

This project is licensed under the MIT License. See [LICENSE](.github/LICENSE) for details.








