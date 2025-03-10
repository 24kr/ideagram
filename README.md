# Ideagram - Social Media App

Ideagram is a modern social media application built with **React Native**, **Clerk** for authentication, and **Convex** for the database. It allows users to create posts, follow others, like and comment on posts, and save bookmarks. The app features a clean and intuitive UI with infinite scrolling, real-time updates, and seamless navigation.

---

## Features

- **Authentication**: Secure user authentication powered by **Clerk**.
- **Database**: Real-time database management using **Convex**.
- **Feed**: Infinite scroll feed with posts (images and videos).
- **Notifications**: Real-time notifications for likes, comments, and follows.
- **Bookmarks**: Save and organize your favorite posts.
- **Profile**: Edit your profile, view your posts, and manage followers.
- **Responsive Design**: Optimized for both mobile and tablet devices.

---

## Technologies Used

- **Frontend**: React Native, Expo
- **Authentication**: Clerk
- **Database**: Convex
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **Clerk Account**: Sign up at [Clerk](https://clerk.dev/) and create a project.
- **Convex Account**: Sign up at [Convex](https://convex.dev/) and create a database.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/ideagram.git
   cd ideagram
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CONVEX_URL=your_convex_url
   ```

   Replace `your_clerk_publishable_key` and `your_convex_url` with your actual Clerk and Convex credentials.

4. **Start Convex**

   Run the following command to start the Convex development server:

   ```bash
   npx convex dev
   ```

5. **Run the App**

   Start the Expo development server:

   ```bash
   npx expo start
   ```

   Scan the QR code with the Expo Go app (available on iOS and Android) to run the app on your device.

---


## Authentication with Clerk

Clerk handles user authentication in this app. To set up Clerk:

1. Sign up at [Clerk](https://clerk.dev/) and create a project.
2. Add your `CLERK_PUBLISHABLE_KEY` to the `.env` file.
3. Configure authentication providers (e.g., Google, GitHub) in the Clerk dashboard.

---

## Database with Convex

Convex powers the real-time database for this app. To set up Convex:

1. Sign up at [Convex](https://convex.dev/) and create a database.
2. Add your `CONVEX_URL` to the `.env` file.
3. Define your database schema and functions in the `convex/` directory.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

