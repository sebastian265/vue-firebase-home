<template>
  <main class="login">
    <section class="forms">
      <form action="" class="register">
        <h2>REGISTER</h2>
        <input
          type="email"
          placeholder="Email adress"
          v-model="register_form.email"/>
          <input 
          type="password" 
          placeholder="Password"
          v-model="register_form.password" />
          <input type="submit" value="Register" />
      </form>

      <form action="" class="login">
        <h2>LOG IN</h2>
        <input
          type="email"
          placeholder="Email adress"
          v-model="login_form.email"/>
          <input 
          type="password" 
          placeholder="Password"
          v-model="login_form.password" />
          <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch('login',login_form.value)
    }
    return {
      login_form,
      register_form,
    };
  },
};
</script>

<style></style>
