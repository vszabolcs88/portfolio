<template>
    <NavBar/>
    <h2 class="text-h4 font-weigh-medium text-center text-uppercase my-12">
      {{title}}
    </h2>
    <Project/>
    <Footer/>
</template>

<script>
export default {
    data() {
        return {
            title: "portfolio"
        }
    }
}
</script>