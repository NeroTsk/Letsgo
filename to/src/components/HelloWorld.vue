<template>

  
  <div class="card-body">
    <header>
      <div class="container"> 
          <div>
            <img src="@/assets/lets.png" 
              alt="the lets logo" 
              class="image">
          </div>
          <div> 
            Welcome
          </div>
      </div>
    </header>
    <div class="text-center">
      
        <div class="form" id="create">
          <h1 class="title"> ToDo</h1>
          <h3 class="title">{{ menssagem | capitalize }}</h3>
          <input 
            type="text" 
            placeholder="what you need done?" 
            id="textto" 
            class="cr-todo"
            v-model="text"
          >
          <br>
          <br>
          <button 
            class="button"
            id="crt"
           onclick="confirmCriar"
            @click="addTask"
           >   Create Task
           </button>
        </div>       

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
              class="button"
              id="del"
              @click="removeTask(index)"
            >
              Remove Task
            </button>
          </li>
          <br>
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
</div>

</template>


<script>
export default {
  filters: {
    capitalize: function(value) {
      return value 
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

  mounted(){
    this.$snotify.async('Called with promise', 'Success async', () => new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        title: 'Success!!!',
        body: 'We got an example success!',
        config: {
          closeOnClick: true
        }
      }), 2000);
    }));
  },

  methods: {
    
    addTask() {
      
      if (this.text.length) {
      const newTask = {
        text: this.text,
        check: false
      }
      
      this.itens.push(newTask)
      this.text = ''
      }
    },
    removeTask(index) {
      this.itens.splice(index, 1)
      console.log(index)     
    }
  },
}
</script>

<style scoped>


.container {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    font-size: 300%;    
    color: rgba(52, 156, 175, 0.795);
    z-index: 20;
    right: 0;
    height: 3.6rem;
    fill-opacity: 0.4 ;
    box-sizing: border-box;
    
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
.form {

}  

.cr-todo {
  width: 350px;
  height: 60px;
  border-radius: 4px;
  border-color:rgb(193, 201, 201);  
  box-shadow: 3px 6px 6px lightgrey;
  border-style:inherit; 
  margin: auto;
  font-size: 20px;
}
.image {
  width: 100px;
  height: 50px;
  
}
.button {
  border-style: hidden;
  border-color: lightgrey;
  width: 90px;
  height: 25px;
  box-shadow: 3px 6px 6px lightgrey;
  color: white;
  border-radius: 12px;
  height: 50px;
  width: 100px;
  opacity: 0.6;
  transition: 0.5s;
  cursor: pointer;
  font-size: 15;

}
.button:hover{
  opacity: 1
}
#crt {
   background-color: darkcyan;
}
#del {
   background-color:firebrick;
}
ul li{
  list-style-type: none;
  
}

</style>




