import { type Page } from "@PM/Pages/Page";

import Home from "@PM/Pages/Home/Home.vue";
import Vaults from "@PM/Pages/Vaults/Vaults.vue";

export const pageMain: Page = {
  titleRoute: "/",
  routes: [{ path: "/", component: Home },

    { path: "/vaults", name: "vaults", component: Vaults },
  ],
  menuItems: [
    {
      label: "Platform",
      children: [
        {
          to: "/",
          label: "Home",
        },
        {
          to: "/vaults",
          label: "Vaults",
        },
      ],
    },
  ],
};
