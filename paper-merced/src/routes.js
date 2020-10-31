

import Inicio from "views/Inicio.js";
import Historia from "views/pages/Historia.js";
import Eponimo from "views/tables/Eponimo.js";
import Objetivos from "views/Objetivos.js";
import PersonasAFormar from "views/pages/PersonasAFormar.js";
import Escudo from "views/tables/Escudo.js";
import Imagenes from "views/pages/Imagenes.js";

import Preescolar from "views/tables/Preescolar.js";
import Primaria from "views/tables/Primaria.js";
import Bachillerato from "views/tables/Bachillerato.js";

// import Buttons from "views/components/Buttons.js";
// import Calendar from "views/Calendar.js";
// import Charts from "views/Charts.js";
// import Register from "views/pages/Register.js";
// import RegularForms from "views/forms/RegularForms.js";
// import SweetAlert from "views/components/SweetAlert.js";
// import Typography from "views/components/Typography.js";
// import ValidationForms from "views/forms/ValidationForms.js";
// import VectorMap from "views/maps/VectorMap.js";
// import Wizard from "views/forms/Wizard.js";
// import FullScreenMap from "views/maps/FullScreenMap.js";
// import GoogleMaps from "views/maps/GoogleMaps.js";
// import GridSystem from "views/components/GridSystem.js";
// import Icons from "views/components/Icons.js";
// import LockScreen from "views/pages/LockScreen.js";
// import Login from "views/pages/Login.js";
// import Notifications from "views/components/Notifications.js";
// import Panels from "views/components/Panels.js";

const routes = [
  {
    path: "/inicio",
    name: "Inicio",
    icon: "nc-icon nc-bank",
    component: Inicio,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Sobre Nosotros",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
      {
        path: "/historia",
        name: "Historia",
        component: Historia,
        layout: "/admin",
      },
      {
        path: "/personas-a-formar",
        name: "Personas a formar",
        component: PersonasAFormar,
        layout: "/admin",
      },
      {
        path: "/objetivos",
        name: "Objetivos institucionales",
        component: Objetivos,
        layout: "/admin",
      },
      {
        path: "/eponimo",
        name: "Eponimo",
        component: Eponimo,
        layout: "/admin",
      },
      {
        path: "/escudo",
        name: "El Escudo Mercedario",
        component: Escudo,
        layout: "/admin",
      },
      {
        path: "/imagenes",
        name: "Imagenes",
        component: Imagenes,
        layout: "/admin",
      },
      // {
      //   path: "/login",
      //   name: "Login",
      //   mini: "L",
      //   component: Login,
      //   layout: "/auth",
      // },
      // {
      //   path: "/register",
      //   name: "Register",
      //   mini: "R",
      //   component: Register,
      //   layout: "/auth",
      // },
      // {
      //   path: "/lock-screen",
      //   name: "LockScreen",
      //   mini: "LS",
      //   component: LockScreen,
      //   layout: "/auth",
      // },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "nc-icon nc-layout-11",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "nc-icon nc-ruler-pencil",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  {
    collapse: true,
    name: "Tareas",
    icon: "nc-icon nc-single-copy-04",
    state: "tablesCollapse",
    views: [
      {
        path: "/preescolar",
        name: "Preescolar",
        component: Preescolar,
        layout: "/admin",
      },
      {
        path: "/primaria",
        name: "Primaria",
        component: Primaria,
        layout: "/admin",
      },
      {
        path: "/bachillerato",
        name: "Bachillerato",
        component: Bachillerato,
        layout: "/admin",
      },
      // {
      //   path: "/regular-tables",
      //   name: "Regular Tables",
      //   mini: "RT",
      //   component: RegularTables,
      //   layout: "/admin",
      // },
      // {
      //   path: "/extended-tables",
      //   name: "Extended Tables",
      //   mini: "ET",
      //   component: ExtendedTables,
      //   layout: "/admin",
      // },
    ],
  },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   name: "Widgets",
  //   icon: "nc-icon nc-box",
  //   component: Widgets,
  //   layout: "/admin",
  // },
  // {
  //   path: "/charts",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin",
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "nc-icon nc-calendar-60",
  //   component: Calendar,
  //   layout: "/admin",
  // },
];

export default routes;
