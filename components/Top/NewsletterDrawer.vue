<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

function confirm() {
  emit("close");
}
</script>

<template>
  <Drawer>
    <DrawerTrigger class="trigger">Zapisz się!</DrawerTrigger>
    <DrawerContent class="drawer-content">
      <DrawerHeader>
        <DrawerTitle>Podaj swój adres e-mail:</DrawerTitle>
        <Input type="email" placeholder="Adres e-mail" />
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>
          <Button class="confirm-button" @click="confirm">Zapisz się</Button>
        </DrawerClose>
        <DrawerClose>
          <Button class="confirm-button" variant="outline">Anuluj</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<style>
.trigger {
  background-color: hsl(var(--primary));
  margin-left: 10px;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.trigger:hover {
  background-color: #0056b3;
}

.confirm-button {
  width: 100%;
}

.drawer-content {
  z-index: 101;
}
</style>
