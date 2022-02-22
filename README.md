# Next Login Form

![](https://github.com/nikitadubyk/next-form/blob/main/readme-image.gif)

In this form you can register, use password recovery and log in.

The application uses temporary storage in memory, which can be extended by the existing database. The password is securely hashed, and a cookie with httpOnly is issued on login. The cookie with temporary access, which disappears after 5 hours. Cookies are securely encrypted using @hapi/iron.

If you are not logged in, you cannot access /dashboard

You can view the application here: https://next-form-wine.vercel.app/

## Key features

-   Password hashing
-   Using cookies and encrypting them
-   Creating your own API
-   Restriction for unlogged users

## Technologies used in this project

-   Next JS
-   Next JS API
-   @hapi/iron
-   bcryptjs
-   cookie
-   Post CSS, tailwind
