<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer las habilidades para realizar la elaboración de informes de resultados.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la diferencia entre un formato a planilla y un registro?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El formato a planilla es el instrumento de recolección de datos diseñado antes de la medición, mientras que el registro es el formato diligenciado que evidencia el resultado obtenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'diseña ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No existe diferencia; ambos son términos sinónimos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El registro se utiliza solo en el ámbito digital, y el formato a planilla, en papel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento NO se indica como obligatorio incluir en un registro para la medición de variables ambientales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nombre del registro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ubicación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Firma del cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se clasifican los registros para la medición de variables ambientales en función del tipo de datos recolectados?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cualitativos, cuantitativos y mixtos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Físicos, digitales y mixtos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diarios y periódicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temporales y permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la principal diferencia entre registros diarios y registros periódicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los diarios se registran en papel y los periódicos en formato digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los diarios miden variables cualitativas y los periódicos, cuantitativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No existe diferencia en su aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los diarios se diligencian a diario, mientras que los periódicos se realizan en momentos definidos según el plan de muestreo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Dentro de la clasificación según el medio de diligenciamiento, ¿qué tipo de registro se realiza en papel?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro mixto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro físico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registro electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una de las funciones principales de los registros en el monitoreo de variables ambientales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Servir como documento que evidencia el resultado obtenido o la actividad desarrollada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir el informe de medición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de realizar análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la complejidad del proceso de medición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'En el diligenciamiento de formatos para la medición, ¿qué aspecto es fundamental según lo descrito en el componente formativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar únicamente los datos positivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dejar espacios en blanco para completarlos después.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Completar la información en su totalidad sin dejar espacios sin diligenciar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ajustar los datos para que se alineen con expectativas previas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elementos básicos debe incluir un informe de medición de variables ambientales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente los resultados obtenidos en la medición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Plan de muestreo, alcance de la medición, resultados y conclusiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo el plan de muestreo y la ubicación del agroecosistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solamente gráficos y tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuáles son los aspectos básicos de redacción recomendados para la elaboración del informe de medición?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de jerga técnica sin explicar y estilo informal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un estilo libre sin estructura ni organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el uso de gráficos y tablas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Coherencia, orden lógico y consistencia en la redacción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramientas ofimáticas se sugieren en el documento para apoyar la elaboración y presentación del informe de resultados?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente procesadores de texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente calculadoras y papel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hojas de cálculo, presentaciones multimedia y herramientas en línea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ninguna herramienta; se debe realizar manualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los registros ambientales pueden clasificarse únicamente por el medio de diligenciamiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El informe de medición debe incluir conclusiones basadas en bibliografía técnica o científica.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un registro diligenciado puede ser modificado si se encuentra un error después del análisis.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El uso de herramientas ofimáticas permite organizar, analizar y presentar los datos de manera más clara y precisa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Todos los informes ambientales deben realizarse exclusivamente en papel para cumplir con los requisitos normativos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
