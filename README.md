# How to configure and run this Demo app

This repository hosts a Single-Page Application (SPA) sample project based on ReactJS.

## Get Started

```bash
git clone git@github.com:masatotakada/cruise0.git
```

Once you clone this repo, **make the `cruise0` directory your current directory**:

```bash
cd cruise0
```

Install the client project dependencies:

```bash
npm install
```

The application runs by on port `3000`, make sure there are no other client applications running.

## Create an Auth0 Application

Once you sign in to Auth0 tenant, Auth0 takes you to the [Dashboard](https://manage.auth0.com/). In the left sidebar menu, click on ["Applications"](https://manage.auth0.com/#/applications).

Then, click the "Create Application" button. A modal opens up with a form to provide a name for the application and choose its type.

- **Name:** Cruise0 Sample

- **Application Type:** Single Page Web Applications

Click the "Create" button to complete the process. Your Auth0 application page loads up.

Click on the "Settings" tab of your Auth0 Application page and fill in the following values:

🛠 **Allowed Callback URL**

```bash
http://localhost:3000
```

The above value is the URL that Auth0 can use to redirect your users **after they successfully log in**.

🛠 **Allowed Logout URL**

```bash
http://localhost:3000
```

The above value is the URL that Auth0 can use to redirect your users **after they log out**.

🛠 **Allowed Web Origins**

```bash
http://localhost:3000
```

Using the Auth0 React SDK, your React application will make requests under the hood to an Auth0 URL to handle authentication requests. As such, you need to add your React application [origin URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) to avoid [Cross-Origin Resource Sharing (CORS)](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/) issues.

**Scroll down and click the "Save Changes" button.**

**Do not close this page yet**. You'll need some of its information in the next section.

## Add the Auth0 configuration variables to React

From the Auth0 Application Settings page, you need the Auth0 Domain and Client ID values to allow your React application to use the communication bridge you created.

Open the project, `cruise0`, and edit the `.env` file under the project directory:

`.env` as follows:

```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

The value of `REACT_APP_AUTH0_DOMAIN` is the "Domain" value from the "Settings".

The value of `REACT_APP_AUTH0_CLIENT_ID` is the "Client ID" value from the "Settings".

![Auth0 Application Settings from the Auth0 Dashboard](https://cdn.auth0.com/blog/complete-guide-to-react-authentication-with-auth0/auth0-application-settings-for-react-sdk.png)

These variables let your React application identify itself as an authorized party to interact with the Auth0 authentication server.

Run the client project:

```bash
npm start
```

Visit [`http://localhost:3000/`](http://localhost:3000/) to access the starter application.
