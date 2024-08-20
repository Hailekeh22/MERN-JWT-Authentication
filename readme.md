        Login and Signup with protected route using JsonWebToken(JWT)

> (install the necessary dependencies) run npm i on the client and server directorries

> create .env file inside the client directory ("client/.env")
                      env values

        VITE_loginbackend = "http://your_server_link:port/login"
        VITE_signupbackend = "http://your_server_link:port/signup"
        VITE_indexroute = "http://your_server_link:port/page"
        VITE_homeroute = "http://your_server_link:port/home"
        VITE_verifyroute = "http://your_server_link:port/validate"
        VITE_Logoutroute = "http://your_server_link:port/home/logout"

> create .env file inside your server directory ("server/.env")
                    env values

        JWT_SECRETE = "add your JWT secret"
