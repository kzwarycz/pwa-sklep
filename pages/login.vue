<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

let email = ref("");
let password = ref("");
</script>

<template>
  <div class="container">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl"> Zaloguj się </CardTitle>
        <CardDescription> Podaj swój adres e-mail i hasło</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Twój adres email"
            required
            v-model="email"
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Hasło</Label>
          <Input id="password" type="password" required v-model="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full"> Zaloguj się</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  padding: 1em;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container {
    height: fit-content;
  }
}
</style>
