<template>
    <section>
        <base-card>
        <h2>{{fullName}}</h2>
        <h3>${{rate}}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
        <header>
            <h2>Inserted? Reach out now!</h2>
            <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
        </base-card> 
    </section>
    <section>
        <base-card>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{description}}</p>
        </base-card>
    </section>
</template>
<script>
export default{
    props:['id'],
    data(){
        return {
           selectedHotel: null
        };
    },
    computed:{
          fullName(){
              return this.selectedHotel.firstName + ' ' +this.selectedHotel.lastName;
          },
          areas(){
            return this.selectedHotel.areas;
          },
           rate(){
            return this.selectedHotel.hourlyRate;
          },
           description(){
            return this.selectedHotel.description;
          },
          contactLink(){
            return this.$route.path+'/'+this.id+'/content';
          }
    },
    created(){
        this.selectedHotel = this.$store.getters['hotels/hotels'].find(
       (hotel)=>hotel.id===this.id
        );
    },
};
</script>