<template>
  <div class="ToDo text-center">
    <img src="@/assets/lets.png" alt="the lets logo" class="image">
    <h1 class="title"> to do list</h1>
    <h3 class="title">{{ menssagem | capitalize }}</h3>
    <div id="create">
      <input 
        type="text" 
        placeholder="write here what need should be done" 
        id="textto" 
        class="cr-todo"
        v-model="text"
      >
    </div>

    <button 
      class="sub"
      @click="addTask"
    >
      Create Task
    </button>

    <ul 
      id="itens"
    >
      <li 
        v-for="(item, index) in itens"
        v-show="item.check === filterTasksByCheck || filterTasksByCheck === null"
      >
      <input 
        type="checkbox"
        v-model="item.check"
      >
        {{ item.text }}
        <button
          class="unsub"
          @click="removeTask(index)"
        >
          Remove Task
        </button>
        
      </li>
      <select
        v-model="filterTasksByCheck" 
      >
        <option :value="null">--</option>
        <option :value="true">Done</option>
        <option :value="false">Undone</option>
      </select>
      {{filterTasksByCheck}}
    </ul>
</div>

</template>


<script>
export default {
  filters: {
    capitalize: function(value) {
      return value.toUpperCase()    
    }
  },

  data() {
    return {
      text: '',
      menssagem: 'Insert your things you need do',
      itens:[],
      filterTasksByCheck: null

    }
  },


  methods: {
    addTask() {
      const newTask = {
        text: this.text,
        check: false
      }
      this.itens.push(newTask)
      this.text = ''
    },
    removeTask(index) {
      this.itens.splice(index, 1)
      console.log(index)     
    }
  },
}
</script>

<style scoped>
*{

  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h1 {
  font-size: 60px; 
  color:rgba(52, 156, 175, 0.795);
}
h3 {
  font-size: 30px;
   color: rgba(52, 156, 175, 0.795);
}
.text-center{
  
  text-align: center;
}
.cr-todo {
  width: 250px;
  height: 30px;
  border-color: lightgrey;  
  box-shadow: 3px 6px 6px lightgrey;
  border-style: ridge; 
  margin: auto;
}
.image {
  width: 250px;
  height: 150px;
}
.sub {
  border-style: hidden;
  border-color: lightgrey;
  width: 90px;
  height: 25px;
  box-shadow: 2px 5px 10px lavender;

}

</style>




