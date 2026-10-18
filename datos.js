// ── COMBO MIX — BASE DE DATOS CENTRAL ──
// Para agregar contenido nuevo, solo edita estos arrays.

const RESENAS = [  
  {
    id: 'digger',
    titulo: 'Digger',
    genero: 'Comedia Oscura',
    año: 2026,
    director: 'Alejandro González Iñárritu',
    estrellas: 4,
    calificacion: '4.5',
    resumen: 'Una sátira sobre el poder y el ego de quienes creen estar por encima de las consecuencias de sus propias decisiones.',
    poster: 'imagenes/poster-digger.jpg',
    texto: `
      <p>¿Qué sucede cuando el hombre que provoca una catástrofe se convence de que también es el único capaz de salvar a la humanidad? En <em>Digger</em> (2026), Alejandro González Iñárritu reúne su mirada provocadora con la presencia de Tom Cruise para construir una sátira sobre el poder, la ambición y el ego de quienes creen estar por encima de las consecuencias de sus propias decisiones.</p>
      <p>La película sigue a Digger Rockwell, un magnate petrolero que, después de desencadenar un desastre de proporciones globales, emprende una desesperada misión para demostrar que es el salvador del mundo. Su narrativa deliberadamente extravagante y su humor incómodo pueden resultar tan fascinantes como agotadores; la película no busca complacer al espectador, sino provocarlo.</p>
      <p>Tom Cruise se aleja de la figura heroica que ha definido buena parte de su carrera para entregar una interpretación que exige una transformación física considerable: cabello canoso, abdomen prominente, prótesis faciales. Cruise no solamente modifica su rostro, utiliza su cuerpo para construir un personaje que parece ocupar demasiado espacio, incluso cuando intenta controlar el caos que él mismo ha provocado.</p>
      <p>La fotografía de Emmanuel Lubezki, filmada íntegramente en VistaVision, aporta una dimensión visual ambiciosa. Iñárritu convierte el espectáculo en parte de su discurso: detrás de la extravagancia existe una crítica a quienes confunden su poder con la capacidad de decidir el destino de los demás.</p>
      <p>No obstante, esa ambición también juega en su contra. La sátira puede sentirse demasiado insistente y su narrativa, por momentos, parece más interesada en exhibir sus propias ideas que en desarrollar un recorrido emocional equilibrado.</p>
    `
  },
  {
    id: 'blue-valentine',
    titulo: 'Blue Valentine',
    genero: 'Drama romántico',
    año: 2010,
    director: 'Derek Cianfrance',
    estrellas: 4,
    calificacion: '4.0',
    resumen: 'Un retrato crudo y honesto sobre el enamoramiento y el desgaste de una relación, protagonizado por Ryan Gosling y Michelle Williams.',
    poster: 'imagenes/poster-blue-valentine.jpg',
    texto: `
      <p>¿Qué sucede cuando la persona que alguna vez lo fue todo comienza a convertirse en alguien con quien ya no sabemos convivir? En <em>Blue Valentine</em> (2010), Derek Cianfrance construye un retrato crudo y honesto sobre el enamoramiento y el desgaste de una relación, protagonizado por Ryan Gosling y Michelle Williams, quienes ofrecen interpretaciones tan naturales como dolorosas.</p>
      <p>A través de una narrativa que alterna entre los primeros días de Dean y Cindy y la crisis de su matrimonio, la película construye un contraste emocional que encuentra su mayor fortaleza en la fotografía de Andrij Parekh. Los recuerdos del enamoramiento están envueltos en colores cálidos y una cámara dinámica que transmite cercanía; en cambio, el presente apuesta por tonos fríos y una iluminación más rígida que refleja la distancia emocional entre ambos.</p>
      <p>Esta oposición visual no es un simple recurso estético: es una manera de contar cómo una relación puede transformarse sin que sus protagonistas sepan exactamente cuándo dejaron de reconocerse.</p>
      <p><em>Blue Valentine</em> no idealiza el amor ni necesita villanos; muestra a dos personas que, a pesar de haberse amado genuinamente, parecen incapaces de encontrar el camino de regreso.</p>
    `
  }
];

const NOTICIAS = [
  {
  id: "pan-frances-torreon",
  titulo: "Pan Francés: Torreón festeja a un ícono de la Laguna",
  categoria: "Noticias",
  fecha: "17 de octubre de 2026",
  imagen: "assets/img/noticias/pan-frances-torreon-principal.jpg",
  resumen: "Con más de veinte negocios entre loncherías y panaderías se llevó a cabo el Festival del Pan Francés con más de quince mil personas.",
  contenido: `
    <p class="lead-paragraph">Con más de veinte negocios entre loncherías y panaderías se llevó a cabo el Festival del Pan Francés con un clima frío que no detuvo al público de poder disfrutar de comida, música y dinámicas.</p>
    <h2 class="section-subtitle">La combinación para deleitar un buen platillo</h2>
    <p>Con una temperatura rondando los 17° centígrados arrancó la tercera edición del Festival de Pan Francés en la Plaza Mayor de Torreón con la venta por parte de las diferentes loncherías que se dieron cita del lado de la C. Galeana a la altura de la Av. Matamoros.</p>
    <section class="story-gallery">
      <figure class="gallery-item">
        <img src="assets/img/noticias/lonches-ordaz-fila.jpg" alt="Fila en Lonches Ordaz" loading="lazy">
        <figcaption>Larga fila para comprar en LONCHES ORDAZ. / Foto: Julio Barranco</figcaption>
      </figure>
      <figure class="gallery-item">
        <img src="assets/img/noticias/lonches-pepes-preparacion.jpg" alt="Preparación en Lonches Pepe's" loading="lazy">
        <figcaption>El antojo desde la preparación en LONCHES PEPE'S. / Foto: Julio Barranco</figcaption>
      </figure>
    </section>
    <p>El Municipio de Torreón informó que más de quince mil personas se dieron cita para disfrutar la diversidad gastronómica con el protagonista de la noche, el pan lagunero; la variedad de opciones se hizo presente con la presencia de estas loncherías:</p>
    <ul class="vendors-list">
      <li>Terraza Santa María</li>
      <li>Lonchería Betty</li>
      <li>Don Taco</li>
      <li>Lonches adobada y carnitas TOBY</li>
      <li>Lonches Panchito</li>
      <li>El Sazón de Rocío</li>
      <li>Lili y Noa</li>
      <li>LONCHES "LIA"</li>
      <li>EL PAVO LOCO</li>
      <li>LONCHES DE ADOBADA EL SORUYO</li>
      <li>LONCHES LOS COYOTES</li>
      <li>LONCHES ORDAZ</li>
      <li>EL LECHON</li>
      <li>LONCHES PIÑA</li>
      <li>LONCHES El Buen Sabor Lagunero</li>
      <li>SUPER LONCHES EL CHINO</li>
      <li>SUPER LONCHES PINZAN</li>
      <li>LONCHES PEPE'S</li>
      <li>La Blanquita</li>
    </ul>
    <p>La adobada, el jamón, aguacate, cebolla, tomate, carnitas, chorizo, queso, chile, milanesa, reliquia, mole, pastor y menudo fueron de los ingredientes con los que se podía acompañar al pan francés para una buena degustación.</p>
    <h2 class="section-subtitle">El entretenimiento que acompañó al festival</h2>
    <p>Además de disfrutar el arte culinario representativo de la región, la gente participó en diferentes dinámicas, vieron como SUPER LONCHES EL CHINO fue el ganador a "Lonche Favorito" y también pudieron presenciar el Show de Bely y Beto junto al ritmo que pusieron Banda Callejera y Kumbia Kings (para cerrar la noche).</p>
    <figure class="featured-media">
      <img src="assets/img/noticias/show-bely-beto-plaza-mayor.jpg" alt="Show en Plaza Mayor" loading="lazy">
      <figcaption>Bely y Beto arrancaron el show en la Plaza Mayor / Foto: Julio Barranco</figcaption>
    </figure>
  `
},
  {
    id: 2,
    corresponsal: "Luisa Fernández",
    categoria: "Noticia · Televisión",
    titulo: "Muere RJ Mitte, actor de “Breaking Bad”, a los 34 años",
    fecha: "13 octubre 2026",
    imagen: "imagenes/imagenesrj-mitte.jpg",
    contenido: `
      <p><strong>El intérprete de Walter White Jr. también fue un reconocido defensor de los derechos de las personas con discapacidad.</strong></p>

      <p>RJ Mitte, conocido por interpretar a Walter Jr. en la serie <em>Breaking Bad</em>, murió a los 34 años en Brownsville, Texas, según confirmaron sus representantes el pasado lunes.</p>

      <p>En un comunicado, sus representantes lamentaron el fallecimiento del actor y lo recordaron como filántropo y apasionado defensor de la inclusión. Mitte, cuyo nombre completo era Roy Frank Mitte III, alcanzó reconocimiento internacional por su participación en la producción de AMC que se emitió entre 2008 y 2013. Apareció en 56 episodios de la serie y participó también en películas como <em>The Oak Room</em> y <em>The Recall</em>.</p>

      <p>Nacido el 21 de agosto de 1992, fue diagnosticado con parálisis cerebral a los 3 años y construyó su carrera desafiando estereotipos y promoviendo la inclusión de personas con discapacidad. Igual que su personaje en la serie, vivía con una forma leve de esta condición. Además, dirigía The Mitte Foundation, organización familiar que apoya proyectos de educación, salud y becas en el sur de Texas.</p>

      <p>Sobre las circunstancias de su muerte, reportes indican que las autoridades creen que se trató de un suicidio, aunque este dato no ha sido confirmado oficialmente por sus representantes.</p>

      <p>Más allá de la pantalla, Mitte deja un legado ligado a la visibilidad y la inclusión. Su papel en <em>Breaking Bad</em> abrió una conversación sobre la discapacidad en la televisión, y su trabajo como activista y filántropo extendió ese mensaje fuera de ella. Su muerte deja un vacío entre quienes crecieron viendo la serie y entre las comunidades a las que representó.</p>
    `
  },
 {
    id: 1,
   corresponsal: "Rigo Flores",
    categoria: "Reestreno · Clásicos",
    tag: "Reestreno · Clásicos",
    titulo: "Rocky: 50 años de una película que convirtió a un boxeador en leyenda",
    resumen: "A 50 años de su estreno, la película que presentó al mundo a Rocky Balboa regresará a los cines en versión remasterizada 4K. En México, Cinemex confirmó su proyección para noviembre de 2026.",
    fecha: "13 octubre 2026",
    poster: "imagenes/rocky.jpg",
    imagen: "imagenes/imagenesrocky.jpg",
    texto: `
      <p>Hay películas que cuentan una historia y hay otras que terminan convirtiéndose en parte de la cultura popular; <em>Rocky</em> pertenece a la segunda categoría. A 50 años de su estreno, la obra que presentó al mundo a Rocky Balboa volverá a la pantalla grande.</p>
      <p>En México, Cinemex confirmó que proyectará la cinta durante noviembre de 2026, como parte de la celebración por su medio siglo de historia. El regreso representa la oportunidad de volver a escuchar la música de Bill Conti, ver a Sylvester Stallone subir las escaleras del Museo de Arte de Filadelfia y redescubrir el origen de una de las sagas deportivas más reconocibles del cine.</p>
      <h3>Rocky vuelve al cine para celebrar medio siglo de historia</h3>
      <p>En 1976, Sylvester Stallone interpretó por primera vez a un boxeador de Filadelfia que recibe una oportunidad prácticamente imposible: enfrentarse al campeón mundial Apollo Creed. Medio siglo después, aquella entrega regresa en una versión remasterizada en 4K. En 2006 fue incorporada al National Film Registry de la Biblioteca del Congreso de EE. UU. por su valor cultural, histórico y estético.</p>
      <h3>Rocky no necesitaba ganar para convertirse en un campeón</h3>
      <p>La grandeza de la cinta no radica únicamente en el combate final. Rocky Balboa no comienza como una superestrella, sino como un peleador de segunda categoría y cobrador de deudas. Su objetivo nunca fue proclamarse campeón a toda costa, sino demostrar que podía llegar hasta el último asalto de pie con dignidad y autoestima.</p>
      <h3>Un millón de dólares y un fenómeno mundial</h3>
      <p>Con un modesto presupuesto de 1 millón de dólares, recaudó más de 100 millones en Estados Unidos y convirtió a Stallone en una estrella mundial. La película obtuvo 10 nominaciones al Oscar y ganó tres: Mejor película, Mejor director y Mejor edición.</p>
    `,
    contenido: `
      <p>Hay películas que cuentan una historia y hay otras que terminan convirtiéndose en parte de la cultura popular; <em>Rocky</em> pertenece a la segunda categoría. A 50 años de su estreno, la obra que presentó al mundo a Rocky Balboa volverá a la pantalla grande.</p>
      <p>En México, Cinemex confirmó que proyectará la cinta durante noviembre de 2026, como parte de la celebración por su medio siglo de historia. El regreso representa la oportunidad de volver a escuchar la música de Bill Conti, ver a Sylvester Stallone subir las escaleras del Museo de Arte de Filadelfia y redescubrir el origen de una de las sagas deportivas más reconocibles del cine.</p>
      <h3>Rocky vuelve al cine para celebrar medio siglo de historia</h3>
      <p>En 1976, Sylvester Stallone interpretó por primera vez a un boxeador de Filadelfia que recibe una oportunidad prácticamente imposible: enfrentarse al campeón mundial Apollo Creed. Medio siglo después, aquella entrega regresa en una versión remasterizada en 4K. En 2006 fue incorporada al National Film Registry de la Biblioteca del Congreso de EE. UU. por su valor cultural, histórico y estético.</p>
      <h3>Rocky no necesitaba ganar para convertirse en un campeón</h3>
      <p>La grandeza de la cinta no radica únicamente en el combate final. Rocky Balboa no comienza como una superestrella, sino como un peleador de segunda categoría y cobrador de deudas. Su objetivo nunca fue proclamarse campeón a toda costa, sino demostrar que podía llegar hasta el último asalto de pie con dignidad y autoestima.</p>
      <h3>Un millón de dólares y un fenómeno mundial</h3>
      <p>Con un modesto presupuesto de 1 millón de dólares, recaudó más de 100 millones en Estados Unidos y convirtió a Stallone en una estrella mundial. La película obtuvo 10 nominaciones al Oscar y ganó tres: Mejor película, Mejor director y Mejor edición.</p>
    `
  }
];

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

const CARTELERA = [{ titulo: 'Street Fighter', año: 2026, genero: 'Acción', estado: 'Próximamente', poster: 'imagenes/poster-pelicula1.jpg' },
  { titulo: 'Feliz Día de tu Muerte', año: 2017, genero: 'Terror', estado: 'Próximamente', poster: 'imagenes/poster-pelicula2.jpg' },
  { titulo: 'Feliz Día de tu Muerte 2', año: 2019, genero: 'Terror', estado: 'Próximamente', poster: 'imagenes/poster-pelicula3.jpg' },
  { titulo: 'El Cadáver de la Novia', año: 2005, genero: 'Animación', estado: 'Próximamente', poster: 'imagenes/poster-pelicula4.jpg' },
  { titulo: 'Digger', año: 2026, genero: 'Comedia Oscura', estado: 'En cartelera', poster: 'imagenes/poster-pelicula5.jpg' },
  { titulo: 'Madre Siniestra', año: 2026, genero: 'Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula6.jpg' },
];
