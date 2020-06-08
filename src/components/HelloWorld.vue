<!--
 * @Author: your name
 * @Date: 2020-05-11 17:29:53
 * @LastEditTime: 2020-06-05 16:46:12
 * @LastEditors: zcy
 * @Description: In User Settings Edi
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      d For a guide and recipes on how to configure / customize this project,
      <img alt />
      <a
        href="https://cli.vuevuejsvuejsvuejsjs.org"
        rel="dddddd"
        target="_blank"
        >vue-cli documentation</a
      >
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <!-- 换行 -->
      <li>
        <a href="https:/ugin-router" rel="noopener" target="_blank">router</a>
      </li>
      <!-- br -->
      <br />
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" rel="noopener" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" rel="noopener" target="_blank"
          >Twfitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" rel="noopener" target="_blank">News</a>
      </li>
    </ul>
    <h3>EcosysdEcosysddtemEcosysddtemEcosysddtemdtem</h3>
    <ul>
      <li>
        <a
          href="https://router.vuvuejsejsvuejs.org"
          rel="noopener"
          target="_blank"
          >vue-router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          rel="noopener"
          target="_blank"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    test() {
      let obj = { a: 2, b: 12 }
      console.log(obj)
      const x = obj + 5
      console.log(x)

      let obdj = { foo: 42 }
      console.log(obdj)
      if (obj) {
        console.log(3324)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
