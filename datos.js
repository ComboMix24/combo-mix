// ── COMBO MIX — BASE DE DATOS CENTRAL ──
// Para agregar contenido nuevo, solo edita estos arrays.

const RESENAS = [
  {
    id: 'anora',
    titulo: 'Anora',
    genero: 'Drama',
    año: 2024,
    director: 'Sean Baker',
    estrellas: 5,
    calificacion: '5.0',
    resumen: 'Sean Baker captura Nueva York con la misma honestidad cruda que distingue su filmografía. Una actuación que no puedes ignorar.',
    texto: `
      <p>Sean Baker lleva años documentando los márgenes de la sociedad estadounidense con una honestidad que incomoda y seduce al mismo tiempo. Con <em>Anora</em> da un salto hacia algo más grande sin perder esa mirada íntima que lo define.</p>
      <p>La historia de Ani, una trabajadora sexual de Brighton Beach que se casa impulsivamente con el hijo de un oligarca ruso, podría haberse convertido en un cuento de hadas moderno o en una crítica social explícita. Baker elige algo más honesto: un retrato de alguien que sabe exactamente quién es, pero no puede evitar desear algo diferente.</p>
      <p>Yura Borisov roba cada escena que comparte con Mikey Madison, y la química entre ambos actores construye la verdadera columna vertebral de la película. El tercer acto es caos en el mejor sentido posible.</p>
    `
  },
  {
    id: 'alien-romulus',
    titulo: 'Alien: Romulus',
    genero: 'Terror',
    año: 2024,
    director: 'Fede Álvarez',
    estrellas: 4,
    calificacion: '4.0',
    resumen: 'Fede Álvarez rescata la tensión claustrofóbica de la saga original. El terror espacial vuelve a sentirse real.',
    texto: `
      <p>Después de varios intentos fallidos por revitalizar la franquicia, Fede Álvarez regresa al horror más puro de la saga. Sin pretensiones filosóficas ni grandes arcos mitológicos: solo oscuridad, claustrofobia y xenomorfos haciendo lo que mejor saben hacer.</p>
      <p>La decisión de ambientar la historia entre <em>Alien</em> y <em>Aliens</em> le da libertad narrativa sin traicionar la continuidad. El diseño de producción es impecable, y hay al menos tres secuencias que van a quedar en la memoria colectiva del género.</p>
      <p>No reinventa nada, pero tampoco necesita hacerlo. A veces la mejor versión de algo es la que recuerda por qué funcionó en primer lugar.</p>
    `
  },
  {
    id: 'dune-parte-dos',
    titulo: 'Dune: Parte Dos',
    genero: 'Ciencia ficción',
    año: 2024,
    director: 'Denis Villeneuve',
    estrellas: 5,
    calificacion: '4.9',
    resumen: 'Villeneuve entrega uno de los espectáculos visuales de la década. El desierto nunca se vio tan amenazante ni tan bello.',
    texto: `
      <p>Villeneuve completa una de las adaptaciones más ambiciosas de la historia del cine moderno. <em>Dune: Parte Dos</em> no solo termina lo que empezó — lo supera en casi todos los aspectos técnicos y narrativos.</p>
      <p>La fotografía de Greig Fraser vuelve a ser un argumento en sí misma. Las secuencias en Giedi Prime rodadas en blanco y negro son de lo más visualmente impactante que el blockbuster ha producido en años. Y la música de Hans Zimmer sigue siendo el ancla emocional de todo el proyecto.</p>
      <p>Lo que más sorprende es la valentía narrativa: Villeneuve no suaviza el cuestionamiento al mesianismo que Herbert construyó en la novela. Paul Atreides no es un héroe. Nunca lo fue. Y la película tiene el coraje de dejar eso muy claro.</p>
    `
  },
  {
    id: 'longlegs',
    titulo: 'Longlegs',
    genero: 'Terror',
    año: 2024,
    director: 'Oz Perkins',
    estrellas: 3,
    calificacion: '3.5',
    resumen: 'Nicolas Cage en modo desquiciado total. El diseño sonoro hace más daño que cualquier jumpcare.',
    texto: `
      <p>Oz Perkins sabe crear atmósferas. Eso está fuera de discusión. <em>Longlegs</em> tiene momentos de terror genuino que funcionan precisamente porque no dependen de jumpscares sino de una sensación sostenida de que algo está fundamentalmente mal.</p>
      <p>El problema es Nicolas Cage. No porque esté mal — de hecho está fascinante — sino porque su actuación vive en una frecuencia tan diferente al resto de la película que genera una disonancia difícil de ignorar.</p>
      <p>Maika Monroe carga el peso dramático con solidez, y el diseño sonoro merece un reconocimiento especial. Vale la experiencia, aunque salgas con más preguntas de las que entraste.</p>
    `
  },
  {
    id: 'a-real-pain',
    titulo: 'A Real Pain',
    genero: 'Comedia dramática',
    año: 2024,
    director: 'Jesse Eisenberg',
    estrellas: 5,
    calificacion: '4.8',
    resumen: 'Jesse Eisenberg escribe y dirige con una sensibilidad sorprendente. Kieran Culkin se roba cada escena sin esfuerzo.',
    texto: `
      <p>Jesse Eisenberg escribe y dirige con una madurez que no anticipabas de él. <em>A Real Pain</em> es una película pequeña en escala pero enorme en lo que se propone: hablar del duelo, la memoria y la identidad judía sin volverse didáctica ni sentimental.</p>
      <p>Kieran Culkin entrega la actuación del año. Su Benji es irritante, encantador, roto y vivo al mismo tiempo, y hace que cada escena en la que aparece sea imposible de despegar los ojos.</p>
      <p>El viaje a Polonia como telón de fondo es una elección arriesgada que paga. Una de las sorpresas más gratas del año.</p>
    `
  },
  {
    id: 'el-conde-de-montecristo',
    titulo: 'El Conde de Montecristo',
    genero: 'Aventura',
    año: 2024,
    director: 'Alexandre de la Patellière',
    estrellas: 4,
    calificacion: '4.2',
    resumen: 'Una adaptación que entiende que la venganza, para ser épica, necesita tiempo.',
    texto: `
      <p>Adaptar a Dumas siempre es un reto: la novela tiene demasiado para una sola película y demasiado poco para una serie. Esta versión francesa opta por la épica clásica y casi siempre acierta.</p>
      <p>Pierre Niney como Edmond Dantès es la elección perfecta. Transmite tanto la fragilidad del joven marinero como la frialdad calculada del Conde sin que la transición se sienta forzada.</p>
      <p>Hay momentos donde el ritmo decae, especialmente en el segundo acto, pero la última hora compensa con creces. Una adaptación que entiende que la venganza lenta es la más satisfactoria.</p>
    `
  }
];

const NOTICIAS = [];

const FESTIVALES = [
  {
    nombre: 'Festival Internacional de Cine de Morelia',
    lugar: 'Morelia, México',
    fecha: 'Octubre 2026',
    descripcion: 'El festival más importante de México, con enfoque en cine latinoamericano y mexicano independiente.',
    categoria: 'México'
  },
  {
    nombre: 'Festival de San Sebastián',
    lugar: 'San Sebastián, España',
    fecha: 'Septiembre 2026',
    descripcion: 'Festival de referencia para el cine en español. Concha de Oro como premio principal.',
    categoria: 'Internacional'
  },
  {
    nombre: 'Festival de Cine de Los Cabos',
    lugar: 'Los Cabos, México',
    fecha: 'Noviembre 2026',
    descripcion: 'Festival emergente con foco en el diálogo entre el cine mexicano y el norteamericano.',
    categoria: 'México'
  }
];

const CARTELERA = [{ titulo: 'Street Fighter', año: 1994, genero: 'Acción', estado: 'Próximamente', poster: 'imagenes/poster-pelicula1.jpg' },
  { titulo: 'Feliz Día de tu Muerte', año: 2017, genero: 'Terror', estado: 'Próximamente (Re-Estreno)', poster: 'imagenes/poster-pelicula2.jpg' },
  { titulo: 'Feliz Día de tu Muerte 2', año: 2019, genero: 'Terror', estado: 'Próximamente (Re-Estreno)', poster: 'imagenes/poster-pelicula3.jpg' },
  { titulo: 'El Cadáver de la Novia', año: 2005, genero: 'Animación', estado: 'Próximamente (Re-Estreno)', poster: 'imagenes/poster-pelicula4.jpg' },
];
