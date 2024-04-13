<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="container">
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl">
        Zarejestruj się

      </CardTitle>
      <CardDescription>
        Wprowadź informacje potrzebne do założenia konta
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <Label for="first-name">Imie</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div class="grid gap-2">
            <Label for="last-name">Nazwisko</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div class="grid gap-2">
          <Label for="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Hasło</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">
          Utwórz konto
        </Button>        
      </div>
      <div class="mt-4 text-center text-sm">
        Masz już konto?
        <a href="#" class="underline">
          Zaloguj się
        </a>
      </div>
    </CardContent>
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
  