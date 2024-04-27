<template>
  <div
    id="MainLayout"
    class="h-screen"
    :class="[isSpotlight ? 'fixed left-0 right-0 spotlight' : 'h-screen']"
  >
    <div class="w-full max-w-[500px] mx-auto">
      <div
        class="w-full flex items-center justify-center px-2 h-10 my-2"
        id="TopMenu"
      >
        <img
          src="/public/threads-logo.png"
          alt="threads logo"
          class="w-[35px]"
        />
      </div>
    </div>

    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot />
    </div>
    <div
      id="BottomNav"
      class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black"
    >
      <div
        class="flex w-full max-w[500px] mx-auto flex items-center justify-around"
      >
        <!--  -->
        <!-- @click="navigateTo('/')" -->
        <button class="w-full h-full">
          <!--  -->
          <Icon
            name="material-symbols:home-outline"
            size="35"
            color="#ffffff"
          />
        </button>
        <button class="w-full h-full" @click="userStore.isMenuOverlay = true">
          <Icon
            class="mb-1"
            name="material-symbols:edit-square-outline-rounded"
            size="32"
            color="#ffffff"
          />
        </button>
        <button class="w-full h-full" @click="userStore.isLogoutOverlay = true">
          <Icon class="mb-1" name="ph:sign-out" size="32" color="#ffffff" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
const isSpotlight = ref(false);
</script>
