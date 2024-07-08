# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Node.js
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy the built React app from the build stage
COPY --from=build /app/build /app/build

# Install serve to serve the application
RUN npm install -g serve

# Exposing in port 3000
EXPOSE 5000

# Start the React app
CMD ["serve", "-s", "build", "-l", "5000"]
