// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import MyTwin from "views/MyTwin/MyTwin.jsx";
import PatientReport from "views/PatientReport/PatientReport.jsx";
import MyBestTreatment from "views/MyBestTreatment/MyBestTreatment.jsx";
import Pirority from "views/Pirority/Pirority.jsx";
import PatientDetails from "views/PatientDetails/PatientDetails.jsx";

const dashboardRoutes = [
  {
    path: "/mytwin",
    sidebarName: "My Twin",
    icon: Dashboard,
    component: MyTwin
  },
  {
    path: "/mybesttreatment",
    sidebarName: "My Best Treatment",
    icon: Dashboard,
    component: MyBestTreatment
  },
  {
    path: "/pirority",
    sidebarName: "Pirority",
    icon: Dashboard,
    component: Pirority
  },
  // {
  //   path: "/patientDetails",
  //   sidebarName: "Patient Details",
  //   icon: Dashboard,
  //   component: PatientDetails
  // },
  {
    path: "/patientReport",
    sidebarName: "Patient Report",
    icon: Person,
    component: PatientReport
  },
  { redirect: true, path: "/", to: "/mytwin", navbarName: "Redirect" }
];

export default dashboardRoutes;
