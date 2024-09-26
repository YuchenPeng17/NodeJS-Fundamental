# NodeJS-Project

### **Description**

This Node.js project highlights essential concepts such as **buffer**, **fs**, **path**, **http**, **package management**, **Express**, **MongoDB**, **API**, and **cookie & session management**. It is structured as follows:

1. **BookkeepingApp**: A bookkeeping application that integrates key Node.js features, providing a practical example of server-side development.
2. **Example Code**: A collection of standalone examples demonstrating individual Node.js concepts for reference and learning.



### Project Structure

#### Example Code

The `Example Code` folder contains subfolders, each focused on a specific Node.js topic with practical code examples.

#### BookkeepingApp

The `BookkeepingApp` is a financial record management application built using **Express**.

- **Mongoose**: an **Object Data Modeling (ODM) library** for MongoDB and Node.js.
  
  - Connection
    - In `database/database.js`, establishe a connection to MongoDB.
    - Sets up event-based callback functions.
    - Modifies `bin/www` to start the server after a successful MongoDB connection.
  - Model
    - In `models/<NAME>.js`, define the schema and create the model for database interactions.
  
- **MD5:** a **cryptographic** hash function, used for data integrity.
  - md5(password)
  
- **body-parser:** Parses incoming request bodies in a middleware before your handlers, making the `req.body` property available.
  - **Query String** Parameters (e.g., ?name=John&age=30) => `req.query.name`
  - **Route** Parameters (e.g., /user/:id) => `req.params.id`
  - **Request Headers** => `req.get()`
  - **Request Body** => `req.body.<Property>`

- **Cookie, Session & Token**

  - **Cookie:** 

    - Client-side storage for state management
    - Vulnerable to tampering, and can be disabled by users.

  - **Session:** `session: 'express-session'`, `MongoStore: 'connect-mongo'`

    - Server: set `req.session.name = 'John';`, this value is stored in the session data on the server. Session data is associated with a unique **session ID (SID).**
    - Browser:  doesn't get session data (like `name`) in the cookie. Instead, gets the **session ID (SID) and cookie specified in Session**, as a cookie.
    - **Pros:** Higher security and larger capacity compared to cookies
    - **Cons:** In high-concurrency scenarios, they consume significant server resources and are not suitable for distributed architectures.

    **Process Overview**

    1. **Client login**: Client sends username and password to the server.
    1. **Server verification**: Server verifies credentials with the database.
    1. **Session creation**: Server generates a session, stores user info (e.g., `req.session.username`), and sends the session ID back to the client.
    1. **Session ID storage**: Client stores the session ID in a cookie.
    1. **Future requests**: Client includes the session ID in subsequent requests, and the server retrieves the session data (e.g., `username`) to validate and authorize actions.


  - **Token:** `jwt: 'jsonwebtoken'`

    - jwt.sign(`{data}`, `<secret>`, `{config]}`)

    - jwt.verify(`token`, `<secret>`, `(err, data)=>{...}`)

    - **Stateless**: Token does not require the server to store session information. The client sends the token with each request, and the server verifies its validity to authenticate the user, making it ideal for distributed systems.

      **Self-contained**: Token carries all necessary user information (e.g., user ID, roles, expiration), allowing the server to retrieve authentication details without querying the database.

- **Middleware**

  - Middleware functions can be stored in separate JavaScript files within a dedicated folder, then exported and used via `require()`.

  - **Application-level middleware**: Functions bound to an instance of `app` using `app.use()`.

    **Router-level middleware**: Similar to application-level but bound to an instance of `express.Router()`.

    **Third-party middleware**: Middleware like `body-parser`, `morgan`, `cors`, etc., can be integrated into your app.

  - `next()` within a middleware function passes control to the **next middleware** or **route handler**

- **Nodemon & Node**

  - **Nodemon**: For development, helps with rapid iteration by restarting the app automatically on code changes.
  - **Node**: For production, used to run the stable version of your app.




### Contact

**Yuchen Peng (Yovan)**

**Email**: yucpeng17@outlook.com

Feel free to reach out with any questions or for further information about the project.
