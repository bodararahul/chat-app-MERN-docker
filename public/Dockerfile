# Use an official Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory into the container
COPY . .

# Expose the port the React app runs on
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
