# Adventure Motorbike Rental Web Application

This is a web application for renting adventure motorbikes, built with [Next.js](https://nextjs.org/). The application provides a user-friendly interface for browsing, selecting, and renting motorbikes for adventure enthusiasts.

## Features

- **Browse Motorbikes:** View a list of available adventure motorbikes with detailed descriptions and images.
- **Search and Filters:** Search for motorbikes by brand.
- **Real-Time Availability:** Check the availability of motorbikes in real time.
- **Booking System:** Reserve and book motorbikes online with a seamless checkout process.
- **User Accounts:** Register and manage user profiles with rental history.
- **Responsive Design:** Optimized for desktops, tablets, and mobile devices.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for responsive and modern design
- **State Management:** [React Context API](https://reactjs.org/docs/context.html)
- **Database:** [Supabase](https://supabase.com/)
- **Authentication:** [Auth.js](https://authjs.dev/) for user authentication
- **Deployment:** [Vercel](https://vercel.com/)

## Installation

Follow the steps below to set up and run the application locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sinissto/rent-adventure.git
   cd rent-adventure
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project and add the required environment variables:
   ```env
   SUPABASE_URL=your_database_url
   SUPABASE_KEY=your_database_api_key
   
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   AUTH_GOOGLE_ID=your_google_id
   AUTH_GOOGLE_SECRET=your_google_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Folder Structure

```
/rent-adventure
├── app                  # Next.js App Ruter
    ├── (db_data)        # Sample database data and uploader
    ├── components       # Reusable React components
    ├── _lib             # Server actions, auth, db data mutations, db setup
    ├── styles           # Global and component-specific styles
    ├── about            # About page
    ├── account          # Account page, user profile and reservations
    ├── api              # Google auth configurations
    ├── login            # Login page
    └── motorbikes       # Motorbikes list and individual view and reservation
├── public               # Public assets (images, icons, etc.)
├── .env                 # Environment variables
├── middleware.js        # Auth middleware configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.mjs   # Part of Tailwind configuration
├── README.md            # Project documentation
└── tailwind.config.js   # Tailwind configuration
```


## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [sinisha.stojanovic@gmail.com](mailto:sinisha.stojanovic@gmail.com).
