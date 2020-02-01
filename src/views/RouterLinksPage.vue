<template>
  <div class="routerLinksPage">
    <h3>The Router Links Page</h3>
    <h5>Motivation.</h5>
    <p>If the standard VueCLI-generated application includes Vue router, the App.vue file contains this template:
<pre><code>
  &lt;div id="app">
    &lt;div id="nav">
      &lt;router-link to="/">Home&lt;/router-link> |
      &lt;router-link to="/about">About&lt;/router-link>
    &lt;/div>
    &lt;router-view/>
  &lt;/div>

</code></pre>
    But <code>div#nav</code> violates the DRY principle as it repeats the contents of the <code>router/index.js</code> file.
    </p>
    <p>It would be superior to have a component which reads the route array and generates the <code>&lt;router-link&gt;</code> elements because any changes to the routes would be reflected in the series of links.</p>
    <p>Three items of configuration are available.  First, since the text of the <code>&lt;router-link&gt;</code> may be independent of any other route value, it needs to be specified in a new route property: <code>linkText: "Foo Bar"</code>. Second, if a route is to be omitted from the series of links, the linkText property of the route is either omitted or set to the value <code>undefined</code>. Finally, the string which should separate the links, if different from the default (" | "), may be specified in the <code>delimiter</code> prop of the component.
    </p>
    <p>Here's an example with the delimiter " ** ":</p>
    <br />
    <span class="rlExample"><RouterLinks delimiter=" ** "></RouterLinks></span>
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
  font-family: 'Monaco', monospace;
  padding: 0 1em;
  background-color: #D1D1D0;
  overflow: auto;
}
code {
  font-family: Monaco, monospace;
  font-size: 1.5rem;
  line-height: 100%;
  /* background-color: #eee; */
  padding: 0.2em;
  letter-spacing: -0.05em;
  word-break: normal;
}
pre code {
  border: none;
  background: none;
  font-size: calc(1.5rem * 0.875);
  letter-spacing: normal;
  word-break: break-all;
}
.rlExample {
  text-align: center;
}
</style>