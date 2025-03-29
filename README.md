# Lumos ERP Backend Framework

Lumos ERP Backend is a skeletal, modular ERP framework built with TypeScript, TRPC, and Express. It provides a robust foundation to build and extend ERP systems using a clean architecture, repository pattern, and integrated AI capabilities.

## Overview

This framework is designed to help you quickly scaffold and extend ERP functionality with:
- **Modular Architecture:** Easily add new modules (e.g., health checks, AI integrations, inventory, etc.) by registering them in a central TRPC router.
- **Type Safety:** End-to-end type safety using TypeScript and TRPC for API procedures.
- **In-Browser SQLite Integration:** Leveraging sql.js and the repository pattern for data access.
- **AI Service:** A stub for integrating AI-powered processing (analytics or code generation) via a dedicated module.
- **Minimal Setup:** A clean Express server setup that can be extended as your project grows.

## Tech Stack

- **Language:** TypeScript
- **API Layer:** TRPC for constructing type-safe procedures and routers.
- **Web Framework:** Express
- **Database:** In-browser SQLite via sql.js (accessed through a repository pattern)
- **Additional Tools:** 
  - Node.js
  - npm for package management

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd lumos-erp-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the project:**

   ```bash
   npm run build
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Access the API Endpoints:**
   - **Health Check:** `GET /trpc/health.check`
   - **AI Service:** `POST /trpc/ai.process`

## Usage

The project initializes an Express server with a TRPC middleware mounted at `/trpc`. Modules are registered in the main router to expose various API endpoints. Refer to the [Developer Guide](DEVELOPER_GUIDE.md) for details on extending the framework.

## Contributing

Contributions are welcome! Please refer to the Developer Guide for architecture details and coding guidelines before submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
