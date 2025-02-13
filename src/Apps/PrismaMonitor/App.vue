<template>
  <div class="root">
    <notifications
      :width="600"
      :duration="-1"
    />

    <Navigation class="navigation"></Navigation>

    <main class="main">
      <transition
        name="fade"
        mode="out-in"
      >
        <Breadcrumb
          v-if="storeBreadcrumb.show"
          class="breadcrumb"
          :crumbs="storeBreadcrumb.crumbs"
          @crumb="onCrumb"
        ></Breadcrumb>
      </transition>

      <div class="content">
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Breadcrumb, type Crumb } from "@/Framework";
import Navigation from "@PM/Navigation/Navigation.vue";
import { useBreadcrumbStore } from "@PM/Stores";

// Refs
const storeBreadcrumb = useBreadcrumbStore();
const route = useRoute();
const router = useRouter();

// Watches
watch(
  () => route.fullPath,
  (newRoute) => {
    const noCrumbs = [
      "/pool",
      "/mkusd",
      "/redemptions",
      "/liquidation",
      "/profile",
      "/wrappers",
      "/veprisma",
    ];

    if (noCrumbs.some((x) => newRoute.startsWith(x))) {
      storeBreadcrumb.show = false;
    }
  }
);

// Methods
const onCrumb = async (crumb: Crumb) => {
  if (crumb.pathName) {
    await router.push({ name: crumb.pathName });
  }
};
</script>

<style lang="scss">
@import "@/Styles/Themes/PM/Light.scss";
@import "@/Styles/Themes/PM/Dark.scss";
@import "@/Styles/Variables.scss";
@import "@/Styles/Classes.scss";

[data-theme="light"] {
  @include themeLight();
}

[data-theme="dark"] {
  @include themeDark();
}

html {
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: lighten(rgb(20, 20, 20), 25%);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--c-primary);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--c-primary-hover);
  }
}

body {
  overflow-y: overlay;
  margin: 0;

  background-color: var(--c-lvl0);
  color: var(--c-text);
}

a {
  color: var(--c-primary);
  text-decoration: none;

  &:hover {
    color: var(--c-lvl0);
    background: var(--c-lvl6);
  }

  &:active {
    color: var(--c-lvl0);
    background: var(--c-lvl6);
  }
}

p {
  display: flex;
  margin-block-start: 0rem;
  margin-block-end: 1rem;
}

#app {
  display: flex;
  justify-content: center;
}
</style>

<style lang="scss" scoped>
@import "@/Styles/Variables.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity $content-show-duration $ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.root {
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow-y: hidden;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;

  @media only screen and (max-width: 1280px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }

  > .navigation {
    grid-row: 1;
    grid-column: 1;
  }

  > main {
    grid-row: 1;
    grid-column: 2;

    @media only screen and (max-width: 1280px) {
      grid-row: 2;
      grid-column: 1;
    }

    overflow-y: auto;

    > .breadcrumb {
      max-width: calc(1920px - 18.125rem);
      margin: auto;
      margin-top: var(--page-margin);
      margin-bottom: calc(var(--page-margin) * -1 + var(--dashboard-gap));
      padding-left: var(--page-margin);
      padding-right: var(--page-margin);

      @media only screen and (max-width: 1280px) {
        padding: 0 1rem;
        margin-top: var(--dashboard-gap);
        margin-bottom: 0;
      }
    }
  }
}
</style>
