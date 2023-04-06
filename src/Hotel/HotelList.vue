<template>
   <section>
     <hotel-filter @change-filter="setFilters">
    </hotel-filter>
    </section>
   <section>
    <base-card>
    <div class="controls">
        <!-- all router link and button will be replaced with base button -->
   <base-button mode="outline">Refresh</base-button>
  <base-button  link to="/">view detail</base-button>
    </div>
    <ul v-if="hasHotels">   
        <hotel-item v-for="hotel in filteredHotels"
         :key="hotel.id"
          :id="hotel.id"
          :first-name="hotel.firstName"
          :last-name="hotel.lastName"
          :rate="hotel.hourlyRate"
          :areas="hotel.areas"
          >

        </hotel-item>
    </ul> 
     <h3 v-else>
    no Hotel found
    </h3>
    </base-card>
   </section>
</template>

<script>
import HotelItem from './HotelItem.vue';
import HotelFilter from './HotelFilter.vue';
export default{
     components: {
        HotelItem,
        HotelFilter
     },
     data(){
        return {
            activeFilters: {
                frontend:true,
                backend:true,
                career: true
            }
        };
     },
    computed:{
        filteredHotels(){
            const hotels = this.$store.getters['hotels/hotels'];
            return hotels.filter(hotel =>{
           if(this.activeFilters.frontend && hotel.areas.includes('frontend'))
           {
            return true;
           }
            if(this.activeFilters.backend && hotel.areas.includes('backend'))
           {
            return true;
           }
            if(this.activeFilters.career && hotel.areas.includes('career'))
           {
            return true;
           }
           return false;
             });
        } ,
         hasHotels()
         {
            return this.$store.getters['hotels/hasHotels'];
         }
    },
    methods: {
        setFilters(updatedFilters){
         this.activeFilters= updatedFilters;
        }
    }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
