# Developer Guide for Lumos ERP Backend Framework

This guide details the architecture, design principles, and development workflow for the Lumos ERP Backend Framework.

---

## 1. Introduction

Lumos ERP Backend is a modular and extensible framework designed to help you build robust ERP systems in TypeScript. Built with TRPC for type-safe APIs and Express for minimal server setup, the framework leverages a clean architecture and the repository pattern to ensure separation of concerns and ease of extension.

---

## 2. Project Structure

```
lumos-erp-backend/
├── src/
│   ├── cli/                  # CLI scripts for scaffolding new modules (if added)
│   ├── core/                 # Core server initialization and TRPC router setup
│   │   └── trpc.ts           # Setup of TRPC (router & procedure)
│   ├── modules/              # Individual ERP modules
│   │   ├── health.ts         # Health check module (sample)
│   │   └── ai.ts             # AI service module (sample)
│   ├── repositories/         # Repository classes for data access via sql.js
│   │   └── baseRepository.ts # Base repository providing generic CRUD
│   ├── services/             # Shared business logic and service integrations
│   │   └── aiService.ts      # AI processing service stub
│   └── types/                # Shared TypeScript types and interfaces
│       └── sqljs.d.ts        # Type declarations for sql.js
├── package.json              # Project configuration and dependencies
├── tsconfig.json             # TypeScript compiler configuration
├── README.md                 # Project overview and quick start guide
└── DEVELOPER_GUIDE.md        # This guide
```

---

## 3. Core Components

### a. Server Initialization & TRPC Router

- **Location:** `src/index.ts`
- **Description:**  
  Initializes the Express server and mounts the TRPC middleware. The TRPC router, defined in `src/core/trpc.ts`, aggregates routes provided by different modules.

- **Key Points:**
  - TRPC enables end-to-end type safety between the backend and any connected client.
  - Modules register their procedures on the central router to expose APIs.

### b. Modules

- **Location:** `src/modules/`
- **Description:**  
  Each module encapsulates a specific domain of functionality.
  - **Health Module:** Located in `src/modules/health.ts`, it provides a simple health-check endpoint.
  - **AI Module:** Located in `src/modules/ai.ts`, it exposes a stub for AI services to process queries.

- **Extending Functionality:**
  - Add new modules by creating a file under `src/modules/` following the pattern of the existing modules.
  - Import and register the new module in `src/index.ts` to integrate it into the central TRPC router.

### c. Repository Pattern & Data Access

- **Location:** `src/repositories/baseRepository.ts`
- **Description:**  
  Implements the repository pattern to abstract data operations using sql.js. This ensures that all data access (CRUD operations) is encapsulated within repository classes, promoting separation of concerns.

- **Usage:**
  - Create additional repository classes for different domain entities as needed.
  - Use provided CRUD methods in your business logic within services or directly in module procedures.

### d. AI Service

- **Location:** `src/services/aiService.ts` and `src/modules/ai.ts`
- **Description:**  
  Contains a stub for an AI-powered service that processes queries. This module is intended to be extended or replaced with an actual AI integration in the future.

---

## 4. Development Workflow

### Setting Up the Project

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd lumos-erp-backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Build the Project:**
   ```bash
   npm run build
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

### Adding New Modules

1. **Create a New Module:**
   - Add a new file (e.g., `src/modules/inventory.ts`) following the pattern in `health.ts` or `ai.ts`.
   - Define TRPC procedures and any module-specific logic.

2. **Register the Module:**
   - Import your module in `src/index.ts`.
   - Add it to the main TRPC router object.

### Repository & Data Access

1. **Creating a Repository:**
   - Extend `BaseRepository` located in `src/repositories/baseRepository.ts` for your specific data needs.
   - Implement CRUD methods as required.

### AI Integration

1. **AI Service Implementation:**
   - Update `src/services/aiService.ts` with your AI logic.
   - Extend `src/modules/ai.ts` if additional endpoints are needed for AI functionalities.

---

## 5. Testing & Deployment

### Testing

- **Unit Tests:**  
  Write unit tests for each module, repository, and service to ensure functionality.
  
- **Integration Tests:**  
  Validate the end-to-end functionality by testing TRPC endpoints using tools like curl or HTTP clients.

### Deployment

- **Build:**  
  Use `npm run build` to compile the TypeScript code.
  
- **Run:**  
  Use `npm start` to run the production server.
  
- **CI/CD:**  
  Integrate with your preferred CI/CD system to automate tests and deployments.

---

## 6. Contributing

- Follow the coding guidelines provided in this guide.
- Submit pull requests addressing specific modules, tests, or documentation improvements.
- Ensure that new code maintains end-to-end type-safety and adheres to the modular architecture.

---

## 7. Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TRPC Documentation](https://trpc.io/docs)
- [Express Documentation](https://expressjs.com/)
- [sql.js Documentation](https://sql.js.org/)

---

This Developer Guide serves as your starting point for understanding and contributing to the Lumos ERP Backend Framework. Further documentation and architectural updates will be added as the project evolves.
