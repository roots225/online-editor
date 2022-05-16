import DefaultLayout from "../views/layouts/default_layout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "homepage",
        component: () => import("../views/pages/home.vue"),
      },
    ],
  },
];

export default routes;
