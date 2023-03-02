import "dotenv/config";
import App from "./app";
import AuthenticationController from "./authentication/authentication.controller";
// import PostController from './post/post.controller';
// import ReportController from './report/report.controller';
// import UserController from './user/user.controller';
import validateEnv from "./utils/validateEnv";

validateEnv();

console.log(process.env.NODE_ENV);

const app = new App([new AuthenticationController()]);

app.listen();
