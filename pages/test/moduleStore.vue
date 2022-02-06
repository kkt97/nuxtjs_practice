<template>
  <div>
    <v-text-field
      v-model="todo"
      label="TODO Input">
    </v-text-field>
    <v-btn
      color="warning"
      @click="addTodo(todo)"
    >
      Store 저장!
    </v-btn>
    <v-btn
      color="warning"
      @click="clearTodo"
    >
      Store 비우기~
    </v-btn>
    <v-text-field
      v-model="todoListCount"
      label="TODO Count"
      disabled>
    </v-text-field>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Index
          </th>
          <th class="text-left">
            Todo
          </th>
          <th class="text-left">
            Delete
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(todo,idx) in todoList"
          :key="idx"
        >
          <td>{{ idx }}</td>
          <td>{{ todo }}</td>
          <td>
            <v-btn
              @click="removeTodo(idx)"
              color="danger">삭제
            </v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      todo: "",
    }
  },
  computed: {
    ...mapGetters({
      todoList: 'todo/getTodoList',
      todoListCount: 'todo/getTodoListCount'
    })
  },
  methods: {
    ...mapMutations({
      addTodo: 'todo/addTodo',
      removeTodo: 'todo/removeTodo',
      clearTodo: 'todo/clearTodo'
    }),
  }
}
</script>
