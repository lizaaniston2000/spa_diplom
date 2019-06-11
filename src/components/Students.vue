<template>
   <div v-bind:class="style">
        <p><input name="s" type="radio" value="black" v-model="style">Темний</p>
        <p><input name="s" type="radio" value="yellow" v-model="style">Світлий</p>
        <button v-on:click="set_style()">ok</button><br>
        <p>Пошук <input type="text" v-model="search"></p><p> К-сть студентів: {{Student_Count}}</p>
        <table>
            <tr><th>Фотографія</th><th>Ф.І.О</th><th>Група</th><th>Здав пр</th><th>Оцінка</th><th>Видалити</th><th>Змінити</th></tr>
            <tr v-for="s in students" v-bind:style="(s.name.toUpperCase().includes(search.toUpperCase()))&&(search!='')?'background:yellow':'' " v-bind:key="s._id">
                <td><a v-bind:href="s.photo">{{s.photo}}</a></td>
                <td v-if="!check(s._id)"><router-link id="s._id" v-bind:to="'/students/' + s._id">{{s.name}}</router-link></td>
                <td v-else><input type="text" v-model="c_name"></td>
                <td v-if="!check(s._id)">{{s.group}}</td>
                <td v-else>
                    <select v-model="c_group">
                        <option value="RPZ1">RPZ1</option>
                        <option value="RPZ2">RPZ2</option>
                    </select>
                </td>
                <td v-if="check(s._id)"><input type="checkbox" v-model="c_isDonePr"></td>
                <td v-else><input type="checkbox" v-model="s.isDonePr"></td>
                <td v-if="!check(s._id)">{{s.mark}}</td>
                <td v-else><input style="width:40px" type="number" v-model="c_mark"></td>
                <td><a href="#" v-on:click.prevent="remove_student(s._id)" v-show="s.group==getCurrentUser.group">Видалити</a></td>
                <td><img v-on:click.prevent="change_init(s._id)" src="https://img.icons8.com/office/50/000000/pencil.png" style="width:20px;">
                <button v-if="check(s._id)" v-on:click="change_student()">Змінити</button>
                </td>
            </tr>
        </table>
        <form>
            <input type="text" v-model="n_name" placeholder="Ім'я Фамілія">
            <select v-model="n_group">
                <option disabled value="">Група</option>
                <option>RPZ1</option>
                <option>RPZ2</option>
            </select>
            <input type="number" placeholder="оцінка" min="0" max="5" v-model="n_mark" style="width:60px">
            <input type="checkbox" v-model="n_isDonePr">Здав ПР
            <button v-on:click.prevent="new_student()">ок</button><br>
            <select v-if="mount"> 
            <option v-bind:key="region._id" v-for="region in regions.data">{{region.Description}}</option>
            </select>
        </form>   
   </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import Vuex from 'vuex';
    import store from '../store.js'
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
         n_group: '',
         n_mark: '',
         n_isDonePr: false,
         c_name: '',
         c_group: '',
         c_mark: 0,
         c_isDonePr: false,
         ch: '',
         n: '',
         style: ''
        }
    },	 
    mounted: function(){
        this.style = this.$store.getters.getStyle;
        Vue.axios.get("http://46.101.212.195:3000/students").then((response)=>{
            console.log(response.data);
            this.students = response.data;
        })
        .then(()=>{
            this.$store.commit('setCount',this.students.length);
            console.log(this.students.length);
        });
        Vue.axios.post("https://api.novaposhta.ua/v2.0/json/",
        {
            "apiKey": "a7e789fde9d8eb6561e499f1adc0e6d3",
            "modelName": "Address",
            "calledMethod": "getAreas",
            "methodProperties": {}
        })
        .then((response)=>{
            this.regions = response.data;
            this.mount=!this.mount;
        })
        

    },
    methods: {
    set_style: function(){
        this.$store.commit('setStyle',this.style);
    },
    new_student: function(){
        this.n_photo="https://robohash.org/"+this.n_name;
        let st = new Object;
            st.photo = this.n_photo;
            st.name = this.n_name;
            st.group = this.n_group;
            st.mark = this.n_mark;
            st.isDonePr = this.n_isDonePr;
            Vue.axios.post("http://46.101.212.195:3000/students", {
                photo: this.n_photo,
                name: this.n_name,
                group: this.n_group,
                mark: this.n_mark,
                isDonePr: (this.n_isDonePr!=false) ? true : false
            })
            .then((response)=>{
                st._id=response.data._id;
                console.log(response.data);
                this.$store.commit('increment');
            })
        this.students.push(st);
        this.n_photo = '';
        this.n_name = '';
        this.n_group = '';
        this.n_mark = '';
        this.n_isDonePr = '';
        },
        remove_student : function(student){
            Vue.axios.delete("http://46.101.212.195:3000/students/"+student, {})
            .then((response)=>{
                this.$store.commit('decrement');
            })
                this.students=this.students.filter(element=>{
                return element._id!==student;});
            },
        change_init : function(student){
            this.ch = student;
            this.n = this.students.find(function(element){
                return element._id==student;
            });
            this.c_name = this.n.name;
            this.c_group = this.n.group;
            this.c_mark = this.n.mark;
            this.c_isDonePr = this.n.isDonePr;
        },
        check(student){
            if(student == this.ch)
            {
                return true;
            }
        },
        change_student: function(){
            Vue.axios.put("http://46.101.212.195:3000/students/"+this.ch, {
                name: this.c_name,
                group: this.c_group,
                mark: this.c_mark,
                isDonePr: this.c_isDonePr
            })
            .then((response)=>{
                this.n.name = this.c_name;
                this.n.group = this.c_group;
                this.n.mark = this.c_mark;
                this.n.isDonePr = this.c_isDonePr;
            });
        this.ch=''; 
        }  
    },
    computed: {
        getCount: function() {
            return this.$store.getters.getCount
        },
        getCurrentUser: function() {
            return this.$store.getters.getUser
        },
        Student_Count: function() {
        return this.$store.getters.getCount;
        }}
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
