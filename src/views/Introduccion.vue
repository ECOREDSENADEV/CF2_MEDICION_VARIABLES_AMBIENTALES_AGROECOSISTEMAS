<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width-1.bg-fondo-1.mb-5
      .px-4.p-md-5
        .row.mb-3
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") La medición de variables ambientales en agroecosistemas es una herramienta fundamental para evaluar el estado del entorno y determinar los efectos de las prácticas agrícolas sobre el suelo, el agua y la biodiversidad. Esta información se recopila mediante registros que permiten documentar datos precisos y verificables sobre distintas condiciones ambientales, cumpliendo con protocolos técnicos establecidos. Dichos registros son la base para elaborar informes que facilitan la toma de decisiones en los planes de manejo sostenible.
        
            
            .row.align-items-start(data-aos="fade-left")
              .col-lg-5.me-0.pe-0
                img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
              .col-lg-7.bg-color-1.p-4.ms-0.h-100
                p.mb-1 El adecuado diligenciamiento de los registros garantiza que la información recolectada sea útil, veraz y trazable. Existen distintos tipos de registros según el tipo de variable, la frecuencia de medición y el medio en que se recopilan los datos (físico, digital o mixto). Además, los formatos deben adaptarse a las características del agroecosistema y a los objetivos del estudio. Por lo tanto, la construcción y uso de estos registros exige un enfoque técnico y sistemático.
        
        p Una vez recopilados los datos, es esencial organizarlos y analizarlos adecuadamente para presentarlos en informes técnicos. Estos informes no solo describen los resultados, sino que permiten identificar patrones, evaluar impactos, cumplir con normativas vigentes y formular recomendaciones basadas en evidencia. El uso de herramientas ofimáticas y una redacción coherente y estructurada son claves para comunicar los hallazgos de forma clara y efectiva.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
