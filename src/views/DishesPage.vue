<script setup lang="ts">
import { ref } from 'vue'
import type { RecommendStatus, Dish, Restaurant } from '@/types.ts'
import { RecommendStatusList } from '@/constants.ts'


const dishList = ref<Dish[]>([])
const newDish = ref<Dish>({
  status: 'Хочу попробовать'
})

const addDish = () => {
  dishList.value.push({
    name: newDish.value.name,
    status: newDish.value.status,
  })
}
</script>

<template>
  <main>
    <pre>{{ newDish }}</pre>
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">Название блюда</label>
        <input name="dish-name" v-model="newDish.name" type="text">
      </div>
      <div>
        <label for="dish-status">Статус блюда</label>
        <select
          name="dish-status"
          id="dish-status"
          v-model="newDish.status"
        >
          <option
            v-for="status in RecommendStatusList"
            :key="status"
            :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit">Добавить блюдо</button>
    </form>
    <ul>
      <li
        v-for="dish in dishList"
        :key="dish.name">
        {{ dish.name }} - {{ dish.status }}
      </li>
    </ul>
  </main>
</template>
