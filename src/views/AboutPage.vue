<template>
  <div class="about">
    <h1>Some notes about the monorepo app.</h1>
      <h4>Google Fonts</h4>
        <p>Roboto and the Material Design icons are loaded in the index.html file.</p>
        <p>Lora is imported in App.vue in the style section.</p>
        <p>display=swap:  "https://fonts.googleapis.com/css?family=Roboto&display=swap"  The browser will initially show a fallback font, then once the Google Font has downloaded it will swap the fonts.</p>

        <h5>Self-hosting</h5>
          <p>see: https://google-webfonts-helper.herokuapp.com/fonts and, by hand: https://www.granneman.com/webdev/coding/css/fonts-and-formatting/serving-google-fonts-your-own-server-correctly </p>
          <p>See also: https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d</p>

        <h5>Fancy subsetting tool</h5>
          <code>https://github.com/Munter/subfont</code>

        <h5>@font-face</h5>
        <p>The @font-face rule should be added to the stylesheet before any styles.
<code><pre>
@font-face {
  font-family: 'MyWebFont';
  font-display: swap;
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}
</pre></code></p>

      <h4>Global Components</h4>
      <p>globally import base components in your app’s entry file (e.g. src/main.js):</p>
      <p>Remember that global registration must take place before the root Vue instance is created (with new Vue)</p>

      <h4>Miscellaneous Components.</h4>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>