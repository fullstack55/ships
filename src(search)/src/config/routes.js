// import LoginPage from "../pages/login/login";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
// import RegisterPage from "../pages/register/register";
import HomePage from "../pages/home/home";
// import ForgotPasswordPage from "../pages/forgot-password/forgot-password";
import ProfilePage from "../pages/profile-page/profile-page";
import MessagesPage from "../pages/messages-page/messages-page";
import PhotoPage from "../pages/photo-page/photo-page";
import VideoPage from "../pages/video-page/video-page";
import NewsPage from "../pages/news/news";
import SupportPage from "../pages/support-page/support-page";
import PhotosPage from "../pages/photos-page/photos-page";
import MostPopularPhotos from "../pages/photos-page/components/most-popular-photos/MostPopularPhotos";
import ContactPage from "../pages/contact/contact";
import ShiptraxPage from "../pages/shiptrax/shiptrax";
import Forums from "../pages/Forums";
import Videos from "../pages/videos-page/Videos";
import Ships from "../pages/Ships";
import AIS from "../pages/AIS";
import VideoOpen from "../pages/VideoOpen";
import OneSupport from "../pages/OneSupport";
// import OneTopic from "../pages/OneTopic";
// import OneCategory from "../pages/OneCategory";

const routes = {
  public: [
    {
      path: "/home",
      exact: true,
      key: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      exact: true,
      key: "LoginPage",
      component: Login,
    },
    {
      path: "/register",
      exact: true,
      key: "RegisterPage",
      component: Register,
    },
    {
      path: "/login/identify",
      exact: true,
      key: "ForgotPasswordPage",
      component: ForgotPassword,
    },
    {
      path: "/profile",
      exact: false,
      key: "ProfilePage",
      component: ProfilePage,
    },
    {
      path: "/messages",
      exact: false,
      key: "MessagesPage",
      component: MessagesPage,
    },
    {
      path: "/photo",
      exact: false,
      key: "PhotoPage",
      component: PhotoPage,
    },
    {
      path: "/video",
      exact: false,
      key: "VideoPage",
      component: VideoPage,
    },
    {
      path: "/news",
      exact: false,
      key: "NewsPage",
      component: NewsPage,
    },
    {
      path: "/support",
      exact: true,
      key: "SupportPage",
      component: SupportPage,
    },

    {
      path: "/support/:id",
      exact: true,
      key: "OneSupport",
      component: OneSupport,
    },

    {
      path: "/shiptrax",
      exact: false,
      key: "ShipTraxPage",
      component: ShiptraxPage,
    },
    {
      path: "/forum",
      exact: false,
      key: "ForumPage",
      component: Forums,
    },
    {
      path: "/most-popular-photos",
      exact: false,
      key: "MostPopularPhotos",
      component: MostPopularPhotos,
    },

    {
      path: "/photos",
      exact: false,
      key: "PhotosPage",
      component: PhotosPage,
    },

    {
      path: "/videos",
      exact: true,
      key: "VideosPage",
      component: Videos,
    },

    {
      path: "/videos/:id",
      exact: true,
      key: "VideoOpen",
      component: VideoOpen,
    },

    {
      path: "/contact",
      exact: false,
      key: "ContactPage",
      component: ContactPage,
    },
    {
      path: "/shiptrax",
      exact: false,
      key: "ShiptraxPage",
      component: ShiptraxPage,
    },
    {
      path: "/ships",
      exact: false,
      key: "Ships",
      component: Ships,
    },
    {
      path: "/ais",
      exact: false,
      key: "AIS",
      component: AIS,
    },

    /*
        {
            path: "/",
            exact: true,
            component: Home
        }*/
  ],
  /*    private: [
        {
            path: "/posts",
            exact: true,
            component: Posts,
        },
        {
            path: "/posts/:id",
            exact: false,
            component: Post,
        },
    ],*/
};

export default routes;
