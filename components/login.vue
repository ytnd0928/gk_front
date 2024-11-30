<template>
  <div>
    <button @click="showLogin = !showLogin">
      Switch to {{ showLogin ? "Sign Up" : "Login" }}
    </button>

    <div v-if="showLogin">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>

    <div v-else>
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
        if (!response.ok) {
          throw new Error("Login failed");
        }
        // ログイン成功時の処理
        console.log("Logged in successfully");
      } catch (error) {
        console.error("Login error:", error);
        // エラーメッセージを表示するなどの処理
      }
    },
    async signUp() {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });
        if (!response.ok) {
          throw new Error("Sign up failed");
        }
        // サインアップ成功時の処理
        console.log("Signed up successfully");
      } catch (error) {
        console.error("Sign up error:", error);
        // エラーメッセージを表示するなどの処理
      }
    },
  },
};
</script>
