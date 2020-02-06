<template>
  <div class="routerLinksPage">
    <h3>The Router Links Page</h3>
    <h5>Motivation.</h5>
    <p>In a standard VueCLI-generated application which includes Vue router, the App.vue file contains this template:
<pre><code v-pre>
  &lt;div id="app">
    &lt;div id="nav">
      &lt;router-link to="/">Home&lt;/router-link> |
      &lt;router-link to="/about">About&lt;/router-link>
    &lt;/div>
    &lt;router-view/>
  &lt;/div>

</code></pre>
    which looks like this when rendered:
    <img alt="home|about links" src="../assets/Home|About.png" style="height: 1.8rem">
    <br />
    But the contents of <code>div#nav</code> violate the DRY principle as they repeat the paths from the <code>router/index.js</code> file. Ideally, magic-numbers and magic-strings appear only once in a codebase so that 1) multiple instances cannot be inconsistent and 2) they can be modified application-wide with a single edit.
    </p>
    <p>It would be superior to have a component which reads the route array and generates the <code>&lt;router-link&gt;</code> elements so that any changes to the routes would be reflected in the series of links.</p>
    <p>Three items of configuration are available.  First, since the text of the <code>&lt;router-link&gt;</code> may be independent of the value of any other route property, it needs to be specified in a new route property: <code>linkText: "Foo Bar"</code>. Second, if a route is to be omitted from the series of links, the linkText property of the route is either omitted or set to the value <code>undefined</code>. Finally, the string which should separate the links, if different from the default (" | "), may be specified in the <code>separator</code> prop of the component.
    </p>
    <p>Here's an example with the separator value of " ** ":</p>
    <br />
    <span class="rlExample">
      <RouterLinks separator=" ** "></RouterLinks>
    </span>
    <br />
    <p>Here's the entire contents of the single-file-component <code>.vue</code> file:</p>
    <div class="vuecode">
    <pre><code v-pre>
&lt;template>
  &lt;div class="routerLinks">
    &lt;template v-for="(link, idx) in linksArr">
      &lt;!-- `&lt;router-link>` will be rendered as an `&lt;a>` tag by default -->
      &lt;router-link :to="link[0]" :key="idx">{{link[1]}}&lt;/router-link>
      {{ idx == linksArr.length - 1 ? "" : separator }}
    &lt;/template>
  &lt;/div>
&lt;/template>

&lt;script>
  // version 1.2; 2-5-2020;
  // add at bottom of router/index.js: "export {routes}";
  // for each route to be included, add the new property:
  //     linkText: "Home",
  // to omit a route from the list, don't add a linkText property
  //     or or give linkText the value undefined;
  // div.routerLinks is required (template cannot be the root element;
  import { routes } from "@/router/index.js"
  export default {
    props: {
      separator: {
        type: String,
        default: " | "
      }
    },
    computed: {
      linksArr() {
        return routes.filter( route => route.linkText !== undefined)
          .map( (route) => [ route.path, route.linkText ])
      }
    }
  }
&lt;/script>

&lt;style lang="scss">
.routerLinks {
  a {
    font-weight: bold;
    color: #2c3e50;

    /* class is added to router-link anchor tag when active */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
&lt;/style>
    </code></pre>
    </div>
  </div>
</template>

<script>
  import RouterLinks from "@/components/RouterLinks.vue";

  export default {
    components: { RouterLinks } 
  }
</script>

<style scoped>
.routerLinksPage {
  font-family: Palatino, Times, "Times New Roman", Georgia, serif;
  max-width: 75rem;
  margin: 2rem;
  padding: 1rem 3rem 3rem 3rem;
  border: 3px solid crimson;
  border-radius: 10px;
}
h3 {
  font-size: 1.8rem;
  text-align: center;
}
h5 {
  font-size: 1.6rem;
  margin-block-end: 0.9rem;
}
p {
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-indent: 1rem;
  margin-block-start: 0;
  margin-block-end: 0.6rem;
}
pre {
  display: block;
  padding: 0 1em;
  border: 1px solid #bebab0;
  border-radius: 5px;
  background-color: #eee;
}
code {
  font-family: 'Courier New','Monaco', monospace;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.05em;
  word-break: normal;
}
pre code {
  overflow: auto;
  padding: 0.2em;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: normal;
  word-break: break-all;
}
.rlExample {
  text-align: center;
}
</style>