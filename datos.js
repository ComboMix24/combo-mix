// ── COMBO MIX — BASE DE DATOS CENTRAL ──
// Para agregar contenido nuevo, solo edita estos arrays.

const RESENAS = [ 
  {
  id: 'la-familia-del-futuro',
  titulo: 'La Familia del Futuro',
  genero: 'Infantil · Comedia',
  año: 2007,
  director: 'Stephen J. Anderson',
  estrellas: 4,
  calificacion: '4.0',
  corresponsal: 'Julio Barranco',
  fecha: '27 de octubre de 2026',
  resumen: 'A través de una narrativa directa y conmovedora, Disney entrega una cinta que trasciende la etiqueta infantil con un poderoso mensaje sobre soltar el pasado y caminar hacia el futuro.',
  poster: 'imagenes/poster-robinsons.jpg',
  texto: `
    <p class="lead-paragraph">Disney tuvo una época en la que sus estrenos en la gran pantalla no eran rentables pero se trataba de un producto distinto y que a pesar de tener esa etiqueta de "para niños", a los más longevos también les deja un gran mensaje al analizarla desde un punto de vista más experimentado en la vida; parece que es mera nostalgia de aquellos que la veían por el canal Disney XD pero en verdad se trata de un gran acierto.</p>
    
    <p>Lewis es un niño abandonado por su madre que está fascinado por todo el tema de la ciencia, de hecho las parejas que han intentando adoptarlo no lo ven como alguien normal debido a su gran intelecto y gusto por algo que un niño generalmente no sigue a esa edad. Un día decide hacer un invento que puede poner imagen a momentos de la vida personal con el simple hecho de recordarlos, aclarando que siempre ha querido responder a por qué su progenitora lo dejó ese día.</p>
    
    <p>Este niño vive junto con otro llamado Goob, al que nunca dejó dormir por estar a toda hora armando su "memoria de scanner". Su trabajó sale mal en una feria de ciencias donde termina conociendo a Wilbur Robinson, alguien que viene del futuro para arreglar un error suyo que podría poner en riesgo su destino.</p>
    
    <p>Aquí otro personaje importante es el del sombrero, esta misteriosa persona busca a toda costa vengarse de Lewis, quien por cierto es trasladado al futuro y queda sorprendido de absolutamente todo, especialmente de la familia Robinson, ya que es algo que siempre ha buscado este niño.</p>
    
    <p>Resulta que después de un altercado, el del sombrero captura al protagonista y le cuenta la verdad, el es Goob pero del futuro que por culpa de nunca dejarlo descansar, perdió un partido importante de beisbol y decidió echar culpa de todo a Lewis en vez de aceptar cualquier otra cosa, incluso se declara que la familia Robinson es en realidad la de Lewis y que Wilbur es su hijo.</p>
    
    <p>Aquí el propio sombrero tiene su venganza ya que fue un invento que Lewis de adulto rechazó y lo dejó en el olvido por peligroso, esa es la motivación de Goob junto a la del sombrero pero el futuro cambia en favor al sombrero, admitiendo su error el compañero del protagonista y él enfrentan la situación para solventarlo.</p>
    
    <p>Todo parece resuelto pero un momento crucial de la trama es que Wilbur le prometió a Lewis llevarlo a conocer a su madre, estando en ese momento, el protagonista a punto de interferir en el día que su madre lo abandonó, decide no hacerlo y cumplir con la moraleja que la cinta estuvo recalcando en todo momento.</p>
    
    <p>"Te enfocaste en lo malo, cuando solo tenías que dejar ir el pasado y caminar hacia el futuro", es lo que hace Lewis para continuar con su vida, en la feria de ciencias todo sale bien y es dónde conoce a una pareja que lo ve como un niño con grandes sueños y lo adoptan para empezar así ese camino al que está destinado como alguien exitoso.</p>
    
    <p>La historia es clara, directa y enfocada en transmitir ese poderoso mensaje de dejar ir el pasado, no enfrascarse en él para poder tener la suficiente fuerza de voluntad para seguir el camino y caminar hacía el futuro ante los obstáculos que presenta la vida; hay que disfrutar esos momentos que son los que maravillan, haciendo valorar la vida porque sólo es una.</p>
    
    <p>El dilema de Lewis por conocer a su madre, junto a esa razón de haberlo dejado "a su suerte" es lo que la cinta retrata para dejar en claro por qué es importante seguir adelante, claro no se refieren a olvidar el pasado, al final del día es lo que nos construye como personas pero se debe reconocer no como una carga sino como la travesía que se ha llevado hasta el momento y continuar hacía ese gran futuro que espera.</p>
    
    <p>Y este es otro ejemplo de por qué un buen guion hace que una cinta sea valorada y tenga mejor vigencia con el paso del tiempo, <em>La Familia del Futuro</em> (2007) es la ejemplificación perfecta de que sin tantos reflectores se sostiene por sí sóla como una gran producción.</p>
  `
},
{
    id: 'clayface',
    titulo: 'Clayface',
    genero: 'Terror · Acción',
    año: 2026,
    director: 'James Watkins',
    estrellas: 3.5,
    calificacion: '3.5',
    corresponsal: 'Julio Barranco',
    fecha: '22 de octubre de 2026',
    resumen: 'DC Studios se adentra en el body horror con una propuesta que funciona por sí sola gracias a sus efectos prácticos y ambientación, aunque evidencia una notable desconexión con el resto de su universo compartido.',
    poster: 'imagenes/poster-clayface.jpg',
    texto: `
      <p class="lead-paragraph">DC Studios pone en escena una nueva cinta para enriquecer la diversidad de su Universo, y logra ese cometido pero a medias con una propuesta no sólo de un villano, sino de un personaje que explora el terror dentro de una dinámica tan cambiante en estas producciones comandadas por James Gunn.</p>
      
      <p><em>Clayface</em> (2026) demuestra que a pesar de no tener al personaje insignia de la compañía (Batman) es posible armar un largometraje interesante, aunque en este caso es peculiar porque funciona pero a la vez no.</p>
      
      <p>La trama nos presenta a Matt Hagen (Tom Rhys Harries), un actor que está disfrutando de su transición hacía el estrellato tras un pasado complicado; una noche se ve envuelto en una controversia con la pareja de un capo del crimen, quién le deja el rostro desfigurado a manera de venganza y destrozando prácticamente su carrera.</p>
      
      <p>El protagonista encuentra una forma arriesgada de recuperar su belleza facial sin saber que esos procesos biológicos a los que fue sometido lo harán perder la cordura y convertirse en un monstruo en un viaje alimentado por la venganza y la traición, que refleja muy bien a Ciudad Gótica.</p>
      
      <p>La desesperación mostrada por Matt en cada escena después de la tragedia son bien reforzados por un maquillaje y efectos prácticos que van mostrando de a poco su transformación hacía esa horrorosidad que caracteriza a este personaje en muchas de sus adaptaciones y material original.</p>
      
      <p>La Dra. Caitlin Bates (Naomi Ackie) es quien va moldeando sin percatarse del todo a la cosa en la que Hagen se va transformando, porque los cambios no son sólo físicos, su descontrol mental hace que en un principio no sea capaz de dominarse a sí mismo, sólo con la orientación de ella; los demás personajes parecen estar sólo para cumplir con el rompecabezas (deforme) que se va construyendo en torno a Clayface.</p>
      
      <p>Hablando sobre la peculiaridad de esta cinta, se siente muy independiente del que se supone es un universo compartido, empezando desde que este personaje ya apareció en la serie animada <em>Creature Commandos</em> (2024) y de quién se aclaró desde un inicio que se trataba de la misma versión que la de la cinta, sólo que en este caso el live action cuenta el origen del personaje.</p>
      
      <p>Este caso de sentirse muy aparte de lo que ha sucedido en todo el DC Studios hasta este momento es lo que genera discordia, desde un inicio se prometió variedad en las historias en esta restructuración, hasta el momento se ha dado pero también ha pecado mucho de la conexión que se esperaba entre proyectos al tratarse todo de uno mismo.</p>
      
      <p>Y aquí es dónde entra el tema de Batman, es bien sabido que esta cinta de terror narra los principios de un antagonista del Caballero de la Noche, no tenerlo a él dentro de este "caos" en ciudad Gótica genera inconsistencia en saber cuándo se verá a este ícono de DC y también de qué tipo de decisiones se hacen al presentar la historia de esta forma.</p>
      
      <p><em>Clayface</em> (2026) llega a ser incluso más solitaria que el <em>Joker</em> (2019), aunque sea en la protagonizada por Joaquin Phoenix hay referencias directas al propio lore de Batman; en la otra cinta, se le podría quitar el nombre de todo lo relacionado a ese lore y no pasa nada, sería un body horror con nombres de personajes y ciudad cualquiera.</p>
      
      <p>A pesar de todo esto, en la película se logra algo interesante, funciona por sí sola sin depender necesariamente de la figura que representa el Murciélago de Gótica, aunque la narrativa no sea tan compleja, sus demás aspectos como las actuaciones, maquillaje, efectos, suspenso y ambientación la hacen posicionarse como una buena cinta con ese cuestionamiento de todo lo relacionado al universo DC.</p>
    `
  },
  {
    id: 'the-drama',
    titulo: 'The Drama',
    genero: 'Comedia Dramática · Romance',
    año: 2026,
    director: 'Kristoffer Borgli',
    estrellas: 4,
    calificacion: '4.0',
    corresponsal: 'Mario Ramírez',
    fecha: '20 de octubre de 2026',
    resumen: 'Una boda de ensueño se desmorona tras una revelación del pasado. Robert Pattinson y Zendaya brillan en esta comedia ácida sobre confianza, moralidad e hipocresía en pareja.',
    poster: 'imagenes/poster-drama.jpg',
    texto: `
      <p class="lead-paragraph"><em>The Drama</em> prometía bastante desde que se reveló su póster: reunir en pantalla a Robert Pattinson y Zendaya bajo la dirección y guion de Kristoffer Borgli generaba enormes expectativas sobre la historia que veríamos. Y sin duda alguna: ¡vaya drama el que nos entregan!</p>
      
      <p>La película nos introduce a Emma Harwood (Zendaya) y Charlie Thompson (Robert Pattinson), una pareja que vive una etapa de ensueño a una semana de celebrar su boda. Sin embargo, lo que parecía una relación sólida se desmorona durante una cena entre amigos cuando Rachel, una amistad en común, revela eventos del pasado que fracturan la confianza y desatan un severo dilema moral: ¿realmente se debe juzgar a alguien por lo que pensó o planeó en el pasado?</p>
      
      <p>La premisa resulta sumamente interesante al poner a prueba la estabilidad de la pareja. Ante la presión, Emma confiesa haber contemplado en su juventud un plan turbio que jamás llegó a ejecutar; no obstante, Charlie se obsesiona con el tema, temiendo que esa sombra del pasado resurja justo en su boda. Las dudas y la insistencia carcomen poco a poco la relación, exponiendo la hipocresía de ambos y poniendo al espectador en una encrucijada donde resulta difícil elegir un bando.</p>
      
      <p>Hacia su clímax, la ceremonia termina convirtiéndose en un auténtico caos donde las infidelidades y los rencores salen a la luz, dinamitando lo que parecía inquebrantable. A pesar de todo, la cinta se reserva un espacio para la reflexión con ambos reencontrándose en una cafetería, contemplando el desastre que pudieron haber evitado y coqueteando con la idea de empezar de cero como si fuera la primera vez.</p>
      
      <p>Kristoffer Borgli demuestra nuevamente su gran talento para la comedia incómoda y el conflicto psicológico. <em>The Drama</em> es una cinta entretenida, ácida y totalmente recomendada... aunque si planeas verla con tu pareja antes de dar un paso importante, ten muy en cuenta todo lo mencionado.</p>
    `
  },
  {
    id: 'la-sustancia',
    titulo: 'La Sustancia',
    genero: 'Body Horror · Sátira',
    año: 2024,
    director: 'Coralie Fargeat',
    estrellas: 5,
    calificacion: '4.5',
    corresponsal: 'Julio Barranco',
    resumen: 'Una sátira visceral y despiadada sobre la obsesión por la juventud y la tiranía estética de Hollywood, protagonizada por una monumental Demi Moore.',
    poster: 'imagenes/poster-sustancia.jpg',
    texto: `
      <p class="lead-paragraph">El horror corporal no es ninguna novedad en el cine y esta producción ni siquiera fue estrenada cerca de las fechas de <em>Halloween</em>, pero pocas veces una película logra transmitir una crítica tan despiadada, frenética y visualmente deslumbrante como lo hace <em>La Sustancia</em> (2024), siendo realmente una película de terror.</p>
      
      <p>Coralie Fargeat no busca pedir permiso ni ser sutil: entrega un golpe a la mesa en contra de la tiranía estética de Hollywood y el rechazo sistemático al envejecimiento femenino.</p>
      
      <p>La historia nos presenta a Elisabeth Sparkle (Demi Moore), una celebridad y estrella de programas de aeróbicos televisivos que, al cumplir cincuenta años, es desechada por un productor misógino y grotesco. Devastada por la pérdida de relevancia, Elisabeth recurre a un procedimiento clandestino: "La Sustancia", un suero médico que genera una versión más joven, hermosa y perfecta de sí misma llamada Sue (Margaret Qualley).</p>
      
      <p>La condición de este método es muy clara desde el inicio: deben alternarse siete días cada una sin excepción, porque al final, <em>ambas son una sola</em>; sin embargo, cuando la adicción a los reflectores y la arrogancia de la juventud entran en juego, el equilibrio se rompe.</p>
      
      <p>Lo más fascinante de la cinta es cómo de a poco va aumentando la tensión entre ambas actitudes y tendencias de una misma persona, un diseño sonoro que eleva la intensidad de cada acción, donde cada crujido de huesos o desgarre de piel resuena con un peso físico brutal que hace incomodar al espectador.</p>
      
      <p>A nivel actoral, Demi Moore ofrece la interpretación más valiente, vulnerable y catártica de toda su carrera cinematográfica, demostrando cómo los estándares actuales de belleza en Hollywood tienden a ser muy crueles al desplazar con facilidad lo “viejo”. A su lado, Margaret Qualley es magnética, encarnando con una energía identificable el egoísmo de la juventud; la verdadera tragedia del relato no proviene del monstruo exterior, sino del odio interno: el horror de cómo somos capaces de convertirnos en nuestros propios verdugos para encajar en expectativas inalcanzables de la sociedad, o en este caso, la industria cinematográfica.</p>
      
      <p>Hacia su tercer acto, la película abraza por completo la locura desatando un baño de sangre y generando una polémica de si es necesario acabar de una manera tan explícita o abrupta la película. <em>La Sustancia</em> no es una obra para sensibles; es una de las propuestas más arriesgadas, grotescas y memorables que se han proyectado en una sala de cine en mucho tiempo, una locura cinematográfica obligatoria que te deja clavado en la butaca con cada plano, actuación, sonido y trama.</p>
    `
  },
  {
    id: 'hocus-pocus',
    titulo: 'Hocus Pocus',
    genero: 'Comedia Adolescente, Fantasía',
    año: 1993,
    director: 'Kenny Ortega',
    estrellas: 4,
    calificacion: '4.0',
    corresponsal: 'Rigo Flores',
    resumen: 'Una aventura de brujas, hechizos y humor que, con el paso de los años, se ha ganado un lugar indispensable en las maratones de Halloween.',
    poster: 'imagenes/poster-hocus-pocus.webp',
    texto: `
      <p>Hay películas que terminan convirtiéndose en una tradición, y <em>Hocus Pocus</em> (1993) es una de ellas. Bajo la dirección de Kenny Ortega, Disney construye una aventura de brujas, hechizos y humor que, con el paso de los años, se ha ganado un lugar indispensable en las maratones de Halloween.</p>
      <p>La historia comienza en Salem, Massachusetts, en 1693, cuando las hermanas Sanderson (Winifred, Sarah y Mary) son condenadas por brujería después de arrebatarle la vida a una niña. Antes de morir, Winifred lanza una maldición que les permitirá regresar si alguien enciende la misteriosa Vela de Llama Negra. Tres siglos después, Max Dennison comete el error de encenderla y devuelve a las brujas a un mundo que ha cambiado por completo. Ahora, junto a su hermana Dani, Allison y un gato negro inmortal llamado Thackery Binx, deberá impedir que las Sanderson cumplan su siniestro propósito.</p>
      <p>Uno de los grandes aciertos de la película está en la mitología que construye alrededor de sus personajes. La vela, el libro de hechizos, la maldición de Binx y la obsesión de las hermanas por recuperar su juventud forman un universo fantástico que se siente lo suficientemente oscuro para despertar curiosidad, pero también divertido para mantener el espíritu familiar de Disney. Además, la tragedia de Thackery y su hermana Emily aporta un trasfondo emocional que contrasta con el tono cómico de la aventura.</p>
      <p>Las actuaciones de Bette Midler, Sarah Jessica Parker y Kathy Najimy son fundamentales para el encanto de la cinta. Cada hermana posee una personalidad perfectamente reconocible: Winifred destaca por su temperamento y teatralidad; Sarah, por su carácter seductor y despreocupado; y Mary, por su peculiar sentido del humor. Juntas forman un trío memorable que convierte cada aparición en uno de los momentos más divertidos de la película.</p>
      <p>Aunque sus efectos visuales pueden sentirse ingenuos frente a las producciones actuales y algunos de sus conflictos siguen las convenciones del cine familiar, su ambientación, sus canciones y su combinación de comedia con elementos sobrenaturales conservan una identidad difícil de replicar.</p>
      <p><strong>Veredicto:</strong> Hocus Pocus es mucho más que una película de brujas: es un clásico de temporada que ha sabido transformar una historia de maldiciones y magia oscura en una tradición cinematográfica. Su mitología, sus inolvidables hermanas Sanderson y la entrañable historia de Thackery Binx la convierten en una cita obligatoria cada octubre. Porque en Halloween hay disfraces, dulces y calabazas, pero la temporada no está completa hasta que alguien enciende la Vela de Llama Negra.</p>
    `
  },
  {
    id: 'digger',
    titulo: 'Digger',
    genero: 'Comedia Oscura',
    año: 2026,
    director: 'Alejandro González Iñárritu',
    estrellas: 4,
    calificacion: '4.5',
    corresponsal: 'Rigo Flores',
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
    corresponsal: 'Rigo Flores',
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
    id: 'avengers-doomsday-entre-rumores-y-expectativas',
    titulo: 'Avengers Doomsday: Entre rumores y expectativas',
    categoria: 'Opinión',
    fecha: '26 de octubre de 2026',
    autor: 'Julio Barranco',
    corresponsal: 'Julio Barranco',
    resumen: 'A menos de dos meses de su estreno, la conversación en torno a Avengers Doomsday se divide entre filtraciones, el regreso de figuras clásicas y el reto de cerrar casi 20 años de historia de Marvel Studios.',
    imagen: 'imagenes/avengers-rumores.jpg',
    poster: 'imagenes/avengers-rumores.jpg',
    texto: `
      <p class="lead-paragraph">En aquella San Diego Comic-Con del 2024 donde Marvel Studios presentó a Robert Downey Jr. como Doctor Doom y el plan para cerrar la Saga del Multiverso se ve poco lejano, pero aún recordamos cuando en la convención de 2022 anunciaron <em>Avengers The Kang Dynasty</em> (el plan original).</p>
      
      <p>A pesar de esto y con el reestreno de <em>Avengers: Endgame</em> en cines, la sensación de vivir el fenómeno de los Vengadores está aquí tras casi ocho años sin ver un evento crossover de esta magnitud; cuando no sabíamos cuánto faltaba para ver de nueva ocasión a los héroes reunidos en pantalla, ahora la espera es de prácticamente menos de mes y medio.</p>
      
      <p>La cercanía empieza a generar conversación muy dividida acerca de lo que veremos en diciembre, pero a estas alturas de la situación, la presencia de filtraciones y rumores por saber lo que sucederá en este magno evento sobran.</p>
      
      <h3>Secretismo y teorías en redes sociales</h3>
      
      <p>Esta práctica que se lleva a cabo en redes sociales con los insiders y creadores de contenido que difunden diariamente supuesta información acerca de la trama de la película es bien sabido el secretismo que ha manejado la cinta desde su anuncio, ya que el gancho principal fue traer de vuelta a una figura como Robert Downey Jr. para después presentar el regreso del elenco de los X-Men de la primera trilogía.</p>
      
      <p>Tras esto, no ha habido más avances oficiales que den indicios o confirmen la cantidad tan grande de personajes que se barajan para salir en esta entrega de Avengers, siendo este el principal debate en redes. No haré mención de ninguno de estos por posible spoiler, pero no cabe duda que los grandes personajes de sagas de Marvel a lo largo de la historia en cine y televisión han sido muy comentados a lo largo de todo este camino a <em>Doomsday</em>.</p>
      
      <p>Hay que aclarar una cosa: ninguna de estas apariciones suena descabellada si nos basamos en que tanto esta producción como la de <em>Avengers: Secret Wars</em> (que promete ser algo mucho más grande que su antecesora) abarcan todo el tema del multiverso y parece darán conclusión no sólo a casi veinte años de Marvel Studios en las salas, también poco más de treinta de la propia franquicia en la industria cinematográfica con una diversidad de historias y versiones en las adaptaciones.</p>
      
      <h3>Expectativas ante el desenlace del multiverso</h3>
      
      <p>Entonces, hasta la comentada trama filtrada va tomando forma con los avances oficiales según los internautas, pero algunos tal vez no se han puesto a pensar que todo lo que se ha mostrado hasta el momento pertenece a una parte muy específica de la película, y aún a tener en cuenta si algunas de esas tomas o montajes no resultan ser falsos debido a cómo se suele manejar Marvel con este tipo de productos.</p>
      
      <p>Las dos horas con cuarenta y cinco minutos que durará esta entrega parecen poco debido a la cantidad de cosas por explicar o "arreglar" tras estos años de saga tan incomprendidos en muchas de sus películas y series, pero aún así habrá que esperar a verla para poder juzgarla bien, junto a su conclusión <em>Secret Wars</em>.</p>
      
      <p>Todo esto engloba lo que se está viviendo día con día con respecto a este fenómeno; sólo queda esperar para ver cómo Marvel decidió llevar a cabo todo este desorden con tantos personajes en pantalla a menos de dos meses para que llegue a todo el mundo.</p>
    `
  },
  {
    id: 'guillermo-del-toro-alfonso-cuaron-festival-de-morelia-2026',
    titulo: 'Guillermo del Toro, Alfonso Cuarón y nuevas voces del cine mexicano marcan el Festival de Morelia 2026',
    categoria: 'Festivales',
    fecha: '26 de octubre de 2026',
    autor: 'Luisa Fernández',
    corresponsal: 'Luisa Fernández',
    resumen: 'La 24.ª edición del Festival Internacional de Cine de Morelia reunió a reconocidos cineastas, estrenos nacionales e internacionales y producciones que destacaron durante diez días de actividades.',
    imagen: 'imagenes/cine-morelia.jpg',
    poster: 'imagenes/cine-morelia.jpg',
    texto: `
      <p class="lead-paragraph">El Festival Internacional de Cine de Morelia (FICM) concluyó su 24.ª edición después de diez días de proyecciones, alfombras rojas, encuentros con cineastas y premiaciones que reunieron a figuras reconocidas de la industria cinematográfica y nuevos talentos del cine mexicano.</p>
      
      <p>Celebrado del 16 al 25 de octubre, el encuentro contó con la participación de directores como Guillermo del Toro, Alfonso Cuarón, Juan Antonio Bayona y James Gray, además de actores como Gael García Bernal, Diego Calva, Demián Bichir y Diego Boneta.</p>
      
      <p>La inauguración estuvo a cargo de <em>Campeón gabacho</em>, película dirigida por Jonás Cuarón, quien asistió acompañado de su padre, el cineasta Alfonso Cuarón, productor del largometraje. Su presentación marcó el inicio de una programación que combinó producciones mexicanas con propuestas cinematográficas internacionales.</p>
      
      <h3>Celebración y reflexión con Guillermo del Toro</h3>
      
      <p>Uno de los momentos más emotivos ocurrió durante la participación de Guillermo del Toro, quien regresó al festival para celebrar el vigésimo aniversario de <em>El laberinto del fauno</em>, película que tuvo una proyección especial en su versión restaurada.</p>
      
      <p>Durante una clase magistral, el director reflexionó sobre los desafíos de las nuevas generaciones, el proceso creativo y la importancia del fracaso en la formación de los artistas. Su intervención también llamó la atención cuando se mostró conmovido al hablar sobre el mundo que las generaciones adultas están dejando a los jóvenes.</p>
      
      <p>La programación incluyó otras producciones como <em>Paper Tiger</em>, presentada por James Gray; <em>Hombre al agua</em>, de Gael García Bernal; <em>Heil Jupiter!</em>, de Carlos Reygadas; y <em>Club Kid</em>, de Jordan Firstman, con la participación del actor mexicano Diego Calva.</p>
      
      <p>También se presentaron <em>Killing Castro</em>, con Diego Boneta, y el documental <em>Mujer santuario</em>, acompañado por Demián Bichir, ampliando la variedad de historias y géneros que formaron parte del encuentro.</p>
      
      <h3>Impulso al talento nacional y palmarés</h3>
      
      <p>Sin embargo, más allá de las figuras reconocidas, el festival mantuvo su objetivo de impulsar a nuevas generaciones de cineastas a través de sus competencias de largometraje, documental y cortometraje mexicano.</p>
      
      <p>Entre las producciones más destacadas estuvo <em>Seis meses en el edificio rosa con azul</em>, de Bruno Santamaría Razo, que obtuvo el Ojo a Mejor Largometraje Mexicano y el Premio del Público en ficción nacional, convirtiéndose en una de las grandes ganadoras de esta edición.</p>
      
      <p>Por su parte, <em>Forensita</em>, de Pablo Vaca, recibió el reconocimiento a Mejor Largometraje Documental Mexicano, mientras que Nicolás Pereda obtuvo el premio a Mejor Dirección por <em>Lo demás es ruido</em>, producción que también le dio a Teresa Sánchez el reconocimiento a Mejor Actriz.</p>
      
      <p>Los cortometrajes también tuvieron un espacio importante en la premiación: <em>Cuerda manual</em>, de Gustavo Obregón, ganó en ficción; <em>Voces del bosque</em>, de Teresa Camou y Arturo López Barrera, en documental; y <em>Cuna de lobas</em>, de Emilia Schettino Bustamante, en animación.</p>
      
      <p>Con estos reconocimientos, el Festival Internacional de Cine de Morelia cerró una edición que combinó la presencia de grandes nombres del cine con el impulso a nuevas propuestas cinematográficas, consolidando su papel como uno de los principales espacios de exhibición y reconocimiento para el cine mexicano.</p>
    `
  },
  {
    id: 'las-imperdibles-leyendas-anima-estudios-dia-de-muertos',
    titulo: 'Las imperdibles: Las leyendas de Ánima Estudios en vísperas del Día de Muertos',
    categoria: 'Especiales',
    fecha: '26 de octubre de 2026',
    autor: 'Mario Ramírez',
    corresponsal: 'Mario Ramírez',
    resumen: 'De La Leyenda de la Nahuala a La Venganza del Charro Negro, repasamos la icónica saga animada de Ánima Estudios que se convirtió en una tradición imperdible para el Día de Muertos.',
    imagen: 'imagenes/charro-leyenda.jpg',
    poster: 'imagenes/charro-leyenda.jpg',
    texto: `
      <p class="lead-paragraph">En el mes de octubre es normal ver películas relacionadas con la época del Halloween o el Día de Muertos, fechas imperdibles para cuando las hojas empiezan a caer en nuestro entorno. Pero para los que somos fanáticos de la fantasía, del terror o del misterio, no podemos dejar de lado la gran saga de películas que nos compartió el estudio que le dio vida al Chavo animado al principio de los años 2000: estamos hablando de Ánima Estudios y su famosa serie de películas donde nos cuentan las principales leyendas que unen a nuestro país.</p>
      
      <h3>¿Quiénes son los responsables de Ánima Estudios?</h3>
      
      <p>Ánima Estudios nació en el año 2002 en la Ciudad de México bajo la dirección de Fernando de Fuentes, José C. García de Letona y Federico. Su mayor característica ha sido ofrecer productos animados en 2D con la implementación de CGI, llegando a contar con más de 23 largometrajes y 9 series de animación donde superan los 500 episodios.</p>
      
      <p>Con el más reciente estreno de <em>La Venganza del Charro Negro</em>, el estudio anunció que no ha cerrado de manera definitiva, sino que han realizado una pausa y reestructuración dentro de sus oficinas.</p>
      
      <h3>Una tradición que perdura</h3>
      
      <p>Volviendo al punto más interesante, con el estreno de <em>La Leyenda de la Nahuala</em> la mayoría de los mexicanos adoptaron la tradición de recordar siempre esta maravillosa saga que desarrolla las mayores leyendas que tiene nuestro país. Comenzando desde la Nahuala hasta sus producciones más recientes, como <em>La leyenda de los chaneques</em> y <em>La venganza del Charro Negro</em>.</p>
      
      <p>Una saga que se ha convertido en un clásico del cine animado mexicano y que con el regreso de su mayor antagonista, el Charro Negro, promete darle un cierre digno a una historia que nos ha venido acompañando desde muy pequeños y que sigue sorprendiendo a propios y extraños.</p>
    `
  },
  {
    id: 'dc-studios-variedad-sin-rumbo-o-universo-cohesivo',
    titulo: 'DC Studios: ¿Variedad sin rumbo o un universo cohesivo?',
    categoria: 'Opinión',
    fecha: '26 de octubre 2026',
    autor: 'Julio Barranco',
    corresponsal: 'Julio Barranco',
    resumen: 'Tras el estreno de Clayface y el arranque de Dioses y Monstruos, el nuevo universo de James Gunn y Peter Safran divide opiniones entre la variedad de sus historias y la falta de cohesión en sus proyectos.',
    imagen: 'imagenes/dcstudios-universo.jpg',
    poster: 'imagenes/dcstudios-universo.jpg',
    texto: `
      <p class="lead-paragraph">Tras el reciente estreno de <em>Clayface</em>, el universo de DC que están dirigiendo James Gunn y Peter Safran va cumpliendo con lo que prometieron de darle una mayor variedad a las historias sin sentir esa fuerte necesidad de ver todo para entender por qué está todo situado en la misma narrativa, pero este mismo aspecto es el que genera dudas en torno a las películas y series.</p>
      
      <p>En general el listón de calidad de todas las producciones es positivo, al menos de las tres series y las tres cintas hasta el momento se han mantenido en un nivel que tanto habían pedido los fans desde hace años pero ¿a qué costo?</p>
      
      <p>Una de las cosas que pretendían los presidentes ejecutivos era la de separar o no intentar comparar de primeras todo su trabajo con lo hecho por Zack Snyder y demás involucrados en el antiguo DCEU.</p>
      
      <p>Entonces empezar prometiendo un Capítulo 1 llamado "Dioses y Monstruos" con proyectos que poco tenían que ver con lo mencionado anteriormente para poder presentar una variedad de personajes e historias que aún no habían sido contadas fue algo que había que dejar al tiempo poner las cosas en su lugar.</p>
      
      <p>Con todo lo que ha salido por parte de DC Studios de manera oficial desde <em>Creature Commandos</em> (2024) genera cuestión en si todo esto forma parte de una misma narrativa o historia, es verdad que en algunos proyectos hay personajes o menciones directas a eventos de otras producciones, no se ve un panorama claro de hacia dónde quieren llegar con lo que se ha puesto sobre la mesa.</p>
      
      <p>El personaje de Rick Flag Sr. aparece en <em>Creature Commandos</em>, <em>Superman</em> y <em>Peacemaker</em> (segunda temporada) con un cambio de personalidad algo cuestionable entre cada proyecto.[cite: 1] Otros que tienen participación en diferentes proyectos son Guy Gardner y Clayface, el primero en la cinta protagonizada por David Corenswet y la serie de <em>Lanterns</em> (2026); mientras el monstruo sale en la ya mencionada serie animada y su cinta de origen.</p>
      
      <p>En esos casos simplemente ayudan a conectar este universo pero con lo visto hasta ahora, cada uno se siente muy independiente por sí solo, salvo <em>Superman</em> que se siente una visualización de esta historia llena de superpersonas, las demás pareciera que se sirven aparte.</p>
      
      <p>Otro factor importante en la construcción de un lugar donde todos convergen es la ausencia de sus pilares importantes, nombres como los de Batman, Wonder Woman, Flash o Aquaman han sido muy sonados ya que la Justice League es un ente de suma importancia en la historia de DC, en este caso existe una Justice Gang, pero se siente la falta de los principales protagonistas.</p>
      
      <p>Más allá de que la alineación de este grupo de héroes pueda variar, su falta se nota y se seguirá esperando a ver en qué momento son introducidos.[cite: 2] Un claro ejemplo de esto es el Caballero de la Noche, quien tiene todo un tema de por medio ya que no se sabe cuál actor le dará vida o si cumplirán el sueño de unir al de Robert Pattinson al canon de esta historia.</p>
      
      <p>La clasificación de los proyectos es otro de los factores por los que se hace difícil seguir la continuidad y que el propio universo tenga mayor audiencia o éxito; de los seis productos sólo dos de ellos son aptos para todo público, cerrando más a la audiencia que de verdad puede seguir este universo en su totalidad.</p>
      
      <p>Con todo lo mencionado tampoco digo que hagan una copia de Marvel Studios, está bien tomar un rumbo distinto al de los vecinos del otro Estudio pero se deben considerar más cosas para consolidar una saga de proyectos como en este caso el único que lo ha sabido hacer son los encabezados por Kevin Feige.</p>
      
      <p>Con la adquisición de Warner por parte de Paramount, ojalá respeten y refuercen el rumbo que lleva este universo hasta el momento para por fin llevar al estrellato a íconos de las historietas que tanto han esperado su momento.</p>
    `
  },
  {
    id: 'ramayana-el-nacimiento-de-una-leyenda-estreno',
    titulo: "'Ramayana: El nacimiento de una leyenda': Llega a las salas una de las superproducciones más ambiciosas del cine indio",
    categoria: 'Noticias',
    fecha: '26 de octubre de 2026',
    autor: 'Lizbeth Flores',
    corresponsal: 'Lizbeth Flores',
    resumen: "Considerada por muchos como 'La Odisea' de Bollywood, la cinta cuenta con un presupuesto de 500 millones de dólares para su saga, música de Hans Zimmer y efectos visuales de los creadores de 'Dune'.",
    imagen: 'imagenes/rayanama-estreno.jpg',
    poster: 'imagenes/rayanama-estreno.jpg',
    texto: `
      <p class="lead-paragraph">El próximo 6 de noviembre, los cines acogerán el estreno de <em>Ramayana: El nacimiento de una leyenda</em>, una de las producciones más épicas y colosales del cine indio reciente. La película, calificada por muchos como la 'Odisea' de Bollywood, traslada a la gran pantalla el histórico poema sánscrito compuesto entre el 400 a. C. y el 400 d. C., uno de los pilares culturales y religiosos clave del hinduismo.</p>
      
      <p>Dirigida por Nitesh Tiwari (<em>Bawaal</em>), esta nueva versión de acción real que sucede a la clásica adaptación de animación lanzada entre 1992 y 1993 busca llevar el relato a una escala gigantesca sin perder la esencia del cine de Bollywood, integrando espectaculares números musicales con tecnología de nivel internacional.</p>
      
      <h3>Una producción monumental</h3>
      
      <p>El proyecto no escatima en recursos. Concebido como una saga de dos películas, cuenta con un presupuesto total anunciado de aproximadamente 500 millones de dólares.</p>
      
      <p>Entre sus elementos técnicos más destacados se encuentran:</p>
      
      <ul>
        <li><strong>Efectos visuales:</strong> A cargo del estudio DNEG, ganador de ocho premios Óscar y responsable de la parte visual de títulos como <em>Dune</em>, <em>Interstellar</em> o <em>Blade Runner 2049</em>. Se calcula que la obra contiene más de 2.500 planos con efectos especiales.</li>
        <li><strong>Banda sonora:</strong> Compuesta por el célebre músico Hans Zimmer.</li>
        <li><strong>Equipo humano:</strong> Un despliegue de más de 10.000 profesionales de todo el mundo.</li>
      </ul>
      
      <p>"Es una epopeya de proporciones colosales, con una enorme profundidad en sus personajes, mucha emoción y un espectáculo visual impresionante. Tiene algo para todo el mundo", afirmó el productor de la cinta, Namit Malhotra, en un clip exclusivo.</p>
      
      <h3>Una historia universal para todo el público</h3>
      
      <p>A pesar de adaptar un texto religioso e histórico antiguo, su equipo enfatiza que la película no requerirá de conocimientos previos para ser disfrutada. Según su director, <em>Ramayana</em> aborda temas universales: "Hay una gran trama entre un padre y un hijo, una historia de superación y una historia de amor muy valiente", con la que espectadores de cualquier parte del planeta podrán identificarse.</p>
      
      <p>A la espera de las críticas oficiales, las primeras reacciones tras sus pases de exhibición iniciales han elogiado con entusiasmo el diseño de personajes y criaturas, los escenarios monumentales y la ambiciosa construcción de su universo visual.</p>
    `
  },
  {
    id: 'nostalgia-o-falta-de-nuevas-ideas-en-el-cine',
    titulo: '¿Nostalgia o falta de nuevas ideas en el cine?: Los clásicos vuelven a salvar la cartelera',
    categoria: 'Opinión',
    fecha: '20 de octubre de 2026',
    autor: 'Liz Flores',
    corresponsal: 'Liz Flores',
    resumen: 'Con ciclos como La Casa del Terror de Cinemex, los reestrenos dominan la cartelera de Halloween. ¿Apostamos a la nostalgia por comodidad o porque escasea la originalidad?',
    imagen: 'imagenes/clasicos-cartelera.jpg',
    poster: 'imagenes/clasicos-cartelera.jpg',
    texto: `
      <p class="lead-paragraph">Con la llegada de Halloween, las salas de cine mexicanas vuelven a recibir historias que marcaron a distintas generaciones. Películas como <em>Carrie</em>, <em>Scream</em>, <em>El silencio de los inocentes</em>, <em>Coraline</em>, entre otras, forman parte de la propuesta especial La Casa del Terror de Cinemex, una iniciativa que invita al público a reencontrarse con algunos de los clásicos del género. Pero, más allá de la nostalgia, vale la pena preguntarnos: ¿por qué seguimos regresando a las mismas historias para sentir miedo?</p>
      
      <p>Es innegable que ver una película clásica en la pantalla grande tiene un atractivo especial. El sonido, la oscuridad de la sala y las reacciones del público convierten la experiencia en algo distinto a verla desde casa. Además, estas producciones demostraron que el terror no depende exclusivamente de los efectos especiales, sino también de una buena historia, personajes complejos y una atmósfera capaz de mantenernos en tensión.</p>
      
      <p>Sin embargo, este regreso también pone sobre la mesa una cuestión importante: ¿la industria cinematográfica está apostando por la nostalgia porque sabe que funciona o porque cada vez resulta más difícil ofrecer historias originales que conquisten al público?</p>
      
      <p>En los últimos años, las secuelas, los remakes y los reestrenos se han convertido en una estrategia recurrente para atraer espectadores. Recuperar películas conocidas representa una oportunidad comercial, pues el público ya tiene un vínculo emocional con ellas. El problema aparece cuando esa fórmula parece más segura que arriesgarse con nuevas propuestas. Recordar una buena película es válido, pero depender constantemente de lo que funcionó en el pasado puede limitar las oportunidades de descubrir algo diferente.</p>
      
      <p>Esto no significa que los clásicos hayan perdido su valor. Al contrario, volver a ver <em>Carrie</em>, por ejemplo, permite reconocer cómo el terror también puede abordar temas como el acoso, el rechazo y el aislamiento. Asimismo, <em>Scream</em> demostró que el género puede cuestionar sus propias fórmulas y jugar con las expectativas del espectador. Son películas que permanecen vigentes no solamente por sus escenas impactantes, sino por las ideas que hay detrás de ellas.</p>
      
      <p>Por eso, el regreso de estos títulos debería ser una oportunidad para celebrar el cine, pero también para exigir más de él. Existen nuevas generaciones de cineastas con propuestas distintas que merecen llegar a las salas y encontrar un público dispuesto a conocerlas. La nostalgia no tendría que convertirse en una barrera para la creatividad, sino en un punto de partida para construir nuevas historias.</p>
      
      <p>Al final, el público también forma parte de esta dinámica. Si elegimos una y otra vez lo que ya conocemos, resulta necesario preguntarnos cuánto estamos dispuestos a arriesgar para descubrir algo nuevo. Podemos disfrutar del regreso de nuestros clásicos favoritos y, al mismo tiempo, apoyar películas que todavía no tienen una historia que las respalde ni personajes que ya formen parte de nuestra memoria.</p>
      
      <p>Esta temporada de Halloween, mientras las salas mexicanas recuperan algunas de las películas más representativas del terror, quizá la pregunta no sea si vale la pena volver a verlas, sino qué lugar estamos dejando para las historias que todavía no conocemos.</p>
      
      <p>Porque el verdadero miedo para el cine no debería ser dejar de asustarnos, sino quedarse sin ideas capaces de sorprendernos.</p>
    `
  },
  {
    id: 'no-todas-las-historias-necesitan-llegar-al-cine',
    titulo: 'No todas las historias necesitan llegar al cine',
    categoria: 'Opinión',
    fecha: '20 de octubre de 2026',
    autor: 'Luisa Fernández',
    corresponsal: 'Luisa Fernández',
    resumen: 'Convertir libros en películas es la fórmula predilecta de Hollywood, pero una comunidad de lectores no garantiza una buena cinta. ¿Realmente todas las historias necesitan una versión en pantalla grande?',
    imagen: 'imagenes/pelis-cmbo.jpg',
    poster: 'imagenes/pelis-cmbo.jpg',
    texto: `
      <p class="lead-paragraph">En los últimos años, Hollywood parece haber encontrado una estrategia que difícilmente piensa abandonar: convertir libros populares en películas. Basta con entrar a redes sociales para encontrarse con el anuncio de una nueva adaptación, incluso cuando todavía no se ha estrenado la anterior. Y aunque para muchos lectores resulta emocionante ver sus historias favoritas en la pantalla, también vale la pena preguntarse si realmente todas necesitan una versión cinematográfica.</p>
      
      <p>Títulos como <em>Romper el círculo</em>, <em>La empleada</em>, <em>Boulevard</em> y <em>Verity</em> son parte de esta tendencia que ha cobrado fuerza durante los últimos dos años. A esto se suma la influencia de plataformas como TikTok, donde las recomendaciones de libros pueden convertir una novela en un fenómeno viral y despertar rápidamente el interés de las productoras.</p>
      
      <p>La razón detrás de esta tendencia no es complicada. Para los estudios cinematográficos, apostar por una historia que ya tiene seguidores representa una oportunidad comercial atractiva. Los lectores conocen a los personajes, tienen expectativas sobre la trama y, en muchos casos, están dispuestos a pagar por ver cómo se desarrolla en la pantalla. Sin embargo, contar con una comunidad de seguidores no garantiza que el resultado sea una buena película.</p>
      
      <p>Eso no quiere decir que las adaptaciones estén destinadas al fracaso. Películas como <em>IT</em>, basada en la novela de Stephen King, o la saga de <em>Los juegos del hambre</em>, inspirada en los libros de Suzanne Collins, demostraron que es posible llevar una obra literaria al cine y construir una experiencia que funcione por sí misma. En ambos casos, las producciones consiguieron conectar con espectadores que incluso desconocían las historias originales.</p>
      
      <p>Pero también existen libros cuya riqueza está precisamente en la manera en que fueron escritos. Las reflexiones de sus protagonistas, los detalles de la narración y la forma en que se desarrollan los acontecimientos pueden ser difíciles de trasladar a una película. Al intentar condensar cientos de páginas en un par de horas, es inevitable que algunos elementos desaparezcan y, en ocasiones, son justamente esos detalles los que hacen especial a la historia.</p>
      
      <p>Por eso, considero que la industria cinematográfica debería pensar dos veces antes de anunciar una nueva adaptación. No se trata de defender que los libros siempre serán mejores que las películas, sino de reconocer que cada medio tiene sus propias formas de contar historias y que no todas funcionan igual cuando cambian de formato.</p>
      
      <p>Otro aspecto que llama la atención es cómo algunas adaptaciones generan conversación mucho antes de comenzar sus grabaciones. Las discusiones sobre qué actores interpretarán a los personajes, si cumplen con las descripciones de los libros o si una escena será incluida terminan convirtiéndose en parte de la publicidad de la producción. En ocasiones, parece que importa más aprovechar la popularidad de una novela que encontrar una manera interesante de llevarla al cine.</p>
      
      <p>Claro que estas producciones también pueden tener resultados positivos. Una película puede motivar a personas que nunca habían escuchado hablar de determinado libro a interesarse por su historia y acercarse a la lectura. Incluso puede darle una nueva oportunidad a una obra publicada años atrás.</p>
      
      <p>El problema no está en adaptar libros, sino en hacerlo simplemente porque representan una oportunidad de negocio. Una buena adaptación necesita algo más que una historia conocida y un reparto atractivo; requiere comprender qué hizo que esa obra conectara con sus lectores y encontrar una forma de transmitirlo a través del lenguaje cinematográfico.</p>
      
      <p>Quizá Hollywood debería dejar de preguntarse cuál será el próximo libro exitoso que puede llevar a la pantalla y comenzar a cuestionarse cuáles historias realmente tienen algo nuevo que ofrecer en ese formato.</p>
      
      <p>Después de todo, una novela no necesita convertirse en película para ser considerada una gran historia. Algunas ya encontraron su mejor versión y está impresa en papel.</p>
    `
  },
  {
    id: 'netflix-o-sala-de-cine',
    titulo: '¿Netflix o una sala de cine? La batalla por nuestra atención',
    categoria: 'Opinión',
    fecha: '20 de octubre de 2026',
    autor: 'Denisse García',
    corresponsal: 'Denisse García', // Por si en tu plantilla usas "autor" o "corresponsal"
    resumen: 'Ver películas en casa ofrece comodidad, pero ir al cine brinda una experiencia colectiva insustituible. ¿Realmente compiten o se complementan?',
    imagen: 'imagenes/netflix-cine.jpg', // Cambia a .jpg si tu archivo es JPG
    poster: 'imagenes/netflix-cine.jpg', // Por compatibilidad si tu script usa "poster"
    texto: `
      <p class="lead-paragraph">Hoy en día, ver películas y series es más fácil que nunca. Gracias a las plataformas digitales, podemos disfrutar de cientos de historias desde la comodidad de nuestra casa, sin horarios ni filas. Sin embargo, ¿realmente ver una película en el sillón es lo mismo que disfrutarla en una sala de cine?</p>
      
      <p>Netflix se ha convertido en una de las plataformas más populares por sus series y producciones originales. No obstante, existen otras opciones como Disney+, Max y Amazon Prime Video, que ofrecen catálogos diferentes para todos los gustos. Elegir la mejor depende de lo que buscamos, aunque contratar varios servicios puede resultar costoso y hacer que pasemos más tiempo buscando qué ver que disfrutando del contenido.</p>
      
      <p>La principal ventaja de las plataformas es la comodidad. Podemos pausar una película, verla a cualquier hora y compartir el espacio con nuestra familia. Sin embargo, ir al cine ofrece algo distinto: una pantalla grande, un sonido envolvente y la oportunidad de compartir las emociones de una historia con otras personas. Reírse con el público, sorprenderse con una escena o comentar la película al salir son experiencias que difícilmente se reproducen de la misma manera en casa.</p>
      
      <p>Desde mi punto de vista, las plataformas digitales no son enemigas del cine, sino una alternativa que ha transformado nuestros hábitos de entretenimiento. Ambas opciones tienen ventajas, pero no deberían considerarse iguales. Mientras una nos ofrece comodidad y variedad, la otra nos permite salir de la rutina y vivir una experiencia colectiva.</p>
      
      <p>Al final, no se trata de elegir entre Netflix o una sala de cine, sino de aprender a disfrutar ambas opciones. Porque una buena película puede emocionarnos desde el sillón, pero también puede convertirse en un recuerdo especial cuando la compartimos con alguien más frente a la pantalla grande.</p>
    `
  },
  {
    id: "wildwood-laika-pelicula-stop-motion",
    titulo: "Wildwood: la película stop motion de LAIKA que tardó 16 años en hacerse",
    corresponsal: "Rigo Flores",
    categoria: "Animación",
    fecha: "19 de octubre de 2026",
    imagen: "imagenes/wildwood-laika-pelicula-stop-motion.jpg",
    resumen: "LAIKA Studios prepara el estreno de Wildwood, una ambiciosa película de animación dirigida por Travis Knight con 231 semanas de producción, 233 marionetas y más de 1,000 artistas y artesanos involucrados.",
    contenido: `
      <p class="nota-lead">En una industria cinematográfica cada vez más acelerada por la tecnología digital, LAIKA Studios apuesta por la paciencia y el trabajo artesanal con <strong>Wildwood</strong>, una película de fantasía que busca llevar la animación stop motion a nuevas dimensiones.</p>

      <p>Dirigida por Travis Knight, responsable de <em>Kubo y las dos cuerdas mágicas</em>, la producción destaca por su escala y complejidad técnica. Después de años de desarrollo, la cinta llegará a los cines el 23 de octubre de 2026, con una propuesta que combina escenarios físicos, personajes hechos a mano y una aventura fantástica.</p>

      <h2>Wildwood, la nueva apuesta de LAIKA por la animación stop motion</h2>
      <p>El estudio responsable de películas como <em>Los mundos de Coraline</em> y <em>Kubo y las dos cuerdas mágicas</em> vuelve a explorar las posibilidades de una técnica que requiere construir físicamente los escenarios y personajes, para después fotografiar sus movimientos cuadro por cuadro.</p>

      <h2>Una producción de 16 años y más de 1,000 artistas</h2>
      <p>Las dimensiones de Wildwood reflejan el nivel de detalle detrás de su realización. La película requirió <strong>231 semanas de producción, 132 decorados físicos, 142,000 rostros fabricados</strong> para dar expresividad a los personajes y <strong>233 marionetas</strong> elaboradas artesanalmente.</p>
      <p>En el proyecto participaron más de 1,000 artistas y artesanos, una muestra de la complejidad que implica crear una película de esta escala mediante animación tradicional.</p>

      <figure class="nota-figura">
        <img src="imagenes/wildwood-prue-ave-animacion.jpg" alt="Prue junto a una criatura fantástica en Wildwood">
        <figcaption>Crédito: LAIKA Studio</figcaption>
      </figure>

      <h2>¿De qué trata Wildwood?</h2>
      <p>La historia sigue a Prue y Curtis, dos compañeros de clase que se adentran en un bosque mágico en Portland, Oregón, para rescatar al hermano pequeño de Prue, secuestrado por una bandada de cuervos.</p>

      <h3>Un bosque mágico lleno de criaturas extraordinarias</h3>
      <p>Durante su aventura, los protagonistas descubren un territorio poblado por animales capaces de hablar, criaturas fantásticas y personajes con intenciones peligrosas.</p>
      <p>La película adapta el libro escrito por Colin Meloy e ilustrado por Carson Ellis, trasladando su universo literario a una producción cinematográfica que apuesta por la fantasía y el detalle visual.</p>

      <figure class="nota-figura">
        <img src="imagenes/wildwood-bosque-secuestro-hermano.jpg" alt="Silueta en el bosque durante el secuestro del hermano de Prue">
        <figcaption>Crédito: LAIKA Studio</figcaption>
      </figure>

      <h2>Travis Knight y el desafío de llevar el stop motion más lejos</h2>
      <p>Para el director, la magnitud del proyecto exigió desarrollar nuevas herramientas y métodos de producción. La escala de los escenarios y la complejidad de las secuencias llevaron al estudio a ampliar sus capacidades técnicas para hacer realidad la película.</p>

      <h2>¿Por qué Wildwood destaca dentro del cine de animación?</h2>
      <p>El stop motion exige un proceso minucioso: cada movimiento debe prepararse físicamente y fotografiarse de manera individual para construir la ilusión de movimiento. En Wildwood, ese procedimiento se combina con una producción de gran escala, lo que convierte su realización en uno de sus principales atractivos.</p>

      <h2>Wildwood llegará a los cines en octubre de 2026</h2>
      <p>La película tiene previsto su estreno para el <strong>23 de octubre de 2026</strong>. Su propuesta ha recibido elogios de medios especializados, que han destacado tanto su apartado visual como su capacidad para conectar con distintas generaciones.</p>
      <p>Con Wildwood, LAIKA busca reafirmar el valor de una técnica que requiere tiempo, precisión y creatividad, en una industria donde la animación digital ocupa buena parte del mercado. Más que una nueva aventura fantástica, la película representa una apuesta por el cine artesanal y por demostrar que las historias construidas fotograma a fotograma todavía tienen mucho que ofrecer en la pantalla grande.</p>
    `
  },
  {
    id: "ideas-en-movimiento-ual-2026",
    corresponsal: "Liz Flores",
    categoria: "Festivales · Cine Universitario",
    tag: "Festivales · Cine Universitario",
    titulo: "Estudiantes de Comunicación llevan sus producciones al cine en Torreón",
    fecha: "17 octubre 2026",
    imagen: "imagenes/ideas-movimiento-claquetazo-inicio.jpg",
    resumen: "Estudiantes de Comunicación y Periodismo de la UAL proyectaron sus cortometrajes en Cinépolis Cuatro Caminos tras participar en el rally de 48 horas Ideas en Movimiento.",
    contenido: `
      <p class="lead-paragraph">Estudiantes de Comunicación y Periodismo de la Universidad Autónoma de La Laguna proyectaron sus cortometrajes en Cinépolis Cuatro Caminos, tras participar en un rally de 48 horas de producción audiovisual.</p>

      <h2 class="section-subtitle">Una competencia de tiempo contado</h2>
      <p>Estudiantes de Comunicación y Periodismo de la Universidad Autónoma de La Laguna (UAL) presentaron sus cortometrajes el viernes 16 de octubre en Cinépolis Cuatro Caminos, como resultado de su participación en "Ideas en Movimiento", un rally de producción audiovisual que desafía a los jóvenes a crear sus propias historias desde cero solo en 48 horas.</p>
      
      <p>El reto comenzó el martes 13 de octubre y puso a los estudiantes frente a una experiencia de creación audiovisual bajo la presión del tiempo. Tras el proceso de producción, los proyectos llegaron a la pantalla grande.</p>

      <section class="story-gallery">
        <figure class="gallery-item">
          <img src="imagenes/ideas-movimiento-equipo-amarillo-maquillaje.jpg" alt="Diseño de producción equipo amarillo" loading="lazy">
          <figcaption>El diseño de producción que el equipo amarillo usó en su cortometraje 30 DE OCTUBRE. / Foto: Hiram Ramírez</figcaption>
        </figure>
        <figure class="gallery-item">
          <img src="imagenes/ideas-movimiento-equipo-blanco-camara.jpg" alt="Equipo blanco en rodaje" loading="lazy">
          <figcaption>El equipo blanco analiza la toma de su cortometraje SÍSIFO. / Foto: Hiram Ramírez</figcaption>
        </figure>
      </section>

      <h2 class="section-subtitle">Presentación oficial en una sala de cine</h2>
      <p>La proyección reunió a estudiantes, padres de familia, directivos y otros integrantes de la comunidad universitaria, quienes asistieron para conocer los proyectos realizados durante esta experiencia cinematográfica. Al finalizar la exhibición, se reconoció a los tres primeros lugares, cuyos ganadores recibieron premios económicos por sus producciones.</p>

      <figure class="featured-media">
        <img src="imagenes/ideas-movimiento-equipo-blanco-primer-lugar.jpg" alt="Equipo blanco ganador" loading="lazy">
        <figcaption>El equipo blanco fue el ganador absoluto de Ideas en Movimiento 2026. / Foto: Hiram Ramírez</figcaption>
      </figure>

      <section class="story-gallery">
        <figure class="gallery-item">
          <img src="imagenes/ideas-movimiento-equipo-verde-segundo-lugar.jpg" alt="Equipo verde segundo lugar" loading="lazy">
          <figcaption>El equipo verde se lleva el segundo lugar junto a mejor guión y actuación (compartido con equipo blanco). / Foto: Hiram Ramírez</figcaption>
        </figure>
        <figure class="gallery-item">
          <img src="imagenes/ideas-movimiento-equipo-morado-tercer-lugar.jpg" alt="Equipo morado tercer lugar" loading="lazy">
          <figcaption>El equipo morado se queda con el tercer lugar de la competencia junto a mejor sonorización y más animado. / Foto: Hiram Ramírez</figcaption>
        </figure>
      </section>

      <p>Con 16 años de trayectoria, "Ideas en Movimiento" se ha convertido en una tradición de la UAL que brinda a los estudiantes la oportunidad de llevar sus ideas a la realidad a través de la creación de cortometrajes. El rally busca involucrar a jóvenes de distintos semestres en un mismo proceso creativo, desde la concepción de una historia hasta su realización audiovisual.</p>
    `
  },
  {
  id: "pan-frances-torreon",
  corresponsal: "Julio Barranco",
  titulo: "Pan Francés: Torreón festeja a un ícono de la Laguna",
  categoria: "Noticias",
  fecha: "17 de octubre 2026",
  imagen: "imagenes/pan-frances-torreon-principal.jpg",
  resumen: "Con más de veinte negocios entre loncherías y panaderías se llevó a cabo el Festival del Pan Francés con más de quince mil personas.",
  contenido: `
    <p class="lead-paragraph">Con más de veinte negocios entre loncherías y panaderías se llevó a cabo el Festival del Pan Francés con un clima frío que no detuvo al público de poder disfrutar de comida, música y dinámicas.</p>
    <h2 class="section-subtitle">La combinación para deleitar un buen platillo</h2>
    <p>Con una temperatura rondando los 17° centígrados arrancó la tercera edición del Festival de Pan Francés en la Plaza Mayor de Torreón con la venta por parte de las diferentes loncherías que se dieron cita del lado de la C. Galeana a la altura de la Av. Matamoros.</p>
    <section class="story-gallery">
      <figure class="gallery-item">
        <img src="imagenes/lonches-ordaz-fila.jpg" alt="Fila en Lonches Ordaz" loading="lazy">
        <figcaption>Larga fila para comprar en LONCHES ORDAZ. / Foto: Julio Barranco</figcaption>
      </figure>
      <figure class="gallery-item">
        <img src="imagenes/lonches-pepes-preparacion.jpg" alt="Preparación en Lonches Pepe's" loading="lazy">
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
      <img src="imagenes/show-bely-beto-plaza-mayor.jpg" alt="Show en Plaza Mayor" loading="lazy">
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

const CARTELERA = [
  // ── EN CARTELERA ──
  { titulo: 'Street Fighter', año: 2026, genero: 'Acción', estado: 'En cartelera', poster: 'imagenes/poster-pelicula1.jpg' },
  { titulo: 'Feliz Día de tu Muerte', año: 2017, genero: 'Reestreno · Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula2.jpg' },
  { titulo: 'Feliz Día de tu Muerte 2', año: 2019, genero: 'Reestreno · Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula3.jpg' },
  { titulo: 'El Cadáver de la Novia', año: 2005, genero: 'Reestreno · Animación', estado: 'En cartelera', poster: 'imagenes/poster-pelicula4.jpg' },
  { titulo: 'Digger', año: 2026, genero: 'Comedia Oscura', estado: 'En cartelera', poster: 'imagenes/poster-pelicula5.jpg' },
  { titulo: 'Madre Siniestra', año: 2026, genero: 'Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula6.jpg' },
  { titulo: 'Clayface', año: 2026, genero: 'Suspenso / Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula7.jpg' },
  { titulo: 'El Poder de la Red', año: 2026, genero: 'Drama', estado: 'En cartelera', poster: 'imagenes/poster-pelicula8.jpg' },
  { titulo: 'Kraken: Terror en lo profundo', año: 2026, genero: 'Terror / Monstruos', estado: 'En cartelera', poster: 'imagenes/poster-pelicula9.jpg' },
  { titulo: 'La Venganza del Charro Negro', año: 2026, genero: 'Animación / Terror', estado: 'En cartelera', poster: 'imagenes/poster-pelicula10.jpg' },

  // ── PRÓXIMAMENTE ──
  { titulo: 'IT', año: 2017, genero: 'Reestreno · Terror', estado: 'Próximamente', poster: 'imagenes/poster-pelicula11.jpg' },
  { titulo: 'IT: Capítulo 2', año: 2019, genero: 'Reestreno · Terror', estado: 'Próximamente', poster: 'imagenes/poster-pelicula12.jpg' },
  { titulo: 'Wildwood: El Bosque Salvaje', año: 2026, genero: 'Animación / Fantasía', estado: 'Próximamente', poster: 'imagenes/poster-pelicula13.jpg' },
  { titulo: 'El Gato con Sombrero', año: 2026, genero: 'Animación / Familiar', estado: 'Próximamente', poster: 'imagenes/poster-gato.jpg' },
  { titulo: 'Godzilla Minus Zero', año: 2026, genero: 'Acción / Monstruos', estado: 'Próximamente', poster: 'imagenes/poster-godzilla.jpg' },
  { titulo: 'Yo soy Rocky', año: 2026, genero: 'Drama / Biográfico', estado: 'Próximamente', poster: 'imagenes/poster-rocky.jpg' },
  { titulo: 'Los Juegos del Hambre: Amanecer en la Cosecha', año: 2026, genero: 'Ciencia Ficción / Aventura', estado: 'Próximamente', poster: 'imagenes/poster-juegos.jpg' },
  { titulo: 'Hechizo', año: 2026, genero: 'Animación / Fantasía', estado: 'Próximamente', poster: 'imagenes/poster-hechizo.jpg' },
  { titulo: 'Focker In-Law', año: 2026, genero: 'Comedia', estado: 'Próximamente', poster: 'imagenes/poster-focker.jpg' },
  { titulo: 'Dune: Part Three', año: 2026, genero: 'Ciencia Ficción', estado: 'Próximamente', poster: 'imagenes/poster-dune.jpg' },
  { titulo: 'Avengers: Doomsday', año: 2026, genero: 'Acción / Superhéroes', estado: 'Próximamente', poster: 'imagenes/poster-avengers.jpg' },
  { titulo: 'Angry Birds 3', año: 2026, genero: 'Animación / Aventura', estado: 'Próximamente', poster: 'imagenes/poster-birds.jpg' },
];
