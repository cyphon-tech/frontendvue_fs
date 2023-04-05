<template>
  <section>
    <base-card>
      <h2>Register as a hotel now!</h2>
      <hotel-form @save-data="saveData"></hotel-form>
    </base-card>
  </section>
</template>

<script>
import HotelForm from './HotelForm.vue';

export default {
  components: {
    HotelForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('Hotels/registerHotel', data);
      this.$router.replace('/hotel');
    }
  }
};
</script>