<script setup lang="ts">
import { ref } from 'vue'
import type { RecommendStatus, Dish, Restaurant } from '@/types.ts'
import { RecommendStatusList } from '@/constants.ts'

const restaurantList = ref<Restaurant[]>([])
const newRestaurant = ref<Restaurant>({
  status: 'Хочу попробовать'
})

const addRestaurant = () => {
  restaurantList.value.push({
    name: newRestaurant.value.name,
    status: newRestaurant.value.status,
    dishes: []
  })
}
</script>

<template>
  <main>
    <pre>{{ newRestaurant }}</pre>
    <form @submit.prevent="addRestaurant">
      <div>
        <label for="restaurant-name">Название ресторана</label>
        <input name="restaurant-name" v-model="newRestaurant.name" type="text">
      </div>
      <div>
        <label for="restaurant-status">Статус ресторана</label>
        <select
          name="restaurant-status"
          id="restaurant-status"
          v-model="newRestaurant.status"
        >
          <option
            v-for="status in RecommendStatusList"
            :key="status"
            :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Добавить ресторан</button>
    </form>
    <ul>
      <li
        v-for="restaurant in restaurantList"
        :key="restaurant.name">
        {{ restaurant.name }} - {{ restaurant.status }}
      </li>
    </ul>
  </main>
</template>
