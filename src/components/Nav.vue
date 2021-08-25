<template>
    <!-- Đây là sử dụng router bình thường nhưng xem trên (RHP Team Youtube ) 
        thì nên sử dụng theo name vì khi mình thay đổi đường dẫn router thì nó không ảnh hưởng gì 
    -->
    <!-- <router-link to='/'>Home</router-link> &nbsp; &nbsp;
    <router-link to='/about'>About</router-link> &nbsp; &nbsp;
    <router-link to='/transaction'>Transaction</router-link> -->

    <router-link :to="{name: 'home-router' }">Home</router-link> &nbsp; &nbsp;
    <router-link :to="{name: 'form-router' }">Form</router-link> &nbsp; &nbsp;
    <router-link :to="{name: 'about-router' }">About</router-link> &nbsp; &nbsp;
    <router-link :to="{name: 'transaction-router' }">Transaction</router-link>&nbsp; &nbsp;
    <router-link :to="{name: 'transactionv2-router' }">Transaction Version 2</router-link>
</template>