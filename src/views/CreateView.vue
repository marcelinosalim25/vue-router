<template>
  <div class="create">
    <h1>Create ToDo</h1>
    <form @submit.prevent="addTodo">
      <input v-model="todo.name" placeholder="Name" >
      <input v-model="todo.description" placeholder="Description" >
      <form @submit.prevent="addCategory">
        <input v-model="category" placeholder="categories" >
        <button type="submit">Add Category</button>
      </form>
      <div v-for="category in todo.categories" :key="category">
        {{ category }}
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import { collection, setDoc, doc } from 'firebase/firestore'
import db from '../firebase'

export default {
  data() {
    return {
      todo: {
        name: '',
        description: '',
        categories: [],
      },
      category: '',
    }
  },

  methods: {
    addCategory() {
      this.todo.categories.push(this.category);
      this.category = '';
    },

    addTodo() {
      (async () => {
        await setDoc(doc(collection(db, "todos")), this.todo);
      })();
    }
  }
}
</script>
