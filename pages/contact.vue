<template>
  <div class="contact-page">
    <h1 class="title">Masz pytania? Skontaktuj się z nami!</h1>
    <p class="intro">
      Jesteśmy tutaj, aby pomóc. Wypełnij poniższy formularz, a my odpowiemy tak
      szybko, jak to możliwe.
    </p>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Imię</label>
        <Input
          v-model="form.name"
          id="name"
          placeholder="Twoje imię"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Nazwisko</label>
        <Input
          v-model="form.surname"
          id="surname"
          placeholder="Twoje Nazwisko"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <Input
          type="email"
          v-model="form.email"
          id="email"
          placeholder="Twój adres email"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Wiadomość</label>
        <Textarea
          v-model="form.message"
          id="message"
          placeholder="Twoja wiadomość"
          required
        />
      </div>
      <Button type="submit" class="submit-button" variant="primary"
        >Wyślij</Button
      >
    </form>
    <Alert v-if="showAlert" class="submit-alert">
      <Terminal class="h-4 w-4" />
      <AlertTitle class="title">Wiadomość wysłana!</AlertTitle>
      <AlertDescription class="title">
        Dziękujemy za kontakt!
      </AlertDescription>
    </Alert>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const showAlert = ref(false);

const form = reactive({
  name: "",
  surname: "",
  email: "",
  message: "",
});

const submitForm = () => {
  showAlert.value = true;
  form.name = "";
  form.email = "";
  form.message = "";
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 80px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 28px;
  font-weight: bold;
}

.intro {
  text-align: center;
  margin-bottom: 20px;
  color: #555;
  font-size: 18px;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.submit-button {
  background-color: hsl(var(--primary));
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.submit-alert {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
