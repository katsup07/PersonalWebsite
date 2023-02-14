<template>
  <tr>
    <th scope="row">
      <a :href="pageLink">{{ appTitle }}</a>
    </th>
    <td>{{ date }}</td>
    <td><a :href="gitHubLink">code</a></td>
    <td>{{ note }}</td>
  </tr>
</template>
<script>
export default {
  name: "TableRow",
  props: {
    pageLink: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    appTitle: {
      type: String,
      required: true,
    },
    gitHubLink: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
  },
};
</script>
<style scoped>
td,
th {
  padding: 0.7rem;
  font-size: 0.8rem;
}

tr:nth-child(even),
tr:nth-child(even) td,
tr:nth-child(even) th {
  background-color: rgb(222, 222, 222);
  border-radius: 0.2rem;
}

@media screen and (max-width: 800px) {
  .categories th,
  td,
  th {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
  }
}
</style>
