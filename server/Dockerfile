# Use an official Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory into the container
COPY . .

# Expose the port the Node.js server runs on
EXPOSE 5000

# Command to start the Node.js server
CMD ["npm", "start"]
