# Products & Cart API

This is a simple Node.js/Express service that provides two endpoints:

## Endpoints

### 1. GET `/products`
- Returns a hardcoded list of products (id, name, price).
- Example response:
  ```json
  [
    { "id": 1, "name": "Laptop", "price": 1000 },
    { "id": 2, "name": "Phone", "price": 500 },
    { "id": 3, "name": "Headphones", "price": 150 }
  ]
  ```

### 2. POST `/cart`
- Accepts a JSON body with `productId` and `quantity`.
- Returns the total price for the requested quantity of the product.
- Example request body:
  ```json
  {
    "productId": 1,
    "quantity": 2
  }
  ```
- Example response:
  ```json
  {
    "total": 2000
  }
  ```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. The server will run on `http://localhost:3000`.

## How to Test

- Use Postman, curl, or any HTTP client to test the endpoints.
- Example curl commands:

  **GET products:**
  ```bash
  curl http://localhost:3000/products
  ```

  **POST cart:**
  ```bash
  curl -X POST http://localhost:3000/cart -H "Content-Type: application/json" -d '{"productId":1,"quantity":2}'
  ```

## Project Structure
- `index.js` - Main server file
- `package.json` - Project metadata and dependencies

## License
Made by Sagar
