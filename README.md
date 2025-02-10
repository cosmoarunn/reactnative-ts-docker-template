**## Template for React Native - Typescript container app**




**### \[\<img height="20" title="Buy Me a Coffee!" src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" />]\(**<u>https://buymeacoffee.com/cosmoarunn</u>**)**




**### App Architecture and Development Summary**




Summary & discussion about designing and developing  the app.




**\*\*I. Core Architecture:\*\***




\* **\*\*Frontend (React Native):\*\***

&#x20; \* State Management: Redux or Zustand

&#x20; \* Navigation: React Navigation

&#x20; \* UI Library: React Native Paper, React Native Elements

&#x20; \* API Calls: \`fetch\` or \`axios\`

&#x20; \* Background Tasks: React Native Background Actions

\* **\*\*Backend (Node.js/Express.js):\*\***

&#x20; \* API: RESTful API

&#x20; \* Authentication: JWT

&#x20; \* Database: PostgreSQL (recommended) or SQLite (for prototyping)

&#x20; \* Server Management: \`node-ssh\` or cloud provider SDK

&#x20; \* Task Queue: Redis or RabbitMQ

&#x20; \* Caching: Redis

\* **\*\*Server Infrastructure:\*\***

&#x20; \* Cloud Provider: AWS, Google Cloud, Azure

&#x20; \* Server Orchestration: Kubernetes or Docker Swarm

&#x20; \* Virtual Machines/Containers: Docker

&#x20; \* Server Templates

&#x20; \* Load Balancing




**\*\*II. Key Features:\*\***




\* User Authentication

\* Server Management (listing, provisioning, control, details, access)

\* Billing (hourly, payment gateway integration, invoices)

\* Notifications (server status, billing)

\* Support (in-app, FAQ)




**\*\*III. Technology Stack:\*\***




\* Frontend: React Native, Redux/Zustand, React Navigation, React Native Paper/Elements

\* Backend: Node.js, Express.js, PostgreSQL/SQLite, Redis, RabbitMQ/Redis, \`node-ssh\`/Cloud Provider SDK

\* Server Infrastructure: AWS/Google Cloud/Azure, Kubernetes/Docker Swarm, Docker




**\*\*IV. Development Process:\*\***




1\. Backend API development

2\. Frontend development

3\. Server infrastructure setup

4\. Testing

5\. Deployment




**\*\*V. Development Workflow and Tips:\*\***




\* Use workspaces in \`package.json\` for monorepo structure.

\* Configure \`baseUrl\` and \`paths\` in \`tsconfig.json\` after setting up workspaces.

\* Use a comprehensive \`.gitignore\` file.

\* Choose between SQLite and PostgreSQL based on your application's needs (PostgreSQL recommended for production).

\* Docker tips (commands, workflow, troubleshooting).




**\*\*VI. Key Improvements and Explanations:\*\***




Throughout the development, several key improvements has been made to the code and configuration, including:




\* Correcting script injection in the Vite plugin.

\* Ensuring consistent filename casing.

\* Improving the \`LoginScreen\` component and tests, including navigation and Redux integration.

\* Creating \`DashboardScreen\` component and tests.

\* Setting up Sequelize models for PostgreSQL.

\* Configuring Docker Compose for SQLite and PostgreSQL.

\* Using workspaces for monorepo management.

\* Creating a robust \`.gitignore\` file.




**\*\*VII. Misc\*\***

Use workspaces in package.json for monorepo structure.

Configure baseUrl and paths in tsconfig.json after setting up workspaces.

Use a comprehensive .gitignore file.

Choose between SQLite and PostgreSQL based on your application's needs (PostgreSQL recommended for production).




**\*\*VIII. Running\*\***

#### Building

Install packages



```
yarn
```

run dev server



```
#npm
npm run dev

#yarn
yarn dev

```



iOS&#x20;



```
#npm 
npm run ios

#yarn
yarn ios

#pod  (updates)
cd ios
pod install
```

android



```
#npm
npm run android

#yarn
yarn android
```



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