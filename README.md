# React Product Management App

This project is a React-based Product Management Application built to fulfill client requirements. It leverages a modern frontend stack with Mantine UI, React Query, Zustand, and React Router for efficient state management, component design, and seamless navigation. The app provides a user-friendly interface for product listing, searching, filtering, and viewing detailed product information.

---

## Features

1. **Authentication Mechanism**
   - Simple login mechanism to switch between public and authenticated routes.
   - Auth state persists between sessions using client-side persistence.

2. **Resource List Page**
   - Displays a list of products in a tabular format.
   - Features include:
     - **Search**: Find products by name.
     - **Filter**: Filter products by category.
     - **Sorting**: Sort products by various attributes.
     - **Pagination**: Navigate through product lists.

3. **Resource Detail Page**
   - Shows detailed information about a specific product.
   - Includes:
     - **Product Information**: Key product details displayed using Mantine components.
     - **Additional Info**: Supplementary product information.
     - **Related Products**: A list of products from the same category.
     - **Reviews**: Displays product reviews.

4. **Data Enrichment**
   - Enriches the product detail page by fetching related products based on the product category.

5. **Deep Linking**
   - Implements dynamic routing with React Router to enable direct access to specific products using paths like `/product/:id`.

---

## Technologies Used

- **React**: UI library for building the application.
- **React Router**: For routing and deep linking.
- **Mantine**: UI component library for responsive design and enhanced user experience.
- **React Query**: For data fetching and state management.
- **Zustand**: For global state management.
- **TypeScript**: To ensure type safety and improve code maintainability.
- **Vite**: For a fast development experience.

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Steps

1. **Clone the Repository**  
   Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/amaan-khatri-au46/script-assist.git
   cd script-assist


2. Install Dependencies
Install all the required dependencies for the project by running:

npm install


3. Create a .env file in the root directory with the following content:
VITE_API_PREFIX='https://dummyjson.com'

4. Run the Application
Start the development server with the command:
npm start


5. Access the Application
Open your browser and navigate to http://localhost:3000.


Folder Structure
src/components: Reusable UI components.

src/pages: Page-level components for routing.

ProductList: Displays the resource list with search, filter, and pagination.

ProductDetail: Shows detailed information about a specific product.

src/services: API service layer for data fetching.

src/store: Zustand slices for state management.

src/routes: Application routes for public and authenticated sections.



Public API Used
The application uses the DummyJSON API as a fake product API for testing and demonstration purposes.

Key Endpoints:
Products List: /products

Single Product Detail: /products/:id

Categories: /products/categories


# Credentials
Use the following credentials to log in:
Username: emilys
Password: emilyspass