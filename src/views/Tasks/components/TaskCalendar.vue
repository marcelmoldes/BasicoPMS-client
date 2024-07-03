<script setup>
import { ScheduleXCalendar } from "@schedule-x/vue";
import {
  createCalendar,
  viewDay,
  viewWeek,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";

import axios from "axios";
import { onBeforeMount, defineProps, ref } from "vue";

const props = defineProps(["user"]);
//const emit = defineEmits('')
let calendarApp;

const loaded = ref(false);

onBeforeMount(async () => {
  const response = await axios.get(
    process.env.VUE_APP_API_URL + "/tasks/calendar",
    {
      headers: {
        Authorization: props.user ? "Bearer " + props.user.token : null,
      },
    }
  );
  calendarApp = createCalendar({
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    defaultView: viewMonthGrid.name,
    events: response.data,
    callbacks: {
      //      onEventClick(event) {
      //
      //      },
    },
  });
  loaded.value = true;
});
</script>

<template>
  <div>
    <ScheduleXCalendar :calendar-app="calendarApp" v-if="loaded" />
  </div>
</template>
