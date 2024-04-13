<template>
  <footer class="footer">
    <div class="content">
      <p class="description">
        <strong>DALL·E 2 Clothing</strong> - odkryj unikalną kolekcję odzieży
        inspirowaną sztuczną inteligencją. Nasze projekty łączą innowacyjność z
        modą, tworząc niepowtarzalny styl dla każdego.
      </p>
      <div class="social">
        <span>Śledź nas na:</span>
        <a href="https://www.linkedin.com/company/dall-e-2-clothing">
          <img src="./linkedIn.svg" alt="LinkedIn" width="32" height="32" />
        </a>
        <a href="https://www.instagram.com/dall-e-2-clothing">
          <img src="./instagram.svg" alt="Instagram" width="32" height="32" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.description {
  margin: 0;
  text-align: center;
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}

.social span {
  margin-right: 10px;
}

.social a {
  margin-left: 10px;
}
</style>
