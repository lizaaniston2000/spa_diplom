<template>
  <div>
    <h1>Адміністративна панель</h1>
     <table>
            <tr><th>Фотографія</th><th></th><th></th><th></th></tr>
            <tr v-for="s in students" v-bind:key="s._id">
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/news/' + s._id">{{s.news_name}}</router-link></td>
                <td v-else><input type="text" v-model="c_name"></td>
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/news/' + s._id">{{s.src}}</router-link></td>
                <td v-else><input type="text" v-model="c_photo"></td>
                <!--<td v-if="!check(s._id)">{{s.group}}</td>
                <td v-if="check(s._id)"><input type="checkbox" v-model="c_isDonePr"></td>
                <td v-else><input type="checkbox" v-model="s.isDonePr"></td>
                <td v-if="!check(s._id)">{{s.mark}}</td>
                <td v-else><input style="width:40px" type="number" v-model="c_mark"></td> -->
                <td><a href="#" v-on:click.prevent="remove_student(s._id)">Видалити</a></td>
                <td><img v-on:click.prevent="change_init(s._id)" src="https://img.icons8.com/office/50/000000/pencil.png" style="width:20px;">
                <button v-if="check(s._id)" v-on:click="change_student()">Змінити</button>
                </td>
            </tr>
        </table>
        <form>
            <input type="text" v-model="n_name" placeholder="">
 
            <input type="text" placeholder="посилання на фото" v-model="n_photo">
            <button v-on:click.prevent="new_student()">ок</button><br>
        </form>
  </div>  
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vuex from 'vuex';
    Vue.use(VueAxios, axios, Vuex)

export default {
    data: function (){
    return{
         mount: false,
         regions: null,
         students: [],
         search:'',
         n_photo: '',
         n_name: '',
         c_name: '',
         c_photo:'',
         ch: '',
         n: '',
         style: ''
        }
    },	 
    mounted: function(){
        Vue.axios.get("http://localhost:3000/api/news").then((response)=>{
            console.log(response.data);
            this.students = response.data;
        })
        .then(()=>{
            console.log(this.students.length);
        });

    },
    methods: {
    new_student: function(){
        let st = new Object;
            st.src = this.n_photo;
            st.news_name = this.n_name;
            Vue.axios.post("http://localhost:3000/api/news", {
                src: this.n_photo,
                news_name: this.n_name,
            })
            .then((response)=>{
                st._id=response.data._id;
                console.log(response.data);
            })
        this.students.push(st);
        this.n_photo = '';
        this.n_name = '';
        },
        remove_student : function(student){
            Vue.axios.delete("http://localhost:3000/api/news/"+student, {})
            .then((response)=>{
                 console.log(response.data);
            })
                this.students=this.students.filter(element=>{
                return element._id!==student;});
            },
        change_init : function(student){
            this.ch = student;
            this.n = this.students.find(function(element){
                return element._id==student;
            });
            this.c_name = this.n.news_name;
            this.c_photo=this.n.src;
        },
        check(student){
            if(student == this.ch)
            {
                return true;
            }
        },
        change_student: function(){
            Vue.axios.put("http://localhost:3000/api/news/"+this.ch, {
                news_name: this.c_name,
                src: this.c_photo,
            })
            .then((response)=>{
                this.n.news_name = this.c_name;
                this.n.src=this.c_photo;
            });
        this.ch=''; 
        }  
    },
    computed: {
    }
}

</script>
<style>
table{
    border: 1px solid #4289f4;
}
tr{
    border: 1px solid #4289f4;
}
td{
    border: 1px solid #4289f4;
    padding: 3px;
}
th{
    border: 1px solid #4289f4;
    padding: 3px;
}
.black{
    background: #fdd3d3;
}
.white{
    background: rgb(255, 255, 255);
}
</style>