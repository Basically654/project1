<script setup>
import { videogames } from '../components/VideogamesList'
</script>

<template>
    <h1>
        Videogames I have played!
    </h1>
    <ul>
        <li v-for="videogame in videogames" :key="videogame.id">
            {{ videogame.title }}
        </li>
    </ul>
    <img className ="image-videogames" src="../../public/images/terraria.jpg" alt="Harry Potter and the Half Blood Prince"/>
</template>