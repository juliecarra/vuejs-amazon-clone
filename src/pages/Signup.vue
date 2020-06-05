<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <router-link to="/">
              <img src="/img/logo-black.png" alt class />
            </router-link>
            <form class="mt-4">
              <div class="a-box a-spacing-extra-large">
                <div class="a-box-inner">
                  <h1 class="a-spacing-small">Create Account</h1>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table">Your name</label>
                    <input
                      type="text"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="form.name"
                      @blur="$v.form.name.$touch()"
                    />
                    <div v-if="$v.form.name.$error" class="form-error">
                      <span
                        v-if="!$v.form.name.required"
                        class="help is-danger"
                        style="color: red; font-size: 12px"
                      >Name is required</span>
                    </div>
                  </div>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table">Email</label>
                    <input
                      type="email"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="form.email"
                      @blur="$v.form.email.$touch()"
                    />
                    <div v-if="$v.form.email.$error" class="form-error">
                      <span
                        v-if="!$v.form.email.required"
                        class="help is-danger"
                        style="color: red; font-size: 12px"
                      >Email is required</span>
                      <span
                        v-if="!$v.form.email.email"
                        class="help is-danger"
                        style="color: red; font-size: 12px"
                      >Email address is not valid</span>
                    </div>
                  </div>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table">Password</label>
                    <input
                      type="password"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="form.password"
                      @blur="$v.form.password.$touch()"
                    />
                    <div v-if="$v.form.password.$error" class="form-error">
                      <span
                        v-if="!$v.form.password.required"
                        class="help is-danger"
                        style="color: red; font-size: 12px"
                      >Password is required</span>
                      <span
                        v-if="!$v.form.password.minLength"
                        class="help is-danger"
                      >Password should be at least 6 characters</span>
                    </div>

                    <div class="a-row a-spacing-extra-large mb-4">
                      <span class="a-button-primary">
                        <span class="a-button-inner">
                          <span class="a-button-text" @click="onSignup">Create your Amazon account</span>
                        </span>
                      </span>
                      <div class="a-row a-spacing-top-medium a-size-small">
                        <b>
                          By creating an account, you agree to Amazon's
                          <a href="#">conditions of Use</a> and
                          <a href="#">Privacy Notice</a>
                        </b>
                      </div>
                    </div>
                    <hr />
                    <div class="a-row">
                      <b>
                        Already have an account?
                        <router-link to="/login" class="a-link-emphasis">Sign in</router-link>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email: email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },

  computed: {
    isFormInvalid() {
      return this.$v.form.$invalid;
    }
  },
  methods: {
    onSignup() {
      this.$v.form.$touch(); //activate validation of the form
      this.$store
        .dispatch("auth/registerUser", this.form)
        .then(() => this.$router.push("/login"))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>