import Vue from 'vue';
import { extend, ValidationProvider } from "vee-validate";
import { required } from "vee-validate/dist/rules";

// install the 'required' rule.
extend("required", {
  ...required,
  message: "入力が必須の項目です。"
});

Vue.component('ValidationProvider', ValidationProvider);
