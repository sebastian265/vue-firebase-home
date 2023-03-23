<template>
  <main class="loginContainer">
    <section class="forms">
      <form action="" class="login registerBox" @submit.prevent="register">
        <h2>REGISTER</h2>
        <input
          type="email"
          placeholder="Email adress"
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="Register" />
        <span class="switchPlaces" v-on:click="switchPlacesOfLogin">Already have an account? Log in here!</span>
      </form>

      <form action="" class="login loginBox" @submit.prevent="login">
        <h2>LOG IN</h2>
        <input
          type="email"
          placeholder="Email adress"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
        <span class="switchPlaces" v-on:click="switchPlacesOfLogin"
          >No account yet? Sign in here!</span
        >
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
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };
    let switched = false;
    function switchPlacesOfLogin() {
      const bothForms = document.getElementsByClassName("login");

      if (!switched) {
        bothForms[0].style.transform = "translateX(20vw)";
        bothForms[1].style.transform = "translateX(50vw)";
        switched = true;
        console.log('switched to true');
      } else {
        bothForms[0].style.transform = "translateX(-50vw)";
        bothForms[1].style.transform = "translateX(-20vw)";
        switched = false;
        console.log('switched to false');
      }
    }
    return {
      login_form,
      register_form,
      login,
      register,
      switchPlacesOfLogin,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.forms {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(20, 60, 10);
}
.login {
  display: flex;
  border: 3px solid rgb(39, 183, 92);
  border-radius: 20px;
  width: 40vw;
  padding: 2vh;
  margin: 2vh;
  flex-direction: column;
  transition-duration: 1s;
}
.login > * {
  padding: 2vh;
  margin: 1vh;
  border-radius: 15px;
  display: block;
}
span {
  font-size: 0.9em;
  color: rgb(20, 60, 10);
}
.loginBox {
  transform: translateX(-20vw);
}
.registerBox {
  transform: translateX(-50vw);
}
</style>
