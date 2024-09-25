# NodeJS-Project

### **Description**

This Node.js project highlights essential concepts such as **buffer**, **fs**, **path**, **http**, **package management**, **Express**, **MongoDB**, **API**, and **cookie & session management**. It is structured as follows:

1. **Bookkeeping_Project01**: A bookkeeping application that integrates key Node.js features, providing a practical example of server-side development.
2. **Example Code**: A collection of standalone examples demonstrating individual Node.js concepts for reference and learning.



### Project Structure

#### Example Code

The `Example Code` folder contains subfolders, each focused on a specific Node.js topic with practical code examples.

#### Bookkeeping_Project01

The `Bookkeeping_Project01` is a financial record management application built using **Express**.

- **Mongoose**: an **Object Data Modeling (ODM) library** for MongoDB and Node.js.
  - Connection
    - In `database/database.js`, establishe a connection to MongoDB.
    - Sets up event-based callback functions.
    - Modifies `bin/www` to start the server after a successful MongoDB connection.
  - Model
    - In `models/<NAME>.js`, define the schema and create the model for database interactions.

- **MD5:** a **cryptographic** hash function, used for data integrity.
  - md5(password)
- **body-parser: ** Parses incoming request bodies in a middleware before your handlers, making the `req.body` property available.
  - **Query String** Parameters (e.g., ?name=John&age=30) => `req.query.name`
  - **Route** Parameters (e.g., /user/:id) => `req.params.id`
  - **Request Headers** => `req.get()`
  - **Request Body** => `req.body.<Property>`

- Cookie, Session & Token 
- Middleware



### Contact

**Yuchen Peng (Yovan)**

**Email**: yucpeng17@outlook.com

Feel free to reach out with any questions or for further information about the project.