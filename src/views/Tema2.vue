<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de Medición
    
    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p(data-aos="fade-up") El informe de medición de variables ambientales del agroecosistema es un documento escrito que describe el proceso de recolección de datos mediante un plan de muestreo, presenta los resultados obtenidos y ofrece conclusiones relevantes para la toma de decisiones en relación con el <b>plan de manejo del agroecosistema.</b>
            p.mb-0(data-aos="fade-up") Este informe debe comunicar de manera clara y visual (mediante gráficos y tablas) las características ambientales observadas, contribuyendo a evaluar el estado del sistema y a proponer mejoras en su gestión.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Elementos básicos del informe
      
    p.mb-4 A continuación, se detallan los componentes esenciales que debe incluir un informe de medición ambiental:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Alcance de la medición")
            p Define las <b>variables a medir</b>, el objetivo de la medición, las <b>limitaciones</b> del estudio (lo que puede y no puede medirse), la localización del agroecosistema, el <b>tipo de equipos</b> utilizados, la duración del proceso, entre otros aspectos clave.
          div(titulo="Plan de muestreo")
            p Detalla las variables y condiciones específicas del muestreo. En algunos casos, se recomienda realizar una <b>visita preliminar</b> para diseñar un plan que contemple todas las variables y condiciones del sitio. Debe seguir lineamientos como los establecidos en el <b>Protocolo de Monitoreo y Seguimiento del Agua (IDEAM, 2021)</b>, que incluye condiciones técnicas específicas según el tipo de muestra (agua, suelo, etc.).
          div(titulo="Resultados de la medición")
            p Presenta la información procesada a partir de los registros. Es recomendable utilizar <b>tablas y gráficos</b> para facilitar la comprensión y el análisis. Llevar los registros en formato <b>digital o mixto</b> (papel-digital) mejora la organización y visualización de los datos.
          div(titulo="Análisis y conclusiones")
            p Los resultados deben ser <b>interpretados</b>, no solo presentados. El análisis permite tomar decisiones informadas sobre el manejo del suelo, agua y biodiversidad del agroecosistema. Las conclusiones deben estar <b>soportadas con bibliografía técnica y científica</b> que valide los hallazgos.
          div(titulo="Comparación con normativas")
            p En función del propósito de la medición, los resultados deben contrastarse con la <b>normatividad ambiental vigente</b>, lo cual permite identificar si se cumplen los límites permisibles establecidos para variables clave.
    
    p.mb-5 La presentación de resultados sin análisis no aporta valor suficiente para la gestión ambiental. Es esencial que los informes sean rigurosos, basados en evidencias y acompañados por referentes normativos y científicos. La interpretación adecuada de los datos permite identificar impactos positivos o negativos, proponer acciones correctivas y prevenir alteraciones importantes del agroecosistema, como cambios en la calidad del agua o la disminución de polinizadores.
    
    .titulo-sexto.color-acento-contenido
      h5 Table 1.
      span Ejemplo de variables ambientales a medir para comparar con normatividad
    
    .tabla-a.color-acento-botones.mb-5
      table
        caption Nota. Tomado de Resolución 631 de 2015 (Ministerio de Ambiente y Desarrollo Sostenible, 2015)
        thead.bg-color-8
          tr
            th.bg-color-7 Variables ambientales a analizar
            th.bg-color-7 Agroecosistema
            th.bg-color-7 Normatividad vigente
        tbody
          tr
            td.pst
              p.text-bold  Parámetros fisicoquímicos asociados a vertimientos puntuales de aguas residuales no domésticas - beneficio tradicional:
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 pH
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 DQO
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 DBO<sub>s</sub>
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Sólidos suspendidos totales (SST)
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Sólidos sedimentables
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Grasas y aceites
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Fósforo total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Nitrógeno total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Color real
            td.pst Finca cafetera con beneficio tradicional
            td.pst 
              p <b>Resolución 631 de 2015.</b> Establece los parámetros y valores límites permisibles en vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público.
              p <b>Artículo 9:</b> Parámetros fisicoquímicos a monitorear y sus valores límites máximos permisibles para aguas residuales no domésticas de actividades agroindustriales.
          tr
            td.pst
              p.text-bold  Parámetros fisicoquímicos asociados a vertimientos puntuales de aguas residuales no domésticas – producción de plátano y banano:
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 pH
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 DQO
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 DBO<sub>s</sub>
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Sólidos suspendidos totales (SST)
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Sólidos sedimentables
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Grasas y aceites
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Compuestos semivolátiles fenólicos
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Sustancias activas al azul de metileno
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Fósforo total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Nitrógeno total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Acidez total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Alcalinidad total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Dureza cálcica
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Dureza total
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 Color real
            td.pst Productora de plátano y banano
            td.pst 
              p <b>Resolución 631 de 2015.</b> misma que aplica para agroindustrias diversas. Incluye parámetros específicos para aguas residuales generadas por la producción de frutas como plátano y banano.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para una adecuada interpretación de los resultados de las variables ambientales, es necesario contrastarlos con los <b>límites permisibles establecidos por la normativa vigente.</b> En el material complementario, se encuentra disponible la <b>Resolución 631 de 2015</b>, la cual especifica los <b>valores límites por tipo de actividad</b>, especialmente relevantes cuando se analizan variables asociadas al <b>recurso hídrico</b>.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En caso de que el agroecosistema esté en proceso de certificación o aplicación a <b>sellos internacionales</b>, las variables a medir estarán determinadas por los <b>requisitos específicos del sello</b> (ambientales, de sostenibilidad o ecológicos), por lo que es fundamental revisar previamente los lineamientos correspondientes.
    
    .bg-full-width-1.bg-color-6
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                p Las conclusiones de los resultados son: 
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 •	Presentar los resultados a través de <b>gráficos de barras</b> u otras representaciones visuales (por ejemplo, porcentajes, distribuciones temporales o espaciales) permite observar de manera clara los órdenes o clases predominantes de individuos en el suelo o en otros elementos del agroecosistema.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 •	En mediciones relacionadas con el <b>agua</b>, los resultados pueden ser comparados con los <b>límites permisibles establecidos por la normativa</b> o evaluarse su comportamiento <b>a lo largo del tiempo</b>, especialmente si se programan muestreos periódicos.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 •	Para variables de <b>biodiversidad</b>, los datos permiten calcular <b>índices ecológicos</b> (como el de Shannon o Simpson), los cuales ayudan a estimar la calidad de un recurso específico y el estado de conservación del agroecosistema.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/6.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 2.1] Aspectos básicos de redacción del informe
    
    p.mb-5 La redacción técnica del informe debe responder a criterios formales que garanticen la claridad y validez del contenido. A continuación, se presentan los aspectos fundamentales según Fuentes (2003):

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.bg-color-8(titulo="Orden lógico" :icono="require('@/assets/componentes/2.svg')")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Orden lógico
            p.mb-0 Organizar el contenido en secciones claras y estructuradas, siguiendo la secuencia: introducción, alcance, plan de muestreo, resultados, análisis, conclusiones. Usar subtítulos numerados para cada sección.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/7.png', alt='Texto que describa la imagen')
      .py-4.py-md-5.bg-color-8(titulo="Coherencia" :icono="require('@/assets/componentes/2.svg')")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Coherencia
            p.mb-0 Las ideas y conclusiones deben estar <b>respaldadas por fuentes bibliográficas técnicas o científicas</b>, evitando contradicciones o afirmaciones no verificables.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/8.png', alt='Texto que describa la imagen')
      .py-4.py-md-5.bg-color-8(titulo="Consistencia" :icono="require('@/assets/componentes/2.svg')")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Consistencia
            p.mb-0 Mantener la uniformidad en el uso del <b>tiempo verbal</b> (por ejemplo, pasado para describir procedimientos ya realizados), una <b>sintaxis adecuada</b> y un vocabulario técnico apropiado.
          .col-md-5
            figure
              img(src='@/assets/curso/tema2/9.png', alt='Texto que describa la imagen')
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 2.2] Herramientas ofimáticas para elaboración del informe

    p.mb-5 En la elaboración de informes ambientales, el uso de herramientas ofimáticas no solo mejora la organización de los datos, sino que también permite analizarlos con mayor precisión y presentarlos de forma clara y profesional. A continuación, se presentan algunas de las más utilizadas en este proceso.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-5 A continuación se presenta un ejemplo del registro y análisis de resultados correspondientes a la variable ambiental pH.

    .row.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Table 2.
          span Ejemplo de hoja de cálculo 
    
        .tabla-a.color-acento-botones.mb-5.pst-1
          table
            thead.bg-color-8
              tr
                th.p-2.bg-color-7 No Muestreo
                th.p-2.bg-color-7 Resultados pH (unidades de pH)

            tbody
              tr
                td.p-1 1
                td.p-1 6,7
              tr
                td.p-1 2
                td.p-1 7,1
              tr
                td.p-1 3
                td.p-1 7
              tr
                td.p-1 4
                td.p-1 6,8
              tr
                td.p-1 5
                td.p-1 8,1
              tr
                td.p-1 6
                td.p-1 7,8
              tr
                td.p-1 7
                td.p-1 7,9
              tr
                td.p-1 8
                td.p-1 8,2
              tr
                td.p-1 9
                td.p-1 8,3
              tr
                td.p-1 10
                td.p-1 8,7
              tr
                td.p-1 11
                td.p-1 7,8
              tr
                td.p-1 12
                td.p-1 8

      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span  Ejemplo de gráfica de resultados de análisis de variable ambientales
    
        div.bg-color-4.p-5.tarjeta
          .row.justify-content-center
            .col-lg-12
              figure
                img(src='@/assets/curso/tema2/10.png', data-aos="zoom-in", alt='La gráfica muestra un ejemplo de comportamiento de una variable ambiental, la cual fue medida durante un año con frecuencia mensual, este tipo de gráficas pueden usarse con cualquier variable ambiental.')
    
    p.mb-5 Las herramientas digitales para presentación y socialización del informe son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Herramientas de presentación multimedia
              p Permiten elaborar presentaciones gráficas de los resultados obtenidos en la medición de variables ambientales, facilitando su exposición ante públicos técnicos o no especializados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Programas o herramientas en línea
              p Facilitan el envío, la edición colaborativa y la publicación del informe, así como su almacenamiento digital. Algunas plataformas están diseñadas para la digitalización de resultados, permitiendo compartir fácilmente el informe final con el cliente o solicitante.
    
      
          

          

</template>

<script>
export default {
  name: 'Tema2',
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
