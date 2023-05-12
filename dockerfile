# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port (adjust if necessary)
EXPOSE 3000

# Command to start the application
CMD [ "npm", "run", "start:prod" ]