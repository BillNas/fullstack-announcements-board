<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">MEVN Announcements Board</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                    </li>
            </ul>
        </div>
</nav>
</div>
</template>

<script>
export default {
    name: "NavBar",
};

</script>
<style>

</style>
