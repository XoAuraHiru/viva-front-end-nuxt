import {useApiFetch} from "~/composables/useApiFetch";
import {defineStore} from "pinia";

type User = {
  id: number;
  name: string;
  email: string;
}

type Credentials = {
  email: string;
  password: string;
}

type RegistrationInfo = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

type ForgotPassword = {
    email: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = computed(() => !!user.value)

  async function logout() {
    await useApiFetch("/logout", {method: "POST"});
    user.value = null;
    navigateTo("/signin");
  }

  async function fetchUser() {
    const {data, error} = await useApiFetch("/api/user");
    user.value = data.value as User;
  }

  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  }

  async function register(info: RegistrationInfo) {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/register", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return register;
  }

  async function forgotPassword(info: ForgotPassword) {
    await useApiFetch("/sanctum/csrf-cookie");

    const forgotPassword = await useApiFetch("/forgot-password", {
      method: "POST",
      body: info,
    });

    return forgotPassword;
  }

  return {user, login, isLoggedIn, fetchUser, logout, register, forgotPassword}
})