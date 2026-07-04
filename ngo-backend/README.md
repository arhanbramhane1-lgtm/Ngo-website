# UIYF Website Backend

This backend saves volunteer signups from your website into a MongoDB database,
and gives you an admin page to view/manage them.

## What's inside
- `index.js` — main server file
- `routes/volunteers.js` — API endpoints (save, list, delete volunteers)
- `models/Volunteer.js` — defines what a volunteer record looks like in the database
- `public/index.html` — your website (form now connects to the backend)
- `public/admin.html` — admin page to view all signups
- `.env` — configuration (database connection string, port)

## How to run this on your computer

### 1. Install Node.js
Download and install from https://nodejs.org (LTS version) if you don't have it.

### 2. Install MongoDB
Download and install MongoDB Community Server from:
https://www.mongodb.com/try/download/community
(Or use a free cloud database at https://www.mongodb.com/cloud/atlas — see step 4 below)

Make sure MongoDB is running locally (it usually starts automatically as a service
after install, on port 27017).

### 3. Install project dependencies
Open a terminal in this folder and run:
```
npm install
```

### 4. (Optional) Use MongoDB Atlas instead of a local database
If you don't want to install MongoDB locally, create a free cluster at
https://www.mongodb.com/cloud/atlas, get your connection string, and paste it
into the `.env` file, replacing the MONGO_URI value.

### 5. Start the server
```
node index.js
```
You should see:
```
✅ Connected to MongoDB
🚀 Server running at http://localhost:3000
```

### 6. View your site and admin page
- Website: http://localhost:3000
- Admin page (see all volunteer signups): http://localhost:3000/admin.html

## Notes
- Fill out the volunteer form on your site — it will now actually save to the database.
- Open the admin page to see everyone who signed up, and delete records if needed.
- When you're ready to put this online for real, you can deploy it to a service
  like Render or Railway (free tiers available), and use MongoDB Atlas as the
  database so everything is accessible over the internet, not just your computer.
