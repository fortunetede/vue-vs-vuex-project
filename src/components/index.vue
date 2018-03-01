<template>
    <div id="index">
        <h3>Posts</h3>
        <ul>
            <li v-for="post in ageDivider">
                <span>{{ post.name }}</span>
                <span>{{ post.age }}</span>
                <span>{{ post.sex }}</span>
            </li>
        </ul>
        <button v-on:click="reduceAge(4)">Reduce Age</button>
    </div>
</template>

<script>
    
    export default {
        computed:{
            posts(){
                return this.$store.state.posts
            },
            ageDivider(){
                return this.$store.getters.ageDivider
            }
        },
        methods: { 
            reduceAge:function(amount){
                return this.$store.dispatch('substratAge', amount);
            }
        }
    }
</script>