# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]
