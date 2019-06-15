<template>
  <div>
    <header class="about_article-text">
        <span class="blue pre_title">табір "Ювілейний"</span>
        <h1 class="title">Адміністративна панель</h1>
    </header>
    <center>
     <table>
            <tr><th>Заголовок</th><th>Посилання на фото</th><th>Текст</th><th>Видалення</th><th>Редагування</th></tr>
            <tr v-for="s in students" v-bind:key="s._id">
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/news/' + s._id">{{s.news_name}}</router-link></td>
                <td v-else><input type="text" v-model="c_name"></td>
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/news/' + s._id">{{s.src}}</router-link></td>
                <td v-else><input type="text" v-model="c_photo"></td>
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/news/' + s._id">{{s.news_item}}</router-link></td>
                <td v-else><input type="text" v-model="c_item"></td>
                <td><a href="#" class="delete_but" v-on:click.prevent="remove_student(s._id)">Видалити</a></td>
                <td><img id="penc" v-on:click.prevent="change_init(s._id)" src="https://img.icons8.com/office/50/000000/pencil.png" style="width:20px;">
                <button class="delete_but" v-if="check(s._id)" v-on:click="change_student()">Змінити</button>
                </td>
            </tr>
        </table>
    </center>
    <center>
        <form>
            <input type="text" class="input" v-model="n_name" placeholder="заголовок">
            <input type="text" class="input" placeholder="посилання на фото" v-model="n_photo">
             <input type="text" class="input" placeholder="текст" v-model="n_item">
            <button class="button" v-on:click.prevent="new_student()">ок</button><br>
        </form>
    </center>
    <center>
         <table>
            <tr><th>ПІБ</th><th>Посилання на фото</th><th>Посада</th><th>Інформація</th><th>Видалення</th><th>Редагування</th></tr>
            <tr v-for="teach in teaches" v-bind:key="teach._id">
                <td v-if="!check_teach(teach._id)"><router-link id="teach._id" v-bind:to="'/news/' + teach._id">{{teach.ped_name}}</router-link></td>
                <td v-else><input type="text" v-model="c_t_name"></td>
                <td v-if="!check_teach(teach._id)"><router-link id="teach._id" v-bind:to="'/news/' + teach._id">{{teach.src}}</router-link></td>
                <td v-else><input type="text" v-model="c_t_src"></td>
                <td v-if="!check_teach(teach._id)"><router-link id="teach._id" v-bind:to="'/news/' + teach._id">{{teach.ped_d}}</router-link></td>
                <td v-else><input type="text" v-model="c_t_d"></td>
                <td v-if="!check_teach(teach._id)"><router-link id="teach._id" v-bind:to="'/news/' + teach._id">{{teach.ped_info}}</router-link></td>
                <td v-else><input type="text" v-model="c_t_info"></td>
                <td><a href="#" class="delete_but" v-on:click.prevent="remove_teaches(teach._id)">Видалити</a></td>
                <td><img id="penc" v-on:click.prevent="change_init_teach(teach._id)" src="https://img.icons8.com/office/50/000000/pencil.png" style="width:20px;">
                <button class="delete_but" v-if="check_teach(teach._id)" v-on:click="change_teach()">Змінити</button>
                </td>
            </tr>
        </table>
    </center>
    <center>
        <form>
            <input type="text" class="input" v-model="n_t_name" placeholder="заголовок">
            <input type="text" class="input" placeholder="посилання на фото" v-model="n_t_src">
            <input type="text" class="input" placeholder="посада" v-model="n_t_d">
            <input type="text" class="input" placeholder="інформація про співробітника" v-model="n_t_info">
            <button class="button" v-on:click.prevent="new_teach()">ок</button><br>
        </form>
    </center>
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
         students: [],
         teaches:[],
         search:'',
         n_t_name:'',
         n_t_src:'',
         n_t_d:'',
         n_t_info: '',
         n_photo: '',
         n_name: '',
         n_item:'',
         c_name: '',
         c_photo:'',
         c_item:'',
         c_t_name:'',
         c_t_src:'',
         c_t_d:'',
         c_t_info: '',
         ch: '',
         ct: '',
         n: '',
         t: '',
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
         Vue.axios.get("http://localhost:3000/api/teach").then((response)=>{
            console.log(response.data);
            this.teaches = response.data;
        })
        .then(()=>{
            console.log(this.students.length);
        });
    },
    methods: {
    new_teach: function(){
        let tc = new Object;
            tc.src = this.n_t_photo;
            tc.ped_name = this.n_t_name;
            tc.ped_d=this.n_t_d;
            tc.ped_info=this.n_t_info;
            Vue.axios.post("http://localhost:3000/api/teach", {
                src: this.n_t_src,
                ped_name: this.n_t_name,
                ped_d:this.n_t_d,
                ped_info:this.n_t_info
            })
            .then((response)=>{
                tc._id=response.data._id;
                console.log(response.data);
            })
        this.teaches.push(tc);
        this.n_t_src = '';
        this.n_t_name = '';
        this.n_t_d='';
        this.n_t_info='';
        },
        new_student: function(){
        let st = new Object;
            st.src = this.n_photo;
            st.news_name = this.n_name;
            st.news_item=this.n_item
            Vue.axios.post("http://localhost:3000/api/news", {
                src: this.n_photo,
                news_name: this.n_name,
                news_item:this.n_item
            })
            .then((response)=>{
                st._id=response.data._id;
                console.log(response.data);
            })
        this.students.push(st);
        this.n_photo = '';
        this.n_name = '';
        this.n_item='';
        },
        remove_student : function(student){
            Vue.axios.delete("http://localhost:3000/api/news/"+student, {})
            .then((response)=>{
                 console.log(response.data);
            })
                this.students=this.students.filter(element=>{
                return element._id!==student;});
            },
        remove_teaches : function(teach){
            Vue.axios.delete("http://localhost:3000/api/teach/"+teach, {})
            .then((response)=>{
                 console.log(response.data);
            })
                this.teaches=this.teaches.filter(element=>{
                return element._id!==teach;});
            },
        change_init : function(student){
            this.ch = student;
            this.n = this.students.find(function(element){
                return element._id==student;
            });
            this.c_name = this.n.news_name;
            this.c_photo=this.n.src;
            this.c_item=this.n.news_item;
        },
        check(student){
            if(student == this.ch)
            {
                return true;
            }
        },
        change_init_teach: function(teach){
            this.ct = teach;
            this.t = this.teaches.find(function(element){
                return element._id==teach;
            });
            this.c_t_name = this.t.ped_name;
            this.c_t_src=this.t.src;
            this.c_t_d=this.t.ped_d;
            this.c_t_info=this.t.ped_info;
        },
        check_teach(teach){
            if(teach == this.ct)
            {
                return true;
            }
        },
        change_student: function(){
            Vue.axios.put("http://localhost:3000/api/news/"+this.ch, {
                news_name: this.c_name,
                src: this.c_photo,
                news_item:this.c_item
            })
            .then((response)=>{
                this.n.news_name = this.c_name;
                this.n.src=this.c_photo;
                this.n.news_item=this.c_item;
            });
        this.ch=''; 
        },
        change_teach: function(){
            Vue.axios.put("http://localhost:3000/api/teach/"+this.ct, {
                ped_name: this.c_t_name,
                src: this.c_t_src,
                ped_d:this.c_t_d,
                ped_info:this.c_t_info
            })
            .then((response)=>{
                this.t.ped_name = this.c_t_name;
                this.t.src=this.c_t_src;
                this.t.ped_d=this.c_t_d;
                this.t.ped_info=this.c_t_info;
            });
        this.ct=''; 
        }  
    },
    computed: {
    }
}

</script>
<style>
#penc{
    margin-left:36px;
}
table{
    border: 1px solid #4289f4;
    margin-top: 30px;
    border-collapse: collapse;
}
tr{
    border: 1px solid #4289f4;
}
td{
    border: 1px solid #4289f4;
    padding: 3px;
    height: 50px;
}
a{
    text-decoration:none;
    color:#000;
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
.delete_but{
    border: 1px solid #d3d3d3;
    padding: 10px 10px;
    outline: none;
    background-color:#fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    font-family: 'Pattaya', sans-serif;
    color:#008ed6;
}
form{
    margin-top:30px;
    padding-bottom: 20px;
}
</style>