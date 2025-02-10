# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Install Expo CLI (if needed) - depends on your setup
RUN npm install -g expo-cli
RUN expo cache:clear

# If you're using Expo prebuild
#RUN expo prebuild

# If you're using Expo start
CMD ["expo", "start", "--dev-client"]