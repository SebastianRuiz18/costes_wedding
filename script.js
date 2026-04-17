// --- CONFIGURACIÓN DE IDIOMA ---
let currentLang = 'en'; // Default English

const translations = {
    en: {
        menu: "MENU",
        reserve: "RESERVE",
        story: "STORY",
        home: "HOME",
        contact: "CONTACT",
        back: "BACK",
        details: "DETAILS",
        close: "CLOSE",
        nextSection: "NEXT SECTION",
        codePrompt: "Please enter your first and last name to find your invitation.",
        codeLabel: "ACCESS CODE (YOUR NAME)",
        codeError: "Invitation not found. Please try again or contact the couple.",
        enterBtn: "FIND INVITATION",
        guest: "GUEST",
        reservedFor: "We have reserved",
        seats: "seat(s) for your party.",
        nameLabel: "FULL NAME",
        attendingLabel: "WILL YOU BE ATTENDING THE WEDDING?",
        icebreakerLabel: "WILL YOU ATTEND THE ICEBREAKER? (FRIDAY)",
        yes: "YES",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "PHONE",
        dietLabel: "DIETARY RESTRICTIONS",
        none: "None",
        messageLabel: "MESSAGE FOR THE COUPLE",
        songLabel: "MUST-PLAY SONG REQUEST",
        writeMsg: "Write something nice...",
        artistSong: "Artist - Song",
        sendBtn: "SEND CONFIRMATION",
        sending: "SENDING...",
        errorSend: "ERROR SENDING",
        validationMsg: "Please complete the fields marked in red.",
        thankTitle: "THANK YOU!",
        thankMsg: "Your confirmation has been successfully received.",
        seeYou: "See you in September."
    },
    es: {
        menu: "MENÚ",
        reserve: "RESERVAR",
        story: "HISTORIA",
        home: "HOME",
        contact: "CONTACTO",
        back: "VOLVER",
        details: "DETALLES",
        close: "CERRAR",
        nextSection: "SIGUIENTE SECCION",
        codePrompt: "Por favor ingresa tu nombre (como viene en la invitación) para buscar tus lugares.",
        codeLabel: "CÓDIGO (TU NOMBRE)",
        codeError: "Invitación no encontrada. Intenta de nuevo o contacta a la pareja.",
        enterBtn: "BUSCAR INVITACIÓN",
        guest: "INVITADO",
        reservedFor: "Hemos encontrado",
        seats: "lugar(es) para ti.",
        nameLabel: "NOMBRE COMPLETO",
        attendingLabel: "¿NOS ACOMPAÑAS A LA BODA?",
        icebreakerLabel: "¿ASISTIRÁS AL ROMPEHIELO? (VIERNES)",
        yes: "SÍ",
        no: "NO",
        emailLabel: "EMAIL",
        phoneLabel: "TELÉFONO",
        dietLabel: "RESTRICCIONES ALIMENTICIAS",
        none: "Ninguna",
        messageLabel: "MENSAJE PARA LA PAREJA",
        songLabel: "CANCIÓN QUE NO PUEDE FALTAR",
        writeMsg: "Escribe algo lindo...",
        artistSong: "Artista - Canción",
        sendBtn: "ENVIAR CONFIRMACIÓN",
        sending: "ENVIANDO...",
        errorSend: "ERROR AL ENVIAR",
        validationMsg: "Por favor completa los campos marcados en rojo.",
        thankTitle: "¡GRACIAS!",
        thankMsg: "Tu confirmación ha sido recibida con éxito.",
        seeYou: "Nos vemos en Septiembre."
    }
};

// ==========================================
// BASE DE DATOS DE INVITADOS
// ==========================================
const guestsDB = {
    // INVITADOS JAVAN (Novio)
    // GRUPO A
    "CLAUDIAJIMENEZ": ["Claudia Jimenez", "Mom +1"],
    // GRUPO B
    "SILVIAARANGURE": ["Silvia Arangure", "Sara Arangure", "Abue Alba Arangure"],
    // GRUPO C
    "PRIZILACARBONERO": ["Prizila Carbonero de Rojas", "Omar Rojas"],
    // GRUPO D
    "MAYACARBONERO": ["Maya Carbonero", "Stevie Ortega"],
    // GRUPO F 
    "VALENTEVILLASENOR": ["Valente Villaseñor", "Jose Villaseñor"],
    // GRUPO G
    "RICARDOGIL": ["Ricardo Gil"],
    // GRUPO H
    "CONNERBROWN": ["Conner Brown", "Hailey Brown"],
    // GRUPO J
    "JORGEJIMENEZ": ["Jorge Jimenez"],
    // GRUPO K
    "OMARVEYTIA": ["Omar Veytia", "Brianna Veytia"],
    // GRUPO L
    "MADYJIMENEZ": ["Mady Jimenez", "Christian"],
    // GRUPO M
    "FRANKBUSTOS": ["Frank Bustos"],
    // GRUPO N
    "ROBERTOJACOTT": ["Roberto Jacott", "Luz Mariel Jacott", "Luz Jacott +1"],
    // GRUPO O
    "MARIOROJAS": ["Mario Rojas", "Claudia Rojas"],
    // GRUPO P
    "ABUELITAELIZABETH": ["Abuelita Elizabeth", "Christian Carbonero", "Tasha Carbonero", "Franky Carbonero", "Audrina Carbonero"],
    // GRUPO Q
    "ALEJANDROCARBONERO": ["Alejandro Carbonero", "Cristina Carbonero", "Sebastian Carbonero", "Gaby Carbonero"],
    // GRUPO R
    "DAD": ["Dad", "Arlene Carbonero"],
    // GRUPO S
    "ANGELICACUEVAS": ["Angelica Cuevas", "Angelica +1"],
    // GRUPO T
    "ANTONIOOVIEDO": ["Antonio Oviedo", "Sra. Oviedo"],
    // GRUPO U
    "ALFONSODELGADILLO": ["Alfonso Delgadillo", "Kritzia Delgadillo"],
    // GRUPO V
    "YOLANDADERIQUER": ["Yolanda Deriquer", "Emiliano Deriquer", "Emiliano + 1"],
    // GRUPO W
    "LETICIAGONGORA": ["Leticia Gongora", "Max Vargas", "Max +1"],
    // GRUPO X
    "ALVINGOMEZ": ["Alvin Gomez", "Itzel Calleros"],
    // GRUPO Y
    "HAIDERAL-JABER": ["Haider Al-Jaber", "Ali Al-Jaber", "Hassan Al-Jaber", "Hassan Wife"],
    // GRUPO Z
    "NICKOLASFERNANDEZ": ["Nickolas Fernandez"],
    // GRUPO AA
    "MAURICIOORTIZ": ["Mauricio Ortiz", "Shai Ortiz"],
    // GRUPO BB
    "KEVINGOMEZ": ["Kevin Gomez", "Kevin Gomez +1"],
    // GRUPO CC
    "ARMANIPRIETO": ["Armani Prieto", "Paulina Ramirez"],
    // GRUPO DD
    "ARAMOTANEZ": ["Aram Otanez"],
    // GRUPO FF
    "GUILLERMOCABALLERO": ["Guillermo Caballero", "Guillermo Caballero +1"],
    // GRUPO GG
    "CARLOSDURAN": ["Carlos Duran", "Carlos Duran Wife"],
    // GRUPO II
    "JESSERAMIREZ": ["Jesse Ramirez", "Dakota Robertson"],
    // GRUPO JJ
    "EDERCONTRERAS": ["Eder Contreras", "Eder +1"],
    // GRUPO LL
    "OZIELGONZALEZ": ["Oziel Gonzalez"],
    // GRUPO MM
    "KEVINACKERMAN": ["Kevin Ackerman", "Viviana Ackerman"],
    // GRUPO NN
    "IVANMARMEL": ["Ivan Marmel", "Ivan + 1"],
    // GRUPO PP
    "PATRICIOYRIZAR": ["Patricio Yrizar"],
    // GRUPO QQ
    "ANDREAGARCIA": ["Andrea Garcia"],
    // GRUPO RR
    "GUILLERMOCARRILLO": ["Guillermo Carrillo", "Guillermo Carrillo +1"],
    // GRUPO SS
    "TIFFANYVERDUZCO": ["Tiffany Verduzco", "Omar Camacho Perez"],
    // GRUPO TT
    "GASTONBUSTAMANTE": ["Gaston Bustamante", "Gaston Bustamante +1"],
    // GRUPO UU
    "ESTEBANMELENDEZ": ["Esteban Melendez"],
    // GRUPO VV
    "ANTHONYTHUESON": ["Anthony Thueson", "Andrea Thueson"],
    // GRUPO YY
    "JUANPABLOBUSTAMANTE": ["Juan Pablo Bustamante"],
    // GRUPO ZZ
    "PAULOKRASOVSKY": ["Paulo Krasovsky"],
    // GRUPO AAA
    "BENJAMINAGUILAR": ["Benjamin Aguilar", "Benjamin + 1"],
    // GRUPO BBB
    "MARTINTULA": ["Martin Tula", "Martin + 1"],
    // GRUPO CCC
    "HECTORZAMORA": ["Hector Zamora", "Hector +1"],
    // GRUPO DDD
    "RODRIGOGIRALDEZ": ["Rodrigo Giraldez", "Rodrigo Wife"],

    // INVITADOS ALEXIA (Novia)
    // GRUPO A
    "ALEXIAROCHA": ["Alexia Rocha", "Maria Dominga Limón", "Lauro Rocha", "Mauricio Rocha"],
    // GRUPO B
    "PATRICIOROCHA": ["Patricio Rocha", "Isabel Mascareño", "Lauro Patricio Rocha", "Isabella Rocha"],
    // GRUPO C
    "CRISTELROCHA": ["Cristel Rocha", "Hernán Castaneda", "Emma Victoria Castaneda"],
    // GRUPO D - CORREGIDO CON ACEVES
    "JESUSLIMONACEVES": ["Jesús Limón Aceves", "Griselda Torres", "Kenny Limón Torres", "Kevin Limón Torres", "Maria Fernanda Limón"],
    // GRUPO E
    "ALANRODRIGUEZ": ["Alan Rodriguez", "Krisbel Limón"],
    // GRUPO F
    "SENORRUBENLIMON": ["Señor Ruben Limón", "Carlota Amalia", "Ruben Limón", "Jeovany Limón", "Marcela Farfan"],
    // GRUPO G
    "JESUSELENALIMON": ["Jesus Elena Limón", "Ciro Mejia", "Ádaleni Mejia", "Rey Mejia", "Mariana Casian"],
    // GRUPO H
    "ALEJANDRINOLIMON": ["Alejandrino Limón", "Arcelia Limón"],
    // GRUPO I
    "CINDYLIMON": ["Cindy Limón", "Rodólfo Ramirez"],
    // GRUPO J
    "LISETTELIMONDEROBLES": ["Lisette Limón de Robles", "Gustavo Robles"],
    // GRUPO K - SE QUEDA COMO JESUS LIMON ORIGINAL
    "JESUSLIMON": ["Jesús Limón", "Adriana Gastelum Limón"],
    // GRUPO L
    "LUZMARIANIEBLA": ["Luz Maria Niebla", "Dr. Ruben Camacho"],
    // GRUPO M
    "LOURDESMENDEZ": ["Lourdes Méndez", "Fela Osuna"],
    // GRUPO N
    "LOLISLIMON": ["Lolis Limón", "Lilibel Gil", "Eduardo Guarello", "Orbelin Gil", "Erika Gil", "Irám Gil", "Ilse Yessenia Gil"],
    // GRUPO O
    "RAULVILLARREAL": ["Raul Villarreal", "Estefanía Villarreal", "Diego Villarreal", "Octavio Villarreal", "Mariana Villarreal", "Oscar Villarreal", "Ricardo Villarreal"],
    // GRUPO P
    "AMAIRANILIMON": ["Amairani Limón", "Jaime Limón"],
    // GRUPO Q
    "LAMBERTOLIMON": ["Lamberto Limón", "Mirna Limón", "Clarissa Limón", "Emmanuel Perez"],
    // GRUPO R
    "NEREYDALIMON": ["Nereyda Limón", "Señor Arturo Bobadilla", "Vanessa Bobadilla", "Arturo Bobadilla Limón"],
    // GRUPO S
    "CECIGONZALEZ": ["Ceci Gonzalez", "Daniel Gonzalez"],
    // GRUPO T
    "LETICIAANGULO": ["Leticia Angulo", "Joel Angulo"],
    // GRUPO U
    "MARIELALIMON": ["Mariela Limón", "Miguel Hernandez", "Daniela Limón"],
    // GRUPO V
    "MARIBELMEDINA": ["Maribel Medina", "Enrique Gastelum"],
    // GRUPO W
    "FAUSTINOGAXIOLA": ["Faustino Gaxiola", "Irma Gaxiola"],
    // GRUPO X
    "FRANCISELENES": ["Francis Elenes", "Jaime Leyva"],
    // GRUPO Y
    "ENRIQUEROCHA": ["Enrique Rocha"],
    // GRUPO Z
    "ERIKAROCHA": ["Erika Rocha", "Erika Elenes"],
    // GRUPO AA
    "SOFIAROCHA": ["Sofia Rocha", "Rogelio Ramirez", "Hicel Ramirez Rocha", "Husberto Reveles"],
    // GRUPO BB
    "LESLIECHANTELRAMIREZ": ["Leslie Chantel Ramirez"],
    // GRUPO CC
    "SENORATAIDEROCHA": ["Señora Taide Rocha", "Ernesto Sillas", "Lyz Gastelum", "Mauricio Sillas", "Jorge Sillas", "Valeria Sillas", "Areli Melendrez", "Taide Sillas", "Ulises Arce"],
    // GRUPO DD
    "SILVIAROCHA": ["Silvia Rocha", "Verónica Torres", "Silvia Torres", "Thomas", "Emmanuel Torres", "Britney Hurtado", "Mauricio Torres", "Daritza Torres", "Curtis"],
    // GRUPO EE
    "ASHLEYROBLES": ["Ashley Robles", "Liskelsey Robles"],
    // GRUPO FF
    "CAROLINAOVIEDOLASHGARI": ["Carolina Oviedo Lashgari", "Nico Lashgari"],
    // GRUPO GG
    "COVADONGAESCALANTE": ["Covadonga Escalante", "Emilio Romo"],
    // GRUPO HH
    "SARAHSANCHEZ": ["Sarah Sanchez", "Sarah Sanchez plus one"],
    // GRUPO II
    "REBECCASIFUENTES": ["Rebecca Sifuentes", "Elizabeth Sifuentes"],
    // GRUPO JJ
    "BRIANNAHERRERA": ["Brianna Herrera"],
    // GRUPO KK
    "LANDONGRANILLO": ["Landon Granillo", "Landon plus one"],
    // GRUPO LL
    "KAILEYWOLF": ["Kailey Wolf", "Henry Wolf"],
    // GRUPO MM
    "ALEXISANDERSON": ["Alexis Anderson", "Rebecca Muench"],
    // GRUPO NN
    "SOFIAMAYER": ["Sofía Mayer", "Andrés Domínguez"],
    // GRUPO OO
    "MICHELLESMITH": ["Michelle Smith", "Jenna Contreras"],
    // GRUPO PP
    "MARIOOCHOA": ["Mario Ochoa", "Letizia Riedel", "Señor Mario Ochoa", "Paloma Alonso"],
    // GRUPO QQ
    "VIANNYVALENZUELA": ["Vianny Valenzuela", "Jessica Valenzuela"],
    // GRUPO RR
    "CRISTINAMACIAS": ["Cristina Macías", "Daniella Ramirez"],
    // GRUPO SS
    "QUIQUEFLORES": ["Quique Flores", "Alejandra Dávila"],
    // GRUPO TT
    "MARIACARDENAS": ["Maria Cardenas"],
    // GRUPO UU
    "LUPITALIMON": ["Lupita Limón", "Alfonso Limón"],
    // GRUPO VV
    "LICHINOJOSA": ["Lic Hinojosa", "Paloma Hinojosa"],
    // GRUPO WW
    "GUADALUPEBARRAGAN": ["Guadalupe Barragán", "Pompeyo Barragán"],
    // GRUPO XX
    "VERONICAJOHNSON": ["Verónica Johnson", "Verónica Johnson plus one"],
    // GRUPO YY
    "SANDRATORRES": ["Sandra Torres", "Miguel Rivas"],
    // GRUPO ZZ
    "JUANBERNAL": ["Juan Bernal", "Natalia Smith"],
    // GRUPO AAA
    "DRAMICHELMARTINEZFRANCO": ["Dra. Michel Martínez Franco", "Dra. Michelle plus one"],
    // GRUPO BBB
    "SYDNEYRIBOT": ["Sydney Ribot", "Sydney Ribot plus one"],
    // GRUPO CCC
    "ALONDRALIMON": ["Alondra Limón", "Moe Othman"],
    // GRUPO DDD
    "ANGELURETA": ["Ángel Ureta", "Juan Alberto Ureta"],
    // GRUPO EEE
    "SAMMIERYAN": ["Sammie Ryan", "Carmine Ryan"],
    // GRUPO FFF
    "RAMIROGAXIOLA": ["Ramiro Gaxiola", "Fidelia Gaxiola"],
    // GRUPO GGG
    "ALEJANDRAROCHA": ["Alejandra Rocha"],
    // GRUPO HHH
    "MICHAELLEAL": ["Michael Leal", "Marlene Ortiz"]
};

// ==========================================
// LISTA VIP ROMPEHIELO
// Invitados de la imagen con número en la columna "Domecq"
// ==========================================
const rompehieloVIPs = [
    // Grupo Javan
    "CLAUDIA JIMENEZ",
    "MOM +1",
    "PRIZILA CARBONERO DE ROJAS",
    "OMAR ROJAS",
    "MAYA CARBONERO",
    "STEVIE ORTEGA",
    "VALENTE VILLASEÑOR",
    "JOSE VILLASEÑOR",
    "RICARDO GIL",
    "CONNER BROWN",
    "HAILEY BROWN",
    "JORGE JIMENEZ",
    "OMAR VEYTIA",
    "BRIANNA VEYTIA",
    "MADY JIMENEZ",
    "CHRISTIAN",
    "FRANK BUSTOS",
    "ROBERTO JACOTT",
    "FRANKY CARBONERO",
    "AUDRINA CARBONERO",
    "SEBASTIAN CARBONERO",
    "GABY CARBONERO",
    "DAD",
    "ARLENE CARBONERO",
    "ANGELICA CUEVAS",
    "ANGELICA +1",
    "ANTONIO OVIEDO",
    "SRA. OVIEDO",
    "EMILIANO DERIQUER",
    "EMILIANO + 1",
    "MAX VARGAS",
    "MAX +1",
    "ALVIN GOMEZ",
    "ITZEL CALLEROS",
    "HAIDER AL-JABER",
    "ALI AL-JABER",
    "HASSAN AL-JABER",
    "HASSAN WIFE",
    "NICKOLAS FERNANDEZ",
    "MAURICIO ORTIZ",
    "SHAI ORTIZ",
    "KEVIN GOMEZ",
    "KEVIN GOMEZ +1",
    "ARMANI PRIETO",
    "PAULINA RAMIREZ",
    "ARAM OTANEZ",
    "GUILLERMO CABALLERO",
    "GUILLERMO CABALLERO +1",
    "CARLOS DURAN",
    "CARLOS DURAN WIFE",
    "JESSE RAMIREZ",
    "DAKOTA ROBERTSON",
    "EDER CONTRERAS",
    "EDER +1",
    "OZIEL GONZALEZ",
    "KEVIN ACKERMAN",
    "VIVIANA ACKERMAN",
    "IVAN MARMEL",
    "IVAN + 1",
    "PATRICIO YRIZAR",
    "ANDREA GARCIA",
    "GUILLERMO CARRILLO",
    "GUILLERMO CARRILLO +1",
    "TIFFANY VERDUZCO",
    "OMAR CAMACHO PEREZ",
    "GASTON BUSTAMANTE",
    "GASTON BUSTAMANTE +1",
    "ESTEBAN MELENDEZ",
    "ANTHONY THUESON",
    "ANDREA THUESON",
    "JUAN PABLO BUSTAMANTE",
    "PAULO KRASOVSKY",
    "BENJAMIN AGUILAR",
    "BENJAMIN + 1",
    "MARTIN TULA",
    "MARTIN + 1",
    "HECTOR ZAMORA",
    "HECTOR +1",
    "RODRIGO GIRALDEZ",
    "RODRIGO WIFE",

    //Grupo Alexia
    "ALEXIA ROCHA",
    "MARIA DOMINGA LIMÓN",
    "LAURO ROCHA",
    "MAURICIO ROCHA",
    "PATRICIO ROCHA",
    "ISABEL MASCAREÑO",
    "LAURO PATRICIO ROCHA",
    "ISABELLA ROCHA",
    "CRISTEL ROCHA",
    "HERNÁN CASTANEDA",
    "EMMA VICTORIA CASTANEDA",
    "KENNY LIMÓN TORRES",
    "KEVIN LIMÓN TORRES",
    "MARIA FERNANDA LIMÓN",
    "ALAN RODRIGUEZ",
    "KRISBEL LIMÓN",
    "RUBEN LIMÓN",
    "CIRO MEJIA",
    "REY MEJIA",
    "MARIANA CASIAN",
    "CINDY LIMÓN",
    "RODÓLFO RAMIREZ",
    "LISETTE LIMÓN DE ROBLES",
    "GUSTAVO ROBLES",
    "JESÚS LIMÓN",
    "ADRIANA GASTELUM LIMÓN",
    "LOURDES MÉNDEZ",
    "FELA OSUNA",
    "LOLIS LIMÓN",
    "LILIBEL GIL",
    "EDUARDO GUARELLO",
    "ORBELIN GIL",
    "ERIKA GIL",
    "IRÁM GIL",
    "ILSE YESSENIA GIL",
    "RAUL VILLARREAL",
    "ESTEFANÍA VILLARREAL",
    "DIEGO VILLARREAL",
    "OCTAVIO VILLARREAL",
    "MARIANA VILLARREAL",
    "OSCAR VILLARREAL",
    "RICARDO VILLARREAL",
    "AMAIRANI LIMÓN",
    "JAIME LIMÓN",
    "LAMBERTO LIMÓN",
    "MIRNA LIMÓN",
    "CLARISSA LIMÓN",
    "EMMANUEL PEREZ",
    "NEREYDA LIMÓN",
    "SEÑOR ARTURO BOBADILLA",
    "VANESSA BOBADILLA",
    "ARTURO BOBADILLA LIMÓN",
    "CECI GONZALEZ",
    "DANIEL GONZALEZ",
    "LETICIA ANGULO",
    "JOEL ANGULO",
    "MARIELA LIMÓN",
    "MIGUEL HERNANDEZ",
    "DANIELA LIMÓN",
    "ENRIQUE ROCHA",
    "ERIKA ROCHA",
    "ERIKA ELENES",
    "SOFIA ROCHA",
    "ROGELIO RAMIREZ",
    "HICEL RAMIREZ ROCHA",
    "HUSBERTO REVELES",
    "LESLIE CHANTEL RAMIREZ",
    "SEÑORA TAIDE ROCHA",
    "ERNESTO SILLAS",
    "LYZ GASTELUM",
    "MAURICIO SILLAS",
    "JORGE SILLAS",
    "VALERIA SILLAS",
    "ARELI MELENDREZ",
    "TAIDE SILLAS",
    "ULISES ARCE",
    "SILVIA ROCHA",
    "VERÓNICA TORRES",
    "SILVIA TORRES",
    "THOMAS",
    "EMMANUEL TORRES",
    "BRITNEY HURTADO",
    "MAURICIO TORRES",
    "DARITZA TORRES",
    "CURTIS",
    "ASHLEY ROBLES",
    "LISKELSEY ROBLES",
    "CAROLINA OVIEDO LASHGARI",
    "NICO LASHGARI",
    "COVADONGA ESCALANTE",
    "EMILIO ROMO",
    "SARAH SANCHEZ",
    "SARAH SANCHEZ PLUS ONE",
    "REBECCA SIFUENTES",
    "ELIZABETH SIFUENTES",
    "BRIANNA HERRERA",
    "LANDON GRANILLO",
    "LANDON PLUS ONE",
    "KAILEY WOLF",
    "HENRY WOLF",
    "ALEXIS ANDERSON",
    "REBECCA MUENCH",
    "SOFÍA MAYER",
    "ANDRÉS DOMÍNGUEZ",
    "MICHELLE SMITH",
    "JENNA CONTRERAS",
    "MARIO OCHOA",
    "LETIZIA RIEDEL",
    "SEÑOR MARIO OCHOA",
    "PALOMA ALONSO",
    "VIANNY VALENZUELA",
    "JESSICA VALENZUELA",
    "CRISTINA MACÍAS",
    "DANIELLA RAMIREZ",
    "QUIQUE FLORES",
    "ALEJANDRA DÁVILA",
    "LUPITA LIMÓN",
    "ALFONSO LIMÓN",
    "GUADALUPE BARRAGÁN",
    "POMPEYO BARRAGÁN",
    "VERÓNICA JOHNSON",
    "VERÓNICA JOHNSON PLUS ONE",
    "JUAN BERNAL",
    "NATALIA SMITH",
    "SYDNEY RIBOT",
    "SYDNEY RIBOT PLUS ONE",
    "ALONDRA LIMÓN",
    "MOE OTHMAN",
    "ÁNGEL URETA",
    "JUAN ALBERTO URETA",
    "SAMMIE RYAN",
    "CARMINE RYAN",
    "ALEJANDRA ROCHA",
    "MICHAEL LEAL",
    "MARLENE ORTIZ"

];

// DATOS DE SECCIONES
const slidesData = [
    { 
        img: 'alexiayjavan.webp', 
        subtitle: { en: 'WELCOME', es: 'BIENVENIDOS' }, 
        btnText: { en: 'INVITATION', es: 'INVITACIÓN' }, 
        title: { en: 'ALEXIA & JAVAN', es: 'ALEXIA & JAVAN' }, 
        detailsContent: {
            en: `In the vast silence of the cosmos, two stars wandered alone—
            glowing, searching, waiting.</p><br><p>

            Across endless light-years, their paths curved through galaxies,
            drawn by something unseen, yet certain.
            Destiny, quietly guiding them toward one another.</p><br><p>

            And when they finally met, the universe paused.</p><br><p>

            Their collision wasn’t destruction—it was creation.<br>
            From their union, a new galaxy was born
            full of warmth, rhythm, and eternal light.</p><br><p>

            Two souls, now one constellation,
            forever illuminating the same sky.</p><br>
            
            <p><strong>WELCOME</strong></p><p>Valle de Guadalupe</p><p>September 2026</p><br>
            
            <p><strong>FRIDAY, SEPTEMBER 11</strong></p>
            <p>Icebreaker at Casa Pedro Domecq</p><br>
            <p><strong>SATURDAY, SEPTEMBER 12</strong>
            <p>Ceremony & Reception</p>
            <p>Hotel Andana</p><p>Valle de Guadalupe, B.C.</p><br>`,
            es: `En el vasto silencio del cosmos, dos estrellas vagaban solas—
            brillando, buscando, esperando.</p><br><p>

            A través de infinitos años luz, sus caminos se curvaron entre galaxias,
            atraídas por algo invisible, pero certero.
            El destino, guiándolas silenciosamente la una hacia la otra.</p><br><p>

            Y cuando finalmente se encontraron, el universo se detuvo.</p><br><p>

            Su colisión no fue destrucción—fue creación.<br>
            De su unión, nació una nueva galaxia
            llena de calidez, ritmo y luz eterna.</p><br><p>

            Dos almas, ahora una sola constelación,
            iluminando por siempre el mismo cielo.</p><br>
            
            <p><strong>BIENVENIDOS</strong></p><p>Valle de Guadalupe</p><p>Septiembre 2026</p><br>
            
            <p><strong>VIERNES, 11 DE SEPTIEMBRE</strong></p>
            <p>Rompehielo en Casa Pedro Domecq</p><br>
            <p><strong>SÁBADO, 12 DE SEPTIEMBRE</strong>
            <p>Ceremonia y Recepción</p>
            <p>Hotel Andana</p><p>Valle de Guadalupe, B.C.</p><br>`
        }
    },
    { 
        img: 'Itinerary.webp', 
        subtitle: { en: 'THE BIG DAY', es: 'EL GRAN DÍA' }, 
        btnText: { en: 'VIEW SCHEDULE', es: 'VER HORARIOS' }, 
        title: { en: 'ITINERARY', es: 'ITINERARIO' }, 
        detailsContent: {
            en: `<p><strong>FRIDAY, SEPT 11</strong></p><br>
            <p><strong>Opening Night Welcome Party</strong></p>
            <p><strong>Location:</strong> Casa Pedro Domecq | Valle de Guadalupe</p>
            <p><strong>Time:</strong> To be determined</p>
            <p><strong>Dress Code:</strong> Cocktail Style</p><br>

            <p><strong>SATURDAY, SEPT 12</strong></p><br>
            <p><strong>Mass Ceremony</strong></p>
            <p><strong>Location:</strong> Hotel Andana | Valle de Guadalupe</p>
            <p><strong>Time:</strong> To be determined</p>
            <p><strong>Dress Code:</strong> Black Tie</p><br>

            <p><strong>Reception</strong></p>
            <p><strong>Location:</strong> Hotel Andana | Valle de Guadalupe</p>
            <p><strong>Time:</strong> To be determined</p>
            <p><strong>Dress Code:</strong> Black Tie</p><br>
            
            `,
            es: `<p><strong>VIERNES, SEPT 11</strong></p><br>
            <p><strong>Fiesta de Bienvenida</strong></p>
            <p><strong>Ubicación:</strong> Casa Pedro Domecq | Valle de Guadalupe</p>
            <p><strong>Horario:</strong> Por confirmar</p>
            <p><strong>Codigo de Vestimenta:</strong> Cocktail Style</p><br>

            <p><strong>SABADO, SEPT 12</strong></p><br>
            <p><strong>Ceremonia Religiosa</strong></p>
            <p><strong>Ubicación:</strong> Hotel Andana | Valle de Guadalupe</p>
            <p><strong>Horario:</strong> Por confirmar</p>
            <p><strong>Codigo de Vestimenta:</strong> Black Tie</p><br>

            <p><strong>Recepción</strong></p>
            <p><strong>Ubicación:</strong> Hotel Andana | Valle de Guadalupe</p>
            <p><strong>Horario:</strong> Por confirmar</p>
            <p><strong>Codigo de Vestimenta:</strong> Black Tie</p><br>
            `
        }
    },
    { 
        img: 'Hotels.webp', // Una imagen de estilo hotel/habitación luxury
        subtitle: { en: 'ACCOMMODATIONS', es: 'HOSPEDAJE' }, 
        btnText: { en: 'WHERE TO STAY', es: 'DÓNDE QUEDARSE' }, 
        title: { en: 'HOTELS', es: 'HOTELES' }, 
        detailsContent: {
            en: `
                <p>For your comfort, we suggest these nearby options in Valle de Guadalupe:</p><br>

                <img src="HotelAndana.jpg" class="chef-photo" alt="Hotel Andana">
                <br><br>
                <p><strong>HOTEL ANDANA</strong></p>
                <p>Set in the heart of Valle de Guadalupe, Hotel Andana will serve as the setting for our wedding weekend.<br>
                For the privacy and intimacy of our celebration, the property has been exclusively reserved for our invited guests.
                Kindly note this will be an adults-only weekend.</p>
                <p><a href="https://hotelandana.com/" target="_blank">View Website</a></p><br>
                
                <img src="HotelBruma.jpg" class="chef-photo" alt="Bruma Wine Resort">
                <br><br>
                <p><strong>BRUMA WINE RESORT</strong></p>
                <p>Nestled within the landscape of Valle de Guadalupe, Bruma Wine Resort offers a refined escape where contemporary design meets nature. <br>
                Known for its serene atmosphere and curated culinary experiences, it is a perfect choice for guests looking to immerse themselves in the essence of the valley.</p>
                <p><a href="https://www.brumawineresort.com/" target="_blank">View Website</a></p><br>

                <img src="HotelLosOlivos.jpg" class="chef-photo" alt="Los Olivos">
                <br><br>
                <p><strong>HACIENDA LOS OLIVOS</strong></p>
                <p>Set amidst the vineyards of Valle de Guadalupe, Hacienda Los Olivos offers a charming and intimate stay, blending traditional architecture with the natural beauty of the region.<br>
                A tranquil retreat just minutes from Hotel Andana, ideal for guests seeking a more private and relaxed experience.</p>
                <p><a href="https://www.brumawineresort.com/" target="_blank">View Website</a></p><br>
            `,
            es: `
                <p>Para su comodidad, les sugerimos estas opciones cercanas en Valle de Guadalupe:</p><br>

                <img src="HotelAndana.jpg" class="chef-photo" alt="Hotel Andana">
                <br><br>
                <p><strong>HOTEL ANDANA</strong></p>

                Ubicado en el corazón del Valle de Guadalupe, Hotel Andana será el escenario de nuestro fin de semana de celebración. <br>

                Por la privacidad de este momento, el hotel ha sido reservado exclusivamente para nuestros invitados.
                Agradecemos considerar que será una celebración solo para adultos.
                </p>
                <p><a href="https://hotelandana.com/" target="_blank">View Website</a></p><br>
                
                <img src="HotelBruma.jpg" class="chef-photo" alt="Bruma Wine Resort">
                <br><br>
                <p><strong>BRUMA WINE RESORT</strong></p>
                <p>Bruma Wine Resort ofrece una escapada refinada donde el diseño contemporáneo se encuentra con la naturaleza. <br>
                Reconocido por su atmósfera serena y sus experiencias culinarias cuidadosamente curadas, es una opción ideal para quienes desean sumergirse en la esencia del valle.</p>
                <p><a href="https://www.brumawineresort.com/" target="_blank">View Website</a></p><br>

                <img src="HotelLosOlivos.jpg" class="chef-photo" alt="Los Olivos">
                <br><br>
                <p><strong>HACIENDA LOS OLIVOS</strong></p>
                <p>Rodeada de viñedos en el Valle de Guadalupe, Hacienda Los Olivos ofrece una estancia íntima, a pocos minutos de Hotel Andana.<br>
                Ideal para quienes buscan una experiencia más privada y relajada.</p>
                <p><a href="https://www.brumawineresort.com/" target="_blank">View Website</a></p><br>                
            `
        }
    },
    {
        // SECCIÓN CULINARY
        img: 'Catering.jpg', 
        subtitle: { en: 'CULINARY EXPERIENCE', es: 'EXPERIENCIA CULINARIA' }, 
        btnText: { en: 'MEET THE CHEF', es: 'CONOCE AL CHEF' }, 
        title: { en: 'CATERING', es: 'BANQUETE' }, 
        detailsContent: {
            en:`
            <div class="chef-container">
                <img src="Chef.webp" class="chef-photo" alt="Chef Javier Plascencia">
                <br><br>
                <h3>CHEF JAVIER PLASCENCIA</h3>
                <br>
                <p>It is a true privilege for us to share the artistry of Chef Javier Plascencia, one of the most iconic figures in contemporary Mexican cuisine.</p>
                <br>
                <p>The same brilliance that earned his restaurant, Animalón, a Michelin star will be brought to our table to offer a world-class culinary experience.</p>
                <br>
                <p>With a proposal that pays tribute to the richness of Baja California and the natural cycles of the land, Javier has designed a seasonal banquet that goes beyond the conventional.</p>
                <br>
                <p>As a gesture of our affection and to express how much we value you being a part of our great day, we have prepared this table where the excellence of an internationally renowned chef will transform our wedding into an unforgettable memory.</p>
            </div>`, 
            
            es: `
            <div class="chef-container">
                <img src="Chef.webp" class="chef-photo" alt="Chef Javier Plascencia">
                <br><br>
                <h3>CHEF JAVIER PLASCENCIA</h3>
                <br>
                <p>Es un privilegio para nosotros enriquecer nuestra celebración con la maestría de Chef Javier Plascencia, una de las figuras más emblemáticas de la gastronomía mexicana contemporánea. Su genialidad, que ha llevado a Animalón a ser reconocido con una estrella Michelin, se traslada a nuestra mesa para ofrecernos una experiencia culinaria de clase mundial.</p>
                <br>
                <p>Con una propuesta que rinde tributo a la riqueza de Baja California y a los ciclos de la tierra, Javier ha diseñado un banquete estacional que trasciende lo convencional.</p>
                <br>
                <p>Como un gesto de nuestro afecto y para expresar lo mucho que valoramos que sean parte de nuestro gran día, hemos preparado esta mesa donde la cocina de un chef de renombre internacional transformará nuestra boda en un recuerdo inolvidable.</p>
            </div>`
        }
    },
    { 
        img: 'Information.webp', 
        subtitle: { en: 'IMPORTANT DETAILS', es: 'DETALLES IMPORTANTES' }, 
        btnText: { en: 'GUEST GUIDE', es: 'GUÍA DEL INVITADO' }, 
        title: { en: 'INFORMATION', es: 'INFORMACIÓN' }, 
        detailsContent: {
            en: `<p>CHILDREN - Adults ONLY Weekend</p>`,
            es: `<p>NIÑOS - Fin de Semana SOLO para Adultos</p>`
        }
    },
    { 
        img: 'Registry.webp', 
        subtitle: { en: 'A DETAIL', es: 'UN DETALLE' }, 
        btnText: { en: 'VIEW REGISTRY', es: 'VER MESA' }, 
        title: { en: 'REGISTRY', es: 'MESA DE REGALOS' }, 
        detailsContent: {
            en: `<p><a href="https://www.bloomingdales.com/registry/Alexia-Rocha-Javan-Carbonero/1396114" target="_blank" rel="noopener noreferrer">Bloomingdales</a></p><p><a href="https://www.williams-sonoma.com/registry/vr6t9hmqbh/registry-list.html" target="_blank" rel="noopener noreferrer">Williams Sonoma</a></p>`,
            es: `<p><a href="https://www.bloomingdales.com/registry/Alexia-Rocha-Javan-Carbonero/1396114" target="_blank" rel="noopener noreferrer">Bloomingdales</a></p><p><a href="https://www.williams-sonoma.com/registry/vr6t9hmqbh/registry-list.html" target="_blank" rel="noopener noreferrer">Williams Sonoma</a></p>`
        }
    },
    { 
        img: 'RSVP.webp', 
        subtitle: { en: 'RSVP', es: 'CONFIRMA ASISTENCIA' }, 
        btnText: { en: 'JOIN US', es: 'SER PARTE' }, 
        title: { en: 'RSVP', es: 'RSVP' }, 
        isRSVP: true
    },
    { 
        img: 'Contact.webp', 
        subtitle: { en: 'QUESTIONS?', es: '¿TIENES DUDAS?' }, 
        btnText: { en: 'WRITE US', es: 'ESCRIBIRNOS' }, 
        title: { en: 'CONTACT', es: 'CONTACTO' }, 
        detailsContent: {
            en: `<p><a href="mailto:alexiayjavan@gmail.com" style="text-decoration: none; color: inherit;">alexiayjavan@gmail.com</a></p>`,
            es: `<p><a href="mailto:alexiayjavan@gmail.com" style="text-decoration: none; color: inherit;">alexiayjavan@gmail.com</a></p>`
        }

    }
];

// DOM & SWIPER
const bgLayer = document.getElementById('bg-layer');
const bgLayerNext = document.getElementById('bg-layer-next'); 
const subtitleEl = document.getElementById('subtitle');
const ctaBtn = document.getElementById('cta-btn');
const langOpts = document.querySelectorAll('.lang-opt');
const swiperWrapper = document.getElementById('dynamic-swiper-wrapper');
const mainHero = document.getElementById('main-hero');
let swiper = null;

function rebuildSwiper(initialIndex = 0) {
    if (swiper !== null) {
        swiper.destroy(true, true);
    }

    swiperWrapper.innerHTML = '';

    slidesData.forEach(slide => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'swiper-slide';
        slideDiv.innerHTML = `<div class="slide-inner"><h2 class="slide-title">${slide.title[currentLang]}</h2></div>`;
        swiperWrapper.appendChild(slideDiv);
    });

    swiper = new Swiper(".text-swiper", {
        loop: false, 
        slidesPerView: "auto", 
        centeredSlides: true, 
        speed: 600, 
        grabCursor: true, 
        initialSlide: initialIndex,
        mousewheel: true, 
        keyboard: { enabled: true },
        roundLengths: true, 
        observer: true, 
        observeParents: true,
        touchEventsTarget: 'container',      // ← AGREGA ESTA
        preventClicks: false,                // ← AGREGA ESTA
        preventClicksPropagation: false,     // ← AGREGA ESTA
        breakpoints: { 320: { spaceBetween: 20 }, 768: { spaceBetween: 50 } },
        on: {
            init: function () { updateContent(this.realIndex); },
            slideChange: function () { updateContent(this.realIndex); }
        }
    });
}

window.addEventListener('load', () => {
    document.fonts.ready.then(() => {
        rebuildSwiper(0);
        setTimeout(() => {
            mainHero.classList.remove('loading-state');
            mainHero.classList.add('loaded-visible');
            if(swiper) swiper.update();
        }, 100);
    });
});

// CAMBIO DE IDIOMA
langOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        if(selectedLang !== currentLang) {
            currentLang = selectedLang;
            updateLanguage();
        }
    });
});

function updateLanguage() {
    const t = translations[currentLang];
    const currentIndex = swiper ? swiper.activeIndex : 0;

    document.getElementById('nav-menu-text').textContent = t.menu;
    document.getElementById('nav-reserve-text').textContent = t.reserve;
    document.getElementById('menu-home-btn').textContent = t.home;
    document.getElementById('menu-contact-btn').textContent = t.contact;
    document.getElementById('back-to-home').textContent = t.back;
    
    const isExpanded = document.getElementById('details-content-box').classList.contains('expanded');
    document.getElementById('detail-toggle-text').textContent = isExpanded ? t.close : t.details;

    langOpts.forEach(o => {
        if(o.getAttribute('data-lang') === currentLang) o.classList.add('active-lang');
        else o.classList.remove('active-lang');
    });

    const menuLinks = document.querySelectorAll('.menu-items .menu-link');
    menuLinks.forEach(link => {
        const idx = link.getAttribute('data-index');
        if(slidesData[idx]) link.textContent = slidesData[idx].title[currentLang];
    });

    const swiperContainer = document.querySelector('.text-swiper');
    swiperContainer.classList.add('opacity-zero');
    
    setTimeout(() => {
        rebuildSwiper(currentIndex);
        swiperContainer.classList.remove('opacity-zero');
    }, 200);

    if (document.body.classList.contains('details-mode')) {
        openDetailsMode(currentIndex);
    }
}

function updateContent(index) {
    const data = slidesData[index];
    if(!data) return;
    
    bgLayer.style.opacity = '0';
    subtitleEl.style.opacity = '0';
    ctaBtn.style.opacity = '0';
    
    setTimeout(() => {
        bgLayer.style.setProperty('--bg-img', `url('${data.img}')`);
        bgLayer.style.opacity = '1';
        
        subtitleEl.textContent = data.subtitle[currentLang];
        ctaBtn.textContent = data.btnText[currentLang];
        ctaBtn.setAttribute('href', data.btnLink || '#');
        subtitleEl.style.opacity = '1';
        ctaBtn.style.opacity = '1';
    }, 400); 
}

const reserveBtn = document.getElementById('nav-reserve-text');
if(reserveBtn) {
    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideTo(6); 
        openDetailsMode(6);
    });
}

// LOGICA GENERAL
const mainLogo = document.getElementById('main-logo');
mainLogo.addEventListener('click', () => {
    swiper.slideTo(0);
    closeDetailsMode();
    const menuOverlay = document.getElementById('menu-overlay');
    const menuBtn = document.getElementById('menu-btn-trigger');
    if (menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    }
});

const menuBtn = document.getElementById('menu-btn-trigger');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const homeBtn = document.getElementById('menu-home-btn');
const contactBtn = document.getElementById('menu-contact-btn');

function toggleMenu() {
    const isActive = menuOverlay.classList.contains('active');
    if (isActive) {
        menuOverlay.classList.remove('active');
        menuBtn.classList.remove('menu-text-active');
    } else {
        menuOverlay.classList.add('active');
        menuBtn.classList.add('menu-text-active');
    }
}
menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const index = parseInt(link.getAttribute('data-index'));
        swiper.slideTo(index);
        toggleMenu();
        closeDetailsMode();
    });
});
menuOverlay.addEventListener('click', (e) => { if (e.target === menuOverlay) toggleMenu(); });
homeBtn.addEventListener('click', () => { swiper.slideTo(0); toggleMenu(); closeDetailsMode(); });
contactBtn.addEventListener('click', () => { swiper.slideTo(7); toggleMenu(); closeDetailsMode(); });

const detailsBar = document.getElementById('details-bar');
const detailsContentBox = document.getElementById('details-content-box');
const detailBarTitle = document.getElementById('detail-bar-title');
const detailFullTitle = document.getElementById('detail-full-title');
const detailBodyText = document.getElementById('detail-body-text');
const detailIcon = document.getElementById('detail-icon');
const detailToggleText = document.getElementById('detail-toggle-text');
const closeDetailsBtn = document.getElementById('close-details-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const nextSectionBar = document.getElementById('next-section-bar');
const nextSectionTitle = document.getElementById('next-section-title');

ctaBtn.addEventListener('click', (e) => { e.preventDefault(); openDetailsMode(swiper.activeIndex); });

function openDetailsMode(index) {
    // FRENO ANTI-BUGS: Si el índice llega vacío o no existe en los datos, cancelamos la acción.
    if (index === undefined || isNaN(index) || !slidesData[index]) return;

    const data = slidesData[index];
    const t = translations[currentLang];
    
    let nextIndex = index + 1;
    if (nextIndex >= slidesData.length) nextIndex = 0;
    const nextData = slidesData[nextIndex];

    detailBarTitle.textContent = data.title[currentLang];
    detailFullTitle.textContent = data.title[currentLang];
    nextSectionTitle.textContent = t.nextSection + ": " + nextData.title[currentLang];
    nextSectionBar.setAttribute('data-next-index', nextIndex);

    if (data.isRSVP) {
        detailBodyText.innerHTML = `
            <div id="rsvp-login-view" class="rsvp-step-container">
                <p>${t.codePrompt}</p>
                <label class="rsvp-label">${t.codeLabel}</label>
                <input type="text" id="rsvp-code-input" class="rsvp-input" placeholder="Ej. Name Surname">
                <div id="rsvp-error-msg" class="rsvp-error">${t.codeError}</div>
                <button id="rsvp-check-btn" class="rsvp-btn">${t.enterBtn}</button>
            </div>
        `;
        initRSVPLogin();
    } else {
        detailBodyText.innerHTML = data.detailsContent[currentLang];
    }

    document.body.classList.add('details-mode');
    detailsContentBox.classList.add('expanded'); 
    detailIcon.classList.remove('fa-plus');
    detailIcon.classList.add('fa-minus');
    detailToggleText.textContent = t.close;

    swiper.keyboard.disable();
    swiper.mousewheel.disable();
}

// =========================================================
// LOGICA DE LOGIN: BUSCA CUALQUIER NOMBRE DEL GRUPO
// =========================================================
function initRSVPLogin() {
    setTimeout(() => {
        const checkBtn = document.getElementById('rsvp-check-btn');
        const codeInput = document.getElementById('rsvp-code-input');
        const errorMsg = document.getElementById('rsvp-error-msg');
        
        if(checkBtn) {
            checkBtn.addEventListener('click', () => {
                let rawCode = codeInput.value;
                
                let cleanInput = rawCode
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "") 
                    .replace(/\s+/g, '')             
                    .toUpperCase();                  

                let foundGroup = null;

                for (const key in guestsDB) {
                    const groupArray = guestsDB[key];
                    
                    for (let i = 0; i < groupArray.length; i++) {
                        let cleanNameInDB = groupArray[i]
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/\s+/g, '')
                            .toUpperCase();
                            
                        if (cleanInput === cleanNameInDB) {
                            foundGroup = groupArray;
                            break; 
                        }
                    }
                    if (foundGroup) break; 
                }

                if (foundGroup) {
                    generateRSVPForm(foundGroup);
                } else {
                    errorMsg.style.display = 'block';
                    codeInput.style.borderBottom = '1px solid rgb(133, 39, 34)';
                }
            });
        }
    }, 100);
}

// =========================================================
// GENERADOR DE FORMULARIO (CON LÓGICA DE ROMPEHIELO)
// =========================================================
function generateRSVPForm(guestNames) {
    const t = translations[currentLang];
    const count = guestNames.length;
    let formHTML = `<div class="rsvp-step-container"><p>${t.reservedFor} <strong>${count} ${t.seats}</strong></p><br>`;
    
    // Iteramos sobre el Array de nombres
    guestNames.forEach((name, index) => {
        let i = index + 1;
        
        // Verificamos si este invitado específico está en la lista del Rompehielo
        let upperName = name.toUpperCase();
        let isInvitedToIcebreaker = rompehieloVIPs.includes(upperName);

        formHTML += `
            <div class="guest-block">
                <div class="guest-number">${name}</div> 
                
                <label class="rsvp-label">${t.nameLabel}</label>
                <input type="text" id="name_${i}" class="rsvp-input required-field" value="${name}">
                
                <label class="rsvp-label">${t.attendingLabel}</label>
                <div class="radio-group" id="attendance_group_${i}">
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="si"> ${t.yes}</label>
                    <label class="radio-label"><input type="radio" name="asistencia_${i}" value="no"> ${t.no}</label>
                </div>
        `;

        // SI ESTÁ INVITADO AL ROMPEHIELO, AGREGAMOS ESTA PREGUNTA EXTRA
        if (isInvitedToIcebreaker) {
            formHTML += `
                <label class="rsvp-label">${t.icebreakerLabel}</label>
                <div class="radio-group" id="icebreaker_group_${i}">
                    <label class="radio-label"><input type="radio" name="rompehielo_${i}" value="si"> ${t.yes}</label>
                    <label class="radio-label"><input type="radio" name="rompehielo_${i}" value="no"> ${t.no}</label>
                </div>
            `;
        }

        formHTML += `
                ${ i === 1 ? `
                <label class="rsvp-label">${t.emailLabel}</label>
                <input type="email" id="email_1" class="rsvp-input" placeholder="">
                <label class="rsvp-label">${t.phoneLabel}</label>
                <input type="tel" id="tel_1" class="rsvp-input" placeholder="">
                ` : '' }
                <label class="rsvp-label">${t.dietLabel}</label>
                <input type="text" id="diet_${i}" class="rsvp-input" placeholder="${t.none}">
            </div>
        `;
    });
    
    formHTML += `
        <div class="guest-block" style="border:none;">
            <label class="rsvp-label">${t.messageLabel}</label>
            <textarea id="guest_message" class="rsvp-textarea" placeholder="${t.writeMsg}"></textarea>
            <label class="rsvp-label">${t.songLabel}</label>
            <input type="text" id="guest_song" class="rsvp-input" placeholder="${t.artistSong}">
        </div>
        <div id="form-warning" class="rsvp-error" style="text-align:center; margin-bottom:15px;">${t.validationMsg}</div>
        <button id="rsvp-submit-final" class="rsvp-btn">${t.sendBtn}</button>
    </div>`;
    
    detailBodyText.innerHTML = formHTML;

    // LÓGICA DE ENVÍO Y VALIDACIÓN
    setTimeout(() => {
        document.getElementById('rsvp-submit-final').addEventListener('click', (e) => {
            const btn = e.target;
            let isValid = true;
            let formData = { _subject: `Wedding RSVP (${currentLang.toUpperCase()})`, _captcha: "false" };

            guestNames.forEach((name, index) => {
                let i = index + 1;
                let upperName = name.toUpperCase();
                let isInvitedToIcebreaker = rompehieloVIPs.includes(upperName);

                // Validar Nombre
                const nameInput = document.getElementById(`name_${i}`);
                if (!nameInput.value.trim()) {
                    nameInput.classList.add('input-error');
                    isValid = false;
                } else {
                    nameInput.classList.remove('input-error');
                }

                // Validar Asistencia a Boda
                const radios = document.getElementsByName(`asistencia_${i}`);
                let radioChecked = false;
                let asistenciaVal = "Pending";
                for (const r of radios) { 
                    if (r.checked) { 
                        radioChecked = true; 
                        asistenciaVal = r.value === 'si' ? 'YES (SI)' : 'NO';
                    } 
                }
                const radioContainer = document.getElementById(`attendance_group_${i}`).previousElementSibling;
                if (!radioChecked) {
                    radioContainer.style.color = "rgb(133, 39, 34)";
                    isValid = false;
                } else {
                    radioContainer.style.color = "#000";
                }

                // Validar Asistencia a Rompehielo (SOLO si aplica)
                if (isInvitedToIcebreaker) {
                    const iceRadios = document.getElementsByName(`rompehielo_${i}`);
                    let iceChecked = false;
                    let iceVal = "Pending";
                    for (const r of iceRadios) { 
                        if (r.checked) { 
                            iceChecked = true; 
                            iceVal = r.value === 'si' ? 'YES (SI)' : 'NO';
                        } 
                    }
                    const iceContainer = document.getElementById(`icebreaker_group_${i}`).previousElementSibling;
                    if (!iceChecked) {
                        iceContainer.style.color = "rgb(133, 39, 34)";
                        isValid = false;
                    } else {
                        iceContainer.style.color = "#000";
                    }
                    formData[`Guest_${i}_Icebreaker`] = iceVal;
                }

                formData[`Guest_${i}_Name`] = nameInput.value;
                formData[`Guest_${i}_Attending_Wedding`] = asistenciaVal;
                formData[`Guest_${i}_Diet`] = document.getElementById(`diet_${i}`).value || "None";
            });

            const email1 = document.getElementById('email_1') ? document.getElementById('email_1').value : '';
            const tel1 = document.getElementById('tel_1') ? document.getElementById('tel_1').value : '';
            const message = document.getElementById('guest_message').value;
            const song = document.getElementById('guest_song').value;

            if(email1) formData["Contact_Email"] = email1;
            if(tel1) formData["Contact_Phone"] = tel1;
            if(message) formData["Message"] = message;
            if(song) formData["Song_Request"] = song;

            const warningMsg = document.getElementById('form-warning');
            
            if (isValid) {
                warningMsg.style.display = 'none';
                btn.textContent = t.sending;
                btn.disabled = true;

                // --- MODO DEMO ---
                console.log("DATOS A ENVIAR (SIMULACIÓN):", formData);

                setTimeout(() => {
                    detailBodyText.innerHTML = `
                        <div style="text-align:center; padding: 40px 0;">
                            <h3 class="story-heading">${t.thankTitle}</h3>
                            <p>${t.thankMsg}</p>
                            <br><p>${t.seeYou}</p>
                        </div>
                    `;
                }, 1500);
            } else {
                warningMsg.style.display = 'block';
            }
        });
    }, 100);
}

function closeDetailsMode() {
    document.body.classList.remove('details-mode');
    detailsContentBox.classList.remove('expanded');
    swiper.keyboard.enable();
    swiper.mousewheel.enable();
}

nextSectionBar.addEventListener('click', () => {
    let nextIndex = parseInt(nextSectionBar.getAttribute('data-next-index'), 10);
    
    // FRENO: Si por alguna razón el índice se pierde, no hacemos nada para evitar el bug
    if (isNaN(nextIndex)) return; 
    
    swiper.slideTo(nextIndex);
    openDetailsMode(nextIndex);
});

detailsBar.addEventListener('click', toggleDetailsBox);
closeDetailsBtn.addEventListener('click', toggleDetailsBox);
backToHomeBtn.addEventListener('click', closeDetailsMode);

function toggleDetailsBox() {
    const t = translations[currentLang];
    const isExpanded = detailsContentBox.classList.contains('expanded');
    if (isExpanded) {
        detailsContentBox.classList.remove('expanded');
        detailIcon.classList.remove('fa-minus');
        detailIcon.classList.add('fa-plus');
        detailToggleText.textContent = t.details;
    } else {
        detailsContentBox.classList.add('expanded');
        detailIcon.classList.remove('fa-plus');
        detailIcon.classList.add('fa-minus');
        detailToggleText.textContent = t.close;
    }
}

document.addEventListener('click', (e) => {
    // 🚨 EL FRENO ANTI-BUGS PARA CELULARES:
    // Si la pantalla es menor a 768px (celular), ignoramos el tap en el fondo.
    // Así evitamos que al tocar la pantalla por accidente se apaguen las letras.
    if (window.innerWidth < 768) return;

    // Si está abierta la sección de detalles, no hacemos nada
    if (document.body.classList.contains('details-mode')) return;
    
    // Si clickeamos un botón importante, no cambiamos de slide
    if (e.target.closest('#menu-btn-trigger, #nav-reserve-text, #main-logo, #cta-btn, #music-btn, .lang-opt, #menu-overlay, .details-layer')) return;
    
    // Si es computadora, revisamos si clickeó izquierda o derecha
    const mid = window.innerWidth / 2;
    if (e.clientX < mid) {
        swiper.slidePrev();
    } else {
        swiper.slideNext();
    }
});

const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
const icon = musicBtn.querySelector('i');
let isPlaying = false;
musicBtn.addEventListener('click', () => {
    if (isPlaying) { bgMusic.pause(); icon.classList.replace('fa-pause', 'fa-play'); isPlaying = false; }
    else { bgMusic.play(); icon.classList.replace('fa-play', 'fa-pause'); isPlaying = true; }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { bgMusic.pause(); } 
    else { if (isPlaying) { bgMusic.play(); } }
});

// =========================================================
// LÓGICA DE SWIPE GLOBAL PARA MÓVILES (PANTALLA COMPLETA)
// =========================================================
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGlobalSwipe();
}, { passive: true });

function handleGlobalSwipe() {
    // 1. Si está el popup de detalles abierto, no hacemos nada
    if (document.body.classList.contains('details-mode')) return;
    
    // 2. Calculamos qué tanto se movió el dedo
    const xDiff = touchStartX - touchEndX;
    const yDiff = touchStartY - touchEndY;

    // 3. Verificamos que el movimiento haya sido horizontal y no vertical (scroll)
    // y que el arrastre haya sido mayor a 50 pixeles (para no cambiar por accidente)
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
        if (xDiff > 0) {
            // El dedo fue de Derecha a Izquierda (Swipe Left) -> Siguiente sección
            swiper.slideNext();
        } else {
            // El dedo fue de Izquierda a Derecha (Swipe Right) -> Sección anterior
            swiper.slidePrev();
        }
    }
}