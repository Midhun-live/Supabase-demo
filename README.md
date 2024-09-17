# React.js Student Management System

This project is a React.js application integrated with Supabase for managing student data. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on student records.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contact](#contact)

## Features

- **Create**: Add new student records.
- **Read**: View the list of students.
- **Update**: Edit existing student records.
- **Delete**: Remove student records.
- **Supabase Integration**: Utilizes Supabase for backend operations.

## Tech Stack

- **React.js**: JavaScript library for building user interfaces.
- **Supabase**: Open-source Firebase alternative for backend services and database management.
- **Tailwind CSS** (Optional): For styling (if used in your project).
- **Axios** or **Fetch API**: For making HTTP requests to Supabase.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Midhun-live/supabase-demo.git
2. **Navigate to the project directory:**

   ```bash
   cd personal-portfolio

3. **Install dependencies:**

   ```bash
   npm install

4. **Run the development server:**

   ```bash
   npm start

5. **Open your browser and navigate to:**

   ```bash
   [npm start](http://localhost:3000)

## Usage

- **Create a Student**: Use the form provided to add new student records.
- **View Students**: View the list of students from the dashboard.
- **Update a Student**: Edit student information using the edit button next to each record.
- **Delete a Student**: Remove student records using the delete button.

## Configuration

- Set Up Supabase:
  - Create a Supabase account and project at Supabase.
  - Set up a database table for students with appropriate columns (e.g., id, name, deparment).
- Get Supabase Credentials:
  - Obtain your SUPABASE_URL and SUPABASE_ANON_KEY from the Supabase dashboard.
- Configure Environment Variables:
  Create a .env file in the root of your project with the following content:
    
  ```bash
  REACT_APP_SUPABASE_URL=your-supabase-url
  REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
  //Replace your-supabase-url and your-supabase-anon-key with your actual Supabase credentials.


- Supabase Client Setup:
 Ensure you have a supabaseClient.js file in your src directory with the following setup:

   ```bash
   // src/supabaseClient.js
   
   import { createClient } from '@supabase/supabase-js';
   
   const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
   const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
   const supabase = createClient(supabaseUrl, supabaseKey);
   
   export default supabase;

## Contact

- **Email**: midhunchakkaravarthy07@gmail.com
- **GitHub**: Midhun-live
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/midhun-chakkaravarthy/)
- **Website**: [Student-List](https://supabase-demo-s1u2.vercel.app/)

