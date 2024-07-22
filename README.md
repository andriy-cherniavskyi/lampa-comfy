# Lampa Software Test Task

## Project Description

This project is a test task for the Lampa Software team. The goal is to develop a single-page application (SPA) for an online store interface that allows users to select products and place orders.

## Product Requirements

The application consists of two main pages: `/products` and `/cart`.

### /products

- **Header**: Includes a logo and a button to navigate to the cart page.
- **Product Filters**: Allows users to filter products.
- **Product Cards**: Displays the following details for each product:
    - Product name
    - Short description
    - Price (with currency)
    - Buy/Add button
- **Cart Icon**: Displays the total value of products in the cart. Updates dynamically when products are added or quantities are changed. Does not display `0` if the cart is empty.

### /cart

- **Added Products List**: Lists products added to the cart.
- **Order Form**: Allows users to place an order.
- **Product Details in Cart**: Displays the following for each product in the cart:
    - Product name
    - Short description
    - Price (with currency)
    - Increase/Decrease quantity buttons
- **Quantity Management**: If the quantity of a specific product in the cart is `1` and the `-` button is clicked, the product is removed from the cart.
- **Persistent Cart**: The cart retains products even after the page is reloaded.

## Technical Requirements

- **React 18**: The application is developed using React 18.
- **State Management**: Uses Redux for state management.
- **TypeScript**: All components are typed using TypeScript.
- **Order Form**: Utilizes `react-hook-form` for managing the form.
- **Form Validation**: Uses `yup` for form validation.
- **API Integration**: Fetches product list and saves orders using Firebase or another API (e.g., [Dummy JSON Products API](https://dummyjson.com/docs/products)).
- **Product Filtering**: Implements product filtering through API requests.
- **Authentication**: Includes user authentication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andriy-cherniavskyi/lampa-comfy.git
   cd lampa-comfy
