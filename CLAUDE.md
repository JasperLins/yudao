# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **貸款平台**, a uni-app based e-commerce application built with Vue 3. It supports multiple platforms including WeChat Mini Program, H5, iOS, and Android apps.

## Development Commands

### Code Formatting
```bash
npm run prettier
```
Formats JavaScript, JSON, TypeScript, CSS, LESS, SCSS, Vue, HTML, and Markdown files in the `pages` and `sheep` directories.

### Build and Run
This is a uni-app project. Use HBuilderX or uni-app CLI for development:
- Development: Run in HBuilderX or use `uni build` commands
- WeChat Mini Program: Use HBuilderX to publish to WeChat Developer Tools
- H5: Builds to `unpackage/dist/dev/mp-h5/` or similar directory

## Architecture Overview

### Core Structure
- **`sheep/`**: Core framework directory containing all business logic
  - `api/`: API service modules organized by domain (member, trade, promotion, etc.)
  - `components/`: Reusable Vue components with `s-` prefix
  - `ui/`: UI components with `su-` prefix  
  - `store/`: Pinia state management stores
  - `router/`: Custom routing system
  - `platform/`: Platform-specific providers (WeChat, Apple, etc.)
  - `helper/`: Utility functions and tools
  - `config/`: Configuration files

- **`pages/`**: Vue pages organized by modules
  - Main pages: `index/`, `user/`, `chat/`
  - Subpackages defined in `pages.json`

- **`uni_modules/`**: Third-party uni-app components and plugins

### Key Architecture Patterns

1. **Component Naming Convention**:
   - `s-*`: Sheep framework components (e.g., `s-layout`, `s-empty`)
   - `su-*`: Sheep UI components (e.g., `su-navbar`, `su-tabs`)
   - Auto-registered via easycom in `pages.json`

2. **State Management**: Uses Pinia with persistence via `pinia-plugin-persist-uni`
   - Global stores: `app`, `user`, `sys`, `modal`

3. **API Architecture**: 
   - Centralized in `sheep/api/` with domain-based organization
   - HTTP client: `luch-request`
   - Base configuration in `sheep/request/`

4. **Platform Abstraction**: 
   - Different providers for WeChat, Apple, etc.
   - Platform-specific logic handled in `sheep/platform/provider/`

5. **Configuration System**:
   - Environment variables in `.env` file
   - Runtime config in `sheep/config/index.js`
   - Platform-specific configs in `manifest.json`

## Environment Configuration

The project uses environment variables from `.env`:
- `SHOPRO_DEV_BASE_URL`: Development API endpoint
- `SHOPRO_BASE_URL`: Production API endpoint  
- `SHOPRO_API_PATH`: API path prefix (default: `/app-api`)
- `SHOPRO_TENANT_ID`: Multi-tenant ID
- Other configuration for static resources, websocket, etc.

## Multi-Platform Support

- **WeChat Mini Program**: Primary target platform
- **H5**: Mobile web version
- **App**: iOS and Android native apps
- **Other Mini Programs**: Support planned for Alipay, ByteDance, etc.

## Development Guidelines

### File Organization
- New API services: Add to `sheep/api/[domain]/`
- New components: Add to `sheep/components/s-[name]/`
- New UI components: Add to `sheep/ui/su-[name]/`
- New pages: Add to appropriate `pages/` subdirectory and update `pages.json`

### Code Style
- Use Prettier for formatting with the provided configuration
- Vue 3 Composition API preferred
- ES6+ JavaScript features supported

### Dependencies Management
- Core dependencies: dayjs, lodash, pinia, luch-request
- UI components: Custom sheep framework + uni-ui modules
- Platform SDKs: WeChat JS SDK for web integration

## Important Files
- `sheep/index.js`: Main framework entry point and initialization
- `pages.json`: Page configuration and routing
- `manifest.json`: Platform-specific app configurations
- `.env`: Environment variables and API endpoints
- `package.json`: Dependencies and npm scripts