<template>
    <div class="dashboard">
<h1>Welcome {{ user.user.name }}</h1>

<p>This is your email {{ user.user.email }}</p>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
      return {
            user: ""
        };
    },
    computed: mapGetters(["getUser"]),
    created() {
        this.user = this.getUser
    }
  };
  </script>