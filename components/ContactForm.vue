<template>
    <form @submit.prevent="submitForm">
      <div v-for="(input, index) in inputs" :key="index">
        <input v-model="input.value" :data-rule="input.rule" type="text" />
        <div v-if="input.error">{{ input.errorMessage }}</div>
      </div>
  
      <div v-for="(textarea, index) in textareas" :key="index">
        <textarea v-model="textarea.value" :data-rule="textarea.rule"></textarea>
        <div v-if="textarea.error">{{ textarea.errorMessage }}</div>
      </div>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputs: [
          // { value: '', rule: 'required', error: false, errorMessage: '' },
        ],
        textareas: [
          // { value: '', rule: 'minlen:5', error: false, errorMessage: '' },
        ],
      };
    },
    methods: {
      submitForm() {
        let ferror = false;
  
        for (let input of this.inputs) {
          let ierror = false;
          let rule = input.rule;
          let pos = rule.indexOf(':', 0);
          let exp = '';
  
          if (pos >= 0) {
            exp = rule.substr(pos + 1, rule.length);
            rule = rule.substr(0, pos);
          }
  
          switch (rule) {
            case 'required':
              if (input.value === '') {
                ferror = ierror = true;
              }
              break;
  
            case 'minlen':
              if (input.value.length < parseInt(exp)) {
                ferror = ierror = true;
              }
              break;
          }
  
          input.error = ierror;
          input.errorMessage = ierror ? (input['data-msg'] !== undefined ? input['data-msg'] : 'Wrong Input') : '';
        }
  
        for (let textarea of this.textareas) {
          let ierror = false;
          let rule = textarea.rule;
          let pos = rule.indexOf(':', 0);
          let exp = '';
  
          if (pos >= 0) {
            exp = rule.substr(pos + 1, rule.length);
            rule = rule.substr(0, pos);
          }
  
          switch (rule) {
            case 'required':
              if (textarea.value === '') {
                ferror = ierror = true;
              }
              break;
  
            case 'minlen':
              if (textarea.value.length < parseInt(exp)) {
                ferror = ierror = true;
              }
              break;
          }
  
          textarea.error = ierror;
          textarea.errorMessage = ierror ? (textarea['data-msg'] !== undefined ? textarea['data-msg'] : 'Wrong Input') : '';
        }
  
        if (!ferror) {
          // Form submission is successful
          // Reset the form
          for (let input of this.inputs) {
            input.value = '';
            input.error = false;
            input.errorMessage = '';
          }
  
          for (let textarea of this.textareas) {
            textarea.value = '';
            textarea.error = false;
            textarea.errorMessage = '';
          }
        }
      },
    },
  };
  </script>