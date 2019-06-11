<template>
<div>
    <!--<div id="app">
        <router-view>-->
    <header class="header">
        <div class="navbar">
            <div class="container">
                <div class="navbar-wrap">
                    <img src="../assets/img/logo2.png">
                    <nav class="menu">
                        <ul class="menu__items">
                            <li><a href="#about_us">Про нас</a></li>
                            <li><a href="#camp_news">Новини</a></li>
                            <li><a href="#camp_team">Педагогічний склад</a></li>
                            <li><a href="#plan">Розклад дня</a></li>
                            <li><a href="#calendar_plan">Календар зміни</a></li>
                            <li><a href="#contact">Контакти</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="hero">
            <div class="hero-wrap"> 
                <div class="hero_text">
                    <img src="../assets/img/ship.png">
                    <h1><span class="blue">Море</span><br>незабутніх вражень...</h1>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section class="about_us" id="about_us">
            <article class="about_article">
                <header class="about_article-text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Про нас</h1>
                </header>
                <div class="container">
                    <div class="about_article-wrap">
                        <div class="group about_group">
                            <img src="../assets/img/sun.png">
                            <h1 class="group_text">Яскраве сонце</h1>
                        </div>
                        <div class="group about_group">
                            <img src="../assets/img/multi_sea.png">
                            <h1 class="group_text">Тепле море</h1>
                        </div>
                        <div class="group about_group">
                            <img src="../assets/img/friend.png">
                            <h1 class="group_text">Багато друзів</h1>
                        </div>
                        <div class="group about_group">
                            <img src="../assets/img/quest.png">
                            <h1 class="group_text">Ігри та квести</h1>
                        </div>
                        <div class="group about_group">
                            <img src="../assets/img/disko.png">
                            <h1 class="group_text">Запальні дискотеки</h1>
                        </div>
                    </div>
                </div>    
            </article>
            <article class="about_camp">
                <div class="container">
                    <div class="about_camp-wrap">
                        <img src="../assets/img/camp_leader.jpg">
                        <article>
                            <header class="camp_text">
                                <span class="blue pre_title">табір "Ювілейний"</span>
                                <h1 class="title">Про нас</h1>
                            </header>
                            <div class="words camp_words">
                                <p class="words_paragraph">
                                    <span class="blue">"Ювілейний"</span> - це велика дружня родина!<br>
                                    Ми даруємо тобі незабутні спогади, щасливу посмішку та щирі емоції.<br>
                                    Талановиті, креативні та найкращі вожаті не дадуть тобі сумувати.<br>
                                    Тож, не зволікай <br>
                                    У "Юбік" поспішай!
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </article>
        </section>
        <section class="capm_news" id="camp_news">
            <article class="news_article">
                <header class="news_article_text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Новини</h1>
                </header>
                <div class="container">
                    <div class="news_article-wrap">
                        <div class="news_article-date date">
                            <img src="../assets/img/pirozhkov.jpg">
                            <p class="date_text"><span class="blue">У "Ювілейний" завітали справжні зірки!</span><br>
                                Приголомшивими номерами від Дзідзьо, Артура Пірожкова, Світлани Лободи та інших <br>
                                був здивован кожен! <br>
                                <a href="">[Читати далі...]</a>
                            </p>
                        </div>
                        <div class="news_article-date date" v-for="mynew in news" :key="mynew.id">
                            <img :src="mynew.src">
                            <p class="date_text"><span class="blue">{{ mynew.news_name }}</span><br>
                                    {{ mynew.news_item }}
                                 <br>
                                <a href="">[Читати далі...]</a>
                            </p>
                        </div>
                        <div class="news_article-date date">
                            <img src="../assets/img/pirozhkov.jpg">
                            <p class="date_text"><span class="blue">У "Ювілейний" завітали справжні зірки!</span><br>
                                Приголомшивими номерами від Дзідзьо, Артура Пірожкова, Світлани Лободи та інших <br>
                                був здивован кожен! <br>
                                <a href="">[Читати далі...]</a>
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="camp_team" id="camp_team">
            <article class="team_list">
                <header class="team_list-text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Педагогічний склад</h1>
                </header>
                <div class="container">
                    <div class="team_list-wrap">
                        <div class="pedagog team_list-pedagog">
                            <div class="pedagog_photo">
                                <img src="../assets/img/first_ped.jpg" alt="">
                            </div>
                            <p class="pedagog_name">Науменко Наталія Юріївна</p>
                            <span class="blue">Вихователь</span>
                            <p class="pedagog_text">Найкращий вихователь 1 загону. Віддана своїй роботі та чуйна до дітей</p>
                            <hr>
                            <div class="pedagog_logo">
                                <i class="fab fa-telegram-plane"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                        <div class="pedagog team_list-pedagog">
                            <div class="pedagog_photo">
                                <img src="../assets/img/second_ped.jpg" alt="">
                            </div>
                            <p class="pedagog_name">Хамаєва Наталія Сергіївна</p>
                            <span class="blue">Вожата</span>
                            <p class="pedagog_text">1 загону не доведеться сумувати з цією креативною та цікавою вожатою</p>
                            <hr>
                            <div class="pedagog_logo">
                                <i class="fab fa-telegram-plane"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                        <div class="pedagog team_list-pedagog">
                            <div class="pedagog_photo">
                                <img src="../assets/img/third_ped.jpg" alt="">
                            </div>
                            <p class="pedagog_name">Ступак Олена Миколаївна</p>
                            <span class="blue">Вихователь</span>
                            <p class="pedagog_text">Найдобріший та улюбленний вихователь 2 загону</p>
                            <hr>
                            <div class="pedagog_logo">
                                <i class="fab fa-telegram-plane"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                        <div class="pedagog team_list-pedagog">
                            <div class="pedagog_photo">
                                <img src="../assets/img/fourth_ped.jpg" alt="">
                            </div>
                            <p class="pedagog_name">Косенко Єлизавета Андріївна</p>
                            <span class="blue">Вожата</span>
                            <p class="pedagog_text">З цією вожатою ваш загін буде непереможною, сильною та дружною командою! </p>
                            <hr>
                            <div class="pedagog_logo">
                                <i class="fab fa-telegram-plane"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="plan" id="plan">
            <article class="day_plan">
                <header class="day_plan-text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Розклад дня</h1>
                </header>
                <div class="container">
                    <div class="day_plan-wrap">
                        <img src="../assets/img/London.png" alt="">
                        <div class="plan">
                            <p>08:00 — 08:30   <span class="blue">Підйом</span></p>
                            <p>08:30 — 08:45   <span class="blue">Зарядка</span></p>
                            <p>08:45 — 09:00   <span class="blue">Планування дня у загонах</span></p>
                            <p>09:00 — 09:45   <span class="blue">Сніданок</span></p>
                            <p>10:00 — 11:30   <span class="blue">Пляж</span></p>
                            <p>11:45 — 12:45   <span class="blue">Спорт, ігри, репетиції</span></p>
                            <p>13:00 — 13:45   <span class="blue">Обід</span></p>
                            <p>14:00 — 16:00   <span class="blue">Після обідній сон</span></p>
                            <p>16:30 — 16:45   <span class="blue">Полдник</span></p>
                            <p>17:00 — 18:00   <span class="blue">Пляж</span></p>
                            <p>17:00 — 18:30   <span class="blue">Спорт,ігри, репетиції</span></p>
                            <p>19:00 — 19:45   <span class="blue">Вечеря</span></p>
                            <p>20:00 — 21:00   <span class="blue">Вечірній захід</span></p>
                            <p>21:00 — 22:30   <span class="blue">Дискотека</span></p>
                            <p>21:30 — 22:00   <span class="blue">Друга вечеря у молодших загонах</span></p>
                            <p>22:00           <span class="blue">Відбій у молодших загонах </span></p>
                            <p>22:30 — 23:00   <span class="blue">Друга вечеря у cтарших загонах</span></p>
                            <p>23:00           <span class="blue">Відбій у старших загонах</span></p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="kalendar" id="kalendar_plan">
            <article class="kalendar_plan">
                <header class="kalendar_plan-text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Календар зміни</h1>
                </header>
                <div class="filter_form">
                    <input type="text" placeholder="Обери дату" class="input">
                    <button class="button"><span class="blue">Знайти</span></button>
                </div>
                <div class="container">
                    <div class="kalendar_plan-wrap">
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">День знайомств</span></h1>
                            <img src="../assets/img/img1.png" alt="">
                            <p>24.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Відкриття II зміни</span></h1>
                            <img src="../assets/img/img2.png" alt="">
                            <p>25.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Казковий квест</span></h1>
                            <img src="../assets/img/img3.png" alt="">
                            <p>26.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Конкурс відеокліпів</span></h1>
                            <img src="../assets/img/img6.png" alt="">
                            <p>27.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Квест "Голодні ігри"</span></h1>
                            <img src="../assets/img/img4.png" alt="">
                            <p>28.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Шалений зоопарк</span></h1>
                            <img src="../assets/img/img5.png" alt="">
                            <p>29.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Свято морозива</span></h1>
                            <img src="../assets/img/img9.png" alt="">
                            <p>30.06.2019</p>
                        </div>
                        <div class="event kalendar_card">
                            <h1 class="event_name"><span class="blue">Віденський бал</span></h1>
                            <img src="../assets/img/img8.png" alt="">
                            <p>01.07.2019</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="contact" id="contact">
            <article class="contact_us">
                <header class="contact_us-text">
                    <span class="blue pre_title">табір "Ювілейний"</span>
                    <h1 class="title">Контакти</h1>
                </header>
                <div class="container">
                    <div class="contact_us-wrap">
                        <div class="coordinate contact-coordinate">
                            <img src="../assets/img/phone_cnt.png" id="phn">
                            <p class="coordinate_text">Телефон: (093) 432-2310</p>
                        </div>
                        <div class="coordinate contact-coordinate">
                            <img src="../assets/img/Pointer.png">
                            <p class="coordinate_text">Курортна вулиця, 15<br>
                                Приморськ <br>
                                Запорізька область</p>
                        </div>
                        <div class="coordinate contact-coordinate">
                            <img src="../assets/img/Envelope.png" id="env">
                            <p class="coordinate_text">support@yourname.com</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
    <footer class="footer">
        <div class="footer_wrap">
            <div class="description footer_description">
                <div>
                    <i class="fab fa-telegram-plane"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i> 
                </div>
                <span class="blue">
                    developed by Kosenko @2018
                </span>
            </div>
        </div>
    </footer>
        <!--</router-view>
    </div>-->
    </div>
</template>

<style>
    
</style>

<script>
import Vue from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      news: []
    };
  },
  mounted: function() {
    Vue.axios.get("http://localhost:3000/api/news").then((response) => {
        this.news = response.data
    })
   }
  };
</script>