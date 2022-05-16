<template>
    <div>
        <h2>Home page</h2>
        <p>All removed items:</p>
        <ul>
            <li class="removed-items" v-for="item in allRemoved" :key="item.id">
                <span>{{item.title}}</span>
            </li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos eveniet excepturi expedita impedit numquam quae quas tenetur velit voluptas!</p>

        <router-link to="/todos">Todos</router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: mapGetters(["allRemoved"]),
}
</script>
