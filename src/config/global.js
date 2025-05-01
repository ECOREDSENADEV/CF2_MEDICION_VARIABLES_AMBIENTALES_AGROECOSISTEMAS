export default {
  global: {
    Name: 'Reporte de resultados',
    Description:
      'El componente formativo orienta la recolección, registro, análisis y presentación de variables ambientales en agroecosistemas. Incluye tipos de registros, construcción de formatos, informes técnicos, normas vigentes (como la Resolución 631 de 2015), herramientas ofimáticas y criterios de redacción. Su finalidad es generar reportes válidos para la toma de decisiones, seguimiento ambiental y certificaciones ecológicas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Registros para la medición de variables ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Tipos de registros para la medición de variables ambientales',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes de Medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aspectos básicos de redacción del informe',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas ofimáticas para elaboración del informe',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Registros para la medición de variables ambientales',
      referencia:
        'SENA. (2022). Tipo de registros para la medición de variables ambientales. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=k9XUkgCGnGI ',
    },
    {
      tema: 'Informes de medición',
      referencia:
        'Fuentes, C. (2003). Redacción y presentación de informes. Revistas de Ciencias Administrativas y Financieras de la Seguridad Social, 11 (2), 75-85.',
      tipo: 'Artículo',
      link:
        'https://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-12592003000200007&lng=en&tlng=es ',
    },
  ],
  glosario: [
    {
      termino: 'Diligenciamiento',
      significado:
        'procesos en el que se rellenan los formatos o planillas con la información, datos o resultados de la medición de variables ambientales en agroecosistemas.',
    },
    {
      termino: 'Formatos para muestreo',
      significado: 'instrumentos ',
    },
    {
      termino: 'Informe de medición',
      significado:
        'reporte escrito con la descripción del proceso de recolección de la información a través del plan de muestreo, los resultados de la medición y conclusiones útiles para la toma de decisiones acerca del plan de manejo del agroecosistema.',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'proceso en el que se obtienen los resultados de la toma y procesamiento de muestras del suelo y del agua, y de la identificación de los bioindicadores del agroecosistema.',
    },
    {
      termino: 'Registro',
      significado:
        'formato o planilla debidamente diligenciado y se constituye como documento que evidencia un resultado obtenido o una actividad desarrollada, por lo tanto, no está sujeta a cambios.',
    },
    {
      termino: 'Resultado de la medición',
      significado:
        'información procesada a partir de los registros diligenciados de la medición de las variables ambientales.',
    },
    {
      termino: 'Variables ambientales:',
      significado:
        'representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. el propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fuentes, C. (2003). Redacción y presentación de informes. Revistas de Ciencias Administrativas y Financieras de la Seguridad Social, 11(2), 75-85. ',
      link:
        'http://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-12592003000200007&lng=en&tlng=es ',
    },
    {
      referencia:
        'IDEAM. (2021). Protocolo de monitoreo y seguimiento del agua.',
      link:
        ' https://www.ideam.gov.co/sala-de-prensa/informes/publicacion-vie-23082024-1200-0',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Resolución 631 de 2015. Por la cual se establecen los parámetros y los valores límites permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/resolucion-631-de-2015.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
