## Template for React Native - Typescript container app

### [<img height="20" title="Buy Me a Coffee!" src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" />](https://buymeacoffee.com/cosmoarunn)

### App Architecture and Development Summary

Summary & discussion about designing and developing  the app.

**I. Core Architecture:**

* **Frontend (React Native):**
  * State Management: Redux or Zustand
  * Navigation: React Navigation
  * UI Library: React Native Paper, React Native Elements
  * API Calls: `fetch` or `axios`
  * Background Tasks: React Native Background Actions
* **Backend (Node.js/Express.js):**
  * API: RESTful API
  * Authentication: JWT
  * Database: PostgreSQL (recommended) or SQLite (for prototyping)
  * Server Management: `node-ssh` or cloud provider SDK
  * Task Queue: Redis or RabbitMQ
  * Caching: Redis
* **Server Infrastructure:**
  * Cloud Provider: AWS, Google Cloud, Azure
  * Server Orchestration: Kubernetes or Docker Swarm
  * Virtual Machines/Containers: Docker
  * Server Templates
  * Load Balancing

**II. Key Features:**

* User Authentication
* Server Management (listing, provisioning, control, details, access)
* Billing (hourly, payment gateway integration, invoices)
* Notifications (server status, billing)
* Support (in-app, FAQ)

**III. Technology Stack:**

* Frontend: React Native, Redux/Zustand, React Navigation, React Native Paper/Elements
* Backend: Node.js, Express.js, PostgreSQL/SQLite, Redis, RabbitMQ/Redis, `node-ssh`/Cloud Provider SDK
* Server Infrastructure: AWS/Google Cloud/Azure, Kubernetes/Docker Swarm, Docker

**IV. Development Process:**

1. Backend API development
2. Frontend development
3. Server infrastructure setup
4. Testing
5. Deployment

**V. Development Workflow and Tips:**

* Use workspaces in `package.json` for monorepo structure.
* Configure `baseUrl` and `paths` in `tsconfig.json` after setting up workspaces.
* Use a comprehensive `.gitignore` file.
* Choose between SQLite and PostgreSQL based on your application's needs (PostgreSQL recommended for production).
* Docker tips (commands, workflow, troubleshooting).

**VI. Key Improvements and Explanations:**

Throughout the development, several key improvements has been made to the code and configuration, including:

* Correcting script injection in the Vite plugin.
* Ensuring consistent filename casing.
* Improving the `LoginScreen` component and tests, including navigation and Redux integration.
* Creating `DashboardScreen` component and tests.
* Setting up Sequelize models for PostgreSQL.
* Configuring Docker Compose for SQLite and PostgreSQL.
* Using workspaces for monorepo management.
* Creating a robust `.gitignore` file.