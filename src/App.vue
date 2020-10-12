<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        // SEO
        {
          name: 'description',
          content: this.$static.metadata.siteDescription
        },
        // LinkedIn sharing
        {
          property: 'og:title',
          content: this.$static.metadata.siteName,
        },
        {
          property: 'og:image',
          content: this.$static.metadata.siteUrl + '/logo.png'
        },
        {
          property: 'og:description',
          content: this.$static.metadata.siteDescription
        },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl
        },
        // Twitter sharing
        {
          property: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: this.$static.metadata.siteName
        },
        {
          name: 'twitter.description',
          content: this.$static.metadata.siteDescription
        },
        {
          name: 'twitter:image',
          content: this.$static.metadata.siteUrl + '/logo.png'
        }
      ]
    }
  }
}
</script>
