<template>
  <div id="app">
    <v-container grid-list-md text-xs-center>
        <form>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-btn @click="submitUser()">submit</v-btn>
        </form>
    </v-container>
    <table>
      <tr>
        <th v-for="(item, index) in header" :key="index">{{item}}</th>
      </tr>

      <tr v-for="(iii, i) in data" :key="i">
        <td>{{i+1}}</td>
        <td>{{iii.name}}</td>
        <td>{{iii.email}}</td>
      </tr>
    </table>
  </div>
  
</template>


<script>
import axios from 'axios'
import qs from 'qs';

export default {
  async created() {
    let tmp = await axios.get('http://localhost:5000/api/users')

    this.data = tmp.data 
  },
  data() {
    return {
      name: null,
      email: null,
      header: ['#', 'Name', 'E-mail'],
      data: []
    };
  },
  methods: {
    submitUser() {
      let params = {
        name: this.name,
        email: this.email
      }
      console.log(params)
      
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/users',
        data: params
      })

      this.getData
    },
    async getData() {
      this.data = []
      let tmp = await axios.get('http://localhost:5000/api/users')

      this.data = this.data.concat(tmp) 
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table {
  border-collapse: collapse;
  tr {
    
    th {
      border: 1px #ccc solid;
      width: 100px;
    }

    td {
      border: 1px #ccc solid;
      width: 100px;
    }
  }
}
</style>
