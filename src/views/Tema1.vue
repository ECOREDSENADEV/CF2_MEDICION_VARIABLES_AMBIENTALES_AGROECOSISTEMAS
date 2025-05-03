<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.bg-color-9 1
      h1 Registros para la medición de variables ambientales
    
    p.mb-5 Diligenciar los registros en la medición de variables ambientales dentro de un agroecosistema es un proceso fundamental para recopilar datos e información clave. La elaboración de los formatos o planillas debe estar alineada con lo estipulado en el plan de muestreo, considerando aspectos como la frecuencia de medición, los lugares, equipos utilizados, tipo de muestras y unidades de medición, entre otros. Es importante diferenciar dos elementos:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.bg-color-2.tarjeta
              img.custom-image-card__image(src="@/assets/curso/tema1/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Formato o Planilla
                p.mb-0 Instrumento de recolección de datos diseñado previamente a la medición.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.bg-color-2.tarjeta
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Registro
                p.mb-0 Formato ya diligenciado que constituye evidencia de un resultado o actividad realizada. Es un documento cerrado, no sujeto a cambios.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 #[span 1.1] Tipos de registros para la medición de variables ambientales
    
    p.mb-5 Los registros utilizados en la medición de variables ambientales pueden clasificarse según tres criterios: tipo de variable, frecuencia de la medición y medio de diligenciamiento. A continuación se presentan los tipos más comunes, especialmente relevantes para documentar los resultados del monitoreo ambiental conforme al procedimiento establecido.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Según el tipo de variable
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 <b>Registros cualitativos:</b> Recogen información valorada en forma de texto o palabras. Ejemplo: ¿Percibe un olor fétido en el agua? Respuestas: Sí / No / Otro olor ¿cuál?
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 <b>Registros cuantitativos:</b> Contienen datos expresados en cifras o valores numéricos. Ejemplo. Temperatura del agua en °C.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 <b>Registros mixtos:</b> Combinan información cualitativa y cuantitativa. Ejemplo: ¿El agroecosistema incluye especies arbóreas nativas o cultivadas? Opciones: Nativas / Cultivadas / Ambas. ¿Cuántas especies?
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Según la frecuencia de medición
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 <b>Registros diarios:</b> Se diligencian todos los días. Son comunes para variables agroclimáticas o calidad del agua.
                li.mb-0.d-flex
                  i.fas.fa-leaf.bg-color-3
                  p.mb-0 <b>Registros periódicos:</b> Se diligencian en intervalos definidos en el plan de muestreo, como mensual, semestral o anual. Ejemplo: seguimiento de macroinvertebrados, materia orgánica del suelo, o biodiversidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Según el medio de diligenciamiento
              p El medio de diligenciamiento del registro de medición puede variar según los recursos disponibles, las condiciones del agroecosistema y el objetivo del estudio. Este criterio hace referencia a la forma en que se registran los datos: ya sea de forma física (en papel) o digital (mediante herramientas tecnológicas).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Registros según le medio de diligenciamiento:
    
    p.mb-5 Los registros también pueden clasificarse de acuerdo con la variable específica que se desea medir dentro del agroecosistema. Algunos ejemplos son:

    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 Calidad del suelo
              p.text-center Textura del suelo, parámetros químicos (pH, conductividad), fertilidad, inventario de mesofauna del suelo.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 Calidad del agua
              p.text-center Temperatura, pH, turbidez, color, olor, presencia de sedimentos.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 Condiciones climáticas
              p.text-center Precipitación, temperatura ambiental, humedad relativa, velocidad del viento.

          .col-sm-6.col-lg-3
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 Biodiversidad
              p.text-center Presencia de especies vegetales o animales, conteo de individuos, comportamiento, especies indicadoras.
    
    p.mb-5 En la siguiente figura se presenta un ejemplo de registro de parámetros fisicoquímicos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Prospectiva como gestión del cambio y clave de innovación
    
    div.bg-color-4.p-5.tarjeta.mb-5
      .row.justify-content-center
        .col-lg-9
          figure
            img(src='@/assets/curso/tema1/9-1.svg', alt='Tabla con resultados de análisis de suelos agrícolas que incluye fecha de análisis, parámetros medidos como textura, pH, conductividad, nutrientes y materia orgánica, unidades utilizadas, resultados obtenidos y un espacio para observaciones.')

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Ejemplo registro de resultados para análisis de mesofauna en suelo 
    
    div.bg-color-4.p-5.tarjeta.mb-5
      .row.justify-content-center
        .col-lg-9
          figure
            img(src='@/assets/curso/tema1/9-2.svg', alt='Tabla de inventario de mesofauna del suelo que presenta conteos de diferentes órdenes y clases de organismos en cuatro fechas y horarios distintos, junto con datos del lote, coordenadas, manejo del suelo, tipo de muestra, observaciones y responsables del muestreo. ')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4(data-aos="fade-left") El ejemplo anterior corresponde a un muestreo de mesofauna realizado en una muestra de suelo. A partir del análisis de los resultados obtenidos, pueden extraerse las siguientes conclusiones: El suelo del agroecosistema evaluado presenta una notable biodiversidad, evidenciada por la presencia de más de nueve (9) órdenes o clases de entomofauna. Este dato refleja un nivel de diversidad biológica importante, lo cual es un indicio positivo en términos ecológicos.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p Dentro de los grupos identificados, el orden Hymenoptera —específicamente las hormigas en este caso— fue el más abundante. Este hallazgo cobra relevancia si se considera el papel ecológico fundamental de las hormigas en el suelo:
          ul.lista-ul--color.ms-3
            li.mb-0.d-flex
              i.fas.fa-leaf.bg-color-3
              p.mb-0 Actúan como dispersoras de semillas
            li.mb-0.d-flex
              i.fas.fa-leaf.bg-color-3
              p.mb-0 Participan en el control biológico de ciertos insectos plaga
            li.mb-0.d-flex
              i.fas.fa-leaf.bg-color-3
              p.mb-0 Contribuyen a la descomposición de la materia orgánica.

    p.mb-5 En conjunto, la abundancia de hormigas puede interpretarse como un indicador de calidad y salud del suelo, dada su interacción con procesos clave del ecosistema edáfico.

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Ejemplo registro de resultados para análisis de agua superficial
    
    div.bg-color-4.p-5.tarjeta.mb-5
      .row.justify-content-center
        .col-lg-9
          figure
            img(src='@/assets/curso/tema1/10-1.svg', alt='Tabla de resultados de análisis de agua superficial que incluye fecha de análisis, parámetros físicos y químicos como pH, sólidos suspendidos, DQO, conductividad, nitrógeno, fósforo y porcentaje de oxígeno disuelto, junto con unidades de medida, resultados obtenidos y espacio para observaciones.')
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-4(data-aos="fade-left") La elaboración de formatos debe responder a las necesidades específicas del muestreo, del tipo de estudio y de las características del agroecosistema. No existe un modelo único de formato aplicable universalmente, por lo tanto, es fundamental diseñarlos o adaptarlos según el contexto particular.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos formatos son herramientas clave para recopilar, organizar y analizar la información ambiental recolectada en campo, y deben facilitar el seguimiento, la evaluación y la toma de decisiones en relación con la salud del agroecosistema.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Construcción de registros
      
    p.mb-5 A continuación, se presentan los elementos básicos que deben incluirse en un formato de registro ambiental:

    .bg-full-width-1.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Nombre del registro
                p.text-center Debe indicar con claridad la información que se va a recolectar.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Código
                p.text-center Facilita la gestión documental, la trazabilidad y permite realizar ajustes o actualizaciones.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Ubicación
                p.text-center Especifica el lugar exacto donde se realiza el muestreo.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Detalles adicionales
                p.text-center Incluye información complementaria como el tipo de muestra, método de recolección, condiciones del entorno, etc.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Fecha y hora
                p.text-center Registra el momento preciso en que se lleva a cabo el muestreo
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Información registrada
                p.text-center Contiene los datos cualitativos o cuantitativos correspondientes a las variables ambientales medidas.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Responsable del registro
                p.text-center Identifica a la persona encargada del diligenciamiento para efectos de trazabilidad, aclaraciones o ampliación de información.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-5.p-3 Observaciones
                p.text-center Campo clave para anotar situaciones atípicas, limitaciones del proceso o sugerencias para mejorar futuras mediciones.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/13.png', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Criterios para el diligenciamiento del formato
      
        p.mb-5 Al llenar un formato de registro ambiental, deben considerarse los siguientes aspectos para asegurar la validez y utilidad de la información:
    
    .bg-full-width-1.bg-fondo-4
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/22.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 01
              p.text-center La información debe <b>registrarse completamente</b>, sin dejar campos vacíos.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/23.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 02
              p.text-center El responsable del diligenciamiento debe tener <b>competencias y conocimientos</b> sobre el tipo de muestreo que realiza.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/24.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 03
              p.text-center Es indispensable conocer las <b>unidades de medida</b> y el <b>uso correcto de los instrumentos</b> (por ejemplo: °C, ppm, %, etc.).

          .col-sm-6.col-lg-3
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-secundario.bg-color-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')

              h3.text-center.bg-color-white.p-3 04
              p.text-center Los datos deben representar fielmente lo observado, por lo tanto, <b>no deben ser alterados</b> bajo ninguna circunstancia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Importancia y usos de los registros ambientales
  
    p.mb-5 Los registros no solo documentan la información del muestreo, sino que también cumplen funciones clave para la gestión ambiental del agroecosistema:

    .bg-full-width-1.bg-color-6
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color.ms-3
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Funcionan como <b>historial ambiental</b> del sitio de estudio.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Son fundamentales en <b>procesos de certificación ecológica</b> o en esquemas de sostenibilidad.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Sirven como <b>evidencia en investigaciones y procesos pedagógicos.</b>
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Permiten <b>comparar distintos agroecosistemas</b>, identificando similitudes o diferencias relevantes.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Son base para <b>procesar y graficar la información ambiental</b>, facilitando la interpretación de resultados.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Ayudan a <b>evaluar el impacto</b> de prácticas agroecológicas, especialmente en procesos de reconversión o transición.
                  li.mb-0.d-flex
                    i.fas.fa-leaf.bg-color-3
                    p.mb-0 Posibilitan la <b>detección de cambios bruscos</b> en el ecosistema, permitiendo investigar su origen (ej.: disminución de polinizadores como indicio de contaminación).
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/26.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
