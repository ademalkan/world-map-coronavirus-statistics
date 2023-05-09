# Base image
FROM node:latest

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json files to the app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the app directory
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
