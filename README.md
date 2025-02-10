## Template for React Native - Typescript container app

**App Architecture and Development Summary**

Summary & discussion about designing and developing  the app.

**I. Core Architecture:**

&#x20;	**Frontend (React Native):**

&#x20; 		State Management: Redux or Zustand

&#x20; 		Navigation: React Navigation

&#x20; 		UI Library: React Native Paper, React Native Elements

&#x20; 		API Calls: \`fetch\` or \`axios\`

&#x20; 		Background Tasks: React Native Background Actions

**Backend (Node.js/Express.js):**

&#x20; 		API: RESTful API

&#x20; 		Authentication: JWT

&#x20; 		Database: PostgreSQL (recommended) or SQLite (for prototyping)

&#x20; 		Server Management: \`node-ssh\` or cloud provider SDK

&#x20; 		Task Queue: Redis or RabbitMQ

&#x20; 		Caching: Redis

&#x9;**Server Infrastructure:\*\***

&#x20;  	Cloud Provider: AWS, Google Cloud, Azure

&#x20; 	Server Orchestration: Kubernetes or Docker Swarm

&#x20; 	Virtual Machines/Containers: Docker

&#x20;	Server Templates

Load Balancing

**II. Key Features:**

User Authentication

Server Management (listing, provisioning, control, details, access)

Billing (hourly, payment gateway integration, invoices)

Notifications (server status, billing)

Support (in-app, FAQ)

**III. Technology Stack:**

Frontend: React Native, Redux/Zustand, React Navigation, React Native Paper/Elements

Backend: Node.js, Express.js, PostgreSQL/SQLite, Redis, RabbitMQ/Redis, \`node-ssh\`/Cloud Provider SDK

Server Infrastructure: AWS/Google Cloud/Azure, Kubernetes/Docker Swarm, Docker

**IV. Development Process:**

1\. Backend API development

2\. Frontend development

3\. Server infrastructure setup

4\. Testing

5\. Deployment

**V. Development Workflow and Tips:**

Use workspaces in \`package.json\` for monorepo structure.

Configure \`baseUrl\` and \`paths\` in \`tsconfig.json\` after setting up workspaces.

Use a comprehensive \`.gitignore\` file.

Choose between SQLite and PostgreSQL based on your application's needs (PostgreSQL recommended for production).

Docker tips (commands, workflow, troubleshooting).

**VI. Key Improvements and Explanations:**

Throughout the development, several key improvements has been made to the code and configuration, including:

Correcting script injection in the Vite plugin.

Ensuring consistent filename casing.

Improving the \`LoginScreen\` component and tests, including navigation and Redux integration.

Creating \`DashboardScreen\` component and tests.

Setting up Sequelize models for PostgreSQL.

Configuring Docker Compose for SQLite and PostgreSQL.

Using workspaces for monorepo management.

Creating a robust \`.gitignore\` file.

**VII. Misc**

Use workspaces in package.json for monorepo structure.

Configure baseUrl and paths in tsconfig.json after setting up workspaces.

Use a comprehensive .gitignore file.

Choose between SQLite and PostgreSQL based on your application's needs (PostgreSQL recommended for production).

**VIII.  Building & Running**

#### Install packages

```
npm install
#or
yarn
```

#### dev server

```
#npm
npm run dev

#yarn
yarn dev

```

build

```
#npm
npm run build

#yarn
yarn build

```

#### iOS&#x20;

```
#npm 
npm run ios

#yarn
yarn ios

#pod  (updates)
cd ios
pod install
```

#### android

```
#npm
npm run android

#yarn
yarn android
```

Using Expo or bare React native

1. **Build the App:** You need to build the Android app before you can run it on a device or emulator.
   * **Expo (Managed workflow):**
     Bash
     expo prebuild
     `npx react-native run-android # or yarn android`
   * **Bare React Native:**
     Bash
     `npx react-native run-android # or yarn android`
2. **Connect Device or Start Emulator:**
   * **Physical Device:** If you're using a physical Android device, make sure it's connected to your computer via USB and that USB debugging is enabled on the device. You might also need to install the appropriate USB drivers for your device on your computer.
   * **Emulator:** If you're using an Android emulator, make sure it's running. You can start an emulator from Android Studio's AVD Manager or from the command line.
3. **Run the App:** After building the app and connecting your device or starting the emulator, run the app using:
   Bash
   `npx react-native run-android # or yarn android`This command will install the app on the device/emulator and then launch it.

#### Docker

```
docker-compose up -d
docker-compose down
docker-compose ps
docker-compose logs <service_name>
docker-compose exec <service_name> bash
docker-compose stop/start/restart <service_name>
docker-compose build
docker-compose config
docker-compose pull
```

#### Metro bundler cache

Sometimes, Metro's cache can get out of sync. Try clearing the cache

```
npx react-native start --reset-cache  
# or
 yarn start --reset-cache


```

**Clean Project or Clean install:**

```
#clean project:
npm run clean  or yarn clean
#clean and install:
yarn clean-install or yarn clean-install
```

[<img height="20" title="Buy Me a Coffee!" src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" />](**\<u>https://buymeacoffee.com/cosmoarunn\</u>**)