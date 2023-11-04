import { type Page } from "@/Framework/Monitor";

import Vaults from "@PM/Pages/Vaults/Vaults.vue";
import StabilityPool from "@PM/Pages/Pool/StabilityPool.vue";
import Stablecoin from "@PM/Pages/Stablecoin/Stablecoin.vue";
import Redemptions from "@PM/Pages/Redemptions/Redemptions.vue";
import Liquidations from "@PM/Pages/Liquidations/Liquidations.vue";
import CvxPrisma from "@PM/Pages/CvxPrisma/CvxPrisma.vue";
import VaultManager from "@PM/Pages/Vaults/VaultManager.vue";
import Trove from "@PM/Pages/Vaults/Trove.vue";
import Profile from "@PM/Pages/Profile/Profile.vue";

export const pageMain: Page = {
  titleRoute: "/",
  routes: [
    { path: "/", redirect: { name: "vaults" } },

    { path: "/pool", name: "pool", component: StabilityPool },
    { path: "/mkusd", name: "mkusd", component: Stablecoin },
    { path: "/redemptions", name: "redemptions", component: Redemptions },
    { path: "/liquidations", name: "liquidations", component: Liquidations },
    { path: "/vaults", name: "vaults", component: Vaults },
    { path: "/cvxprisma", name: "cvxprisma", component: CvxPrisma },
    { path: "/profile/:addr?", name: "profile", component: Profile },
    {
      path: "/vault/:vaultAddr/:tab?",
      name: "prismavault",
      component: VaultManager,
    },
    {
      path: "/vault/:vaultAddr/trove/:troveAddr",
      name: "prismatrove",
      component: Trove,
    },
  ],
  menuItems: [
    {
      to: "/vaults",
      label: "Vaults",
    },
    {
      to: "/mkusd",
      label: "mkUSD",
    },
    {
      to: "/pool",
      label: "Stability pool",
    },
    {
      to: "/redemptions",
      label: "Redemptions",
    },
    {
      to: "/liquidations",
      label: "Liquidations",
    },
    {
      to: "/cvxprisma",
      label: "cvxPRISMA",
    },
    {
      to: "/profile",
      label: "Profile",
    },
  ],
};
