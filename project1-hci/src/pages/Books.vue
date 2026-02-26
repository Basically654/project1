<script setup>
import { books } from '../components/BooksList'
</script>

<template>
    <h1>
        Books I have read!
    </h1>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.title }}
        </li>
    </ul>
    <img className ="image-books" src ="../../public/images/half-blood-prince.jpg" alt="Harry Potter and the Half Blood Prince"/>
</template>