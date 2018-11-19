import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MyTwin from ".././views/MyTwin/MyTwin.jsx";
import PatientReport from ".././views/PatientReport/PatientReport.jsx";
import MyBestTreatment from ".././views/MyBestTreatment/MyBestTreatment.jsx";
import Pirority from ".././views/Pirority/Pirority.jsx";
import PatientDetails from ".././views/PatientDetails/PatientDetails.jsx";
import Login from ".././views/Login/login.jsx";

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
  {
    path: "/patientDetails",
    sidebarName: "Twin Name",
    icon: Dashboard,
    component: PatientDetails
  },
  {
    path: "/patientReport",
    sidebarName: "Patient Report",
    icon: Person,
    component: PatientReport
  },
  // {
  //   path: "/login",
  //   sidebarName: "Login",
  //   icon: Person,
  //   component: Login
  // },
  { redirect: true, path: "/", to: "/mytwin", navbarName: "Redirect" },
  
];

export default dashboardRoutes;
