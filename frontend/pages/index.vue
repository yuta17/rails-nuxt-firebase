<template>
  <div class="container">
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br />
      <button v-on:click="logout">ログアウト</button><br />
      <a href="/member-page">メンバーページへ</a>
    </div>
    <div v-else>
      メール<br />
      <input v-model="email" type="text" /><br />
      パスワード<br />
      <input v-model="password" type="password" /><br />
      <button v-on:click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    this.$fireApp.auth().onAuthStateChanged((user) => {
      const { email, password } = user
      this.setUser({ email, password })
    })
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      this.$fireApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {})
        .catch((error) => {
          console.log(error)
        })
    },
    logout() {
      this.$fireApp
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
