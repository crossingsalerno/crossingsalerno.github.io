"use strict";

const WHATSAPP_NUMBER = "393386803985";
const EMAIL_ADDRESS = "crossingsalerno@gmail.com";
const SUPPORTED_LANGUAGES = ["it", "en"];

let currentLang = "it";
let quickBookingData = null;
let lastFocusedElement = null;

const translations = {
  it: {
    siteTitle: "Crossing Salerno | Boutique B&B in centro a Salerno",
    siteDescription: "Crossing Salerno è un boutique B&B elegante in Via Alberto Pirro 12, nel cuore di Salerno. Quattro camere, balcone privato, camere non fumatori, ascensore, accessibilità e servizi su richiesta.",
    brandHome: "Crossing Salerno, torna alla pagina iniziale",
    languageSelector: "Selettore lingua",
    closeModal: "Chiudi",
    mapTitle: "Mappa Crossing Salerno - Via Alberto Pirro 12",

    navRooms: "Camere",
    navServices: "Servizi",
    navExperiences: "Esperienze",
    navLocation: "Dove siamo",
    navContacts: "Contatti",
    bookNow: "Prenota ora",

    heroKicker: "Boutique B&B · Via Alberto Pirro 12",
    heroTitle: "Salerno, da vivere con eleganza.",
    heroText: "Crossing Salerno, un B&B che accoglie i suoi ospiti nel cuore della città, tra comfort contemporaneo, dettagli raffinati e il fascino autentico del Mediterraneo.",

    arrival: "Arrivo",
    departure: "Partenza",
    roomType: "Camera",
    roomOptionDouble: "Matrimoniale",
    roomOptionQuad: "Quadrupla",
    roomOptionAny: "Prima disponibile",
    guests: "Ospiti",
    requestAvailability: "Richiedi disponibilità",

    introKicker: "Crossing Salerno",
    introTitle: "Un luogo dove il tempo rallenta.",
    introCaption: "Ospitalità, storia e il fascino autentico di Salerno.",
    introLead: "<strong>Crossing Salerno</strong> è un B&B accogliente e curato in ogni dettaglio, concepito per offrire un soggiorno all'insegna del comfort, della quiete e di un'autentica arte dell'accoglienza.",
    introHistory: "La struttura ha sede in un prestigioso palazzo d'inizio Novecento, dove il fascino dell'architettura storica incontra il piacere di ambienti luminosi, armoniosi e funzionali.",
    introRooms: "Le camere sono pensate per garantire riposo e benessere in ogni momento della permanenza, in un'atmosfera intima e riservata, ideale per chi desidera sentirsi accolto con discrezione e attenzione.",
    introHighlightLabel: "Nel cuore della città",
    introLocation: "In <strong>Via Alberto Pirro 12</strong>, tra la storica <strong>Piazza della Concordia</strong> e la moderna <strong>Piazza della Libertà</strong>, progettata da <strong>Ricardo Bofill</strong>, accanto alla <strong>Stazione Marittima</strong> firmata da <strong>Zaha Hadid Architects</strong>.",
    introExplore: "Crossing Salerno invita a vivere il territorio con naturalezza. Dal <strong>Lungomare Trieste</strong> al centro storico, dalla <strong>Via dei Mercanti</strong> alla <strong>Cattedrale di San Matteo</strong>, dalla <strong>Villa Comunale</strong> al <strong>Teatro Giuseppe Verdi</strong>, fino al <strong>Giardino della Minerva</strong>, alla storica <strong>Scuola Medica Salernitana</strong> e al <strong>Castello di Arechi</strong>, tutto è raggiungibile in pochi minuti.",
    introNearby: "Nelle vicinanze si trovano inoltre ristoranti, caffè, negozi e collegamenti verso la <strong>Costiera Amalfitana</strong>, <strong>Capri</strong>, <strong>Ischia</strong> e la <strong>Costiera Cilentana</strong>.",
    introClosing: "La nostra filosofia si fonda su una discreta eleganza e una cura autentica dell'ospitalità. Che si tratti di una pausa romantica, di una vacanza di piacere o di un viaggio di lavoro, Crossing Salerno rappresenta una scelta ideale per chi cerca comfort, quiete e un'accoglienza sincera.",

    roomsKicker: "Le camere",
    roomsTitle: "Quattro ambienti, quattro identità.",
    roomsIntro: "Ogni camera è stata progettata per offrire un'esperienza diversa, ispirata ai colori, ai materiali e all'anima di Salerno.",
    roomCardMarea: "Ispirata al movimento del mare e alla luce dorata del Mediterraneo, Marea è una <strong>CAMERA MATRIMONIALE SUPERIOR</strong>. Ispirata al movimento del mare e alla luce dorata del Mediterraneo, offre un soggiorno elegante dove il tempo segue il ritmo lento delle onde.",
    roomCardUrban: "Materica, contemporanea e ricca di carattere, Urban è una <strong>JUNIOR SUITE</strong>, perfetta per una coppia oppure per un nucleo familiare. Materica, contemporanea e ricca di carattere, interpreta l'anima più dinamica di Crossing attraverso materiali autentici e atmosfere sofisticate.",
    roomCardTrame: "Un omaggio alla memoria, alla cultura e ai dettagli che raccontano storie. Trame è una <strong>CAMERA MATRIMONIALE DELUXE</strong>, pensata per una coppia. Un omaggio alla memoria e alla cultura, accoglie gli ospiti in un'atmosfera sospesa tra eleganza e fascino senza tempo.",
    roomCardSabbia: "Sabbia è una <strong>SUITE</strong>, ideale per una coppia oppure per un nucleo familiare. Toni caldi, luce soffusa e materiali naturali creano uno spazio intimo pensato per ritrovare quiete ed equilibrio.",
    discoverRoom: "Scopri la camera →",

    roomDetailsKicker: "Dettagli delle camere",
    roomDetailsTitle: "Quattro atmosfere, quattro modi di vivere il soggiorno.",
    mareaP1: "Una camera luminosa e avvolgente, ispirata al movimento del mare e alla luce dorata che accarezza l’orizzonte. Le sfumature d’azzurro richiamano l’acqua, il cielo e la profondità del Mediterraneo, mentre i dettagli in oro evocano il riverbero del sole sulla superficie marina, come una promessa di viaggio e scoperta.",
    mareaP2: "Marea è la stanza del movimento dolce, dell’attesa e del desiderio di partire: un ambiente elegante e fluido, pensato per lasciarsi attraversare dalla luce, dal silenzio e dal ritmo naturale delle onde.",
    mareaP3: "Qui il soggiorno diventa un invito ad abbandonarsi alla bellezza del mare, seguendo il suo respiro lento e continuo.",
    mareaBath: "<strong>Bagno:</strong> elegante bagno privato con <strong>nicchia doccia dotata di porte scorrevoli</strong>.",
    urbanP1: "Materica, intensa e contemporanea, Urban interpreta l’anima cittadina di CROSSING. I mattoncini, il parquet, il nero e il rosso vinaccio creano un’atmosfera decisa, calda e sofisticata, dove il linguaggio industriale incontra il comfort dell’accoglienza.",
    urbanP2: "È la stanza dell’energia, del carattere e del movimento urbano: un ritmo più profondo, fatto di contrasti, materia e personalità.",
    urbanP3: "In Urban, la città entra nello spazio con la sua forza discreta: il fascino delle superfici vissute, il calore del legno, la profondità dei toni scuri e la vibrazione contemporanea di un ambiente pensato per chi ama atmosfere autentiche, dinamiche e ricche di carattere.",
    urbanBath: "<strong>Bagno:</strong> moderno bagno privato con <strong>doccia walk-in</strong>.",
    urbanBed: "<strong>Dimensioni del letto:</strong> 160 × 200 cm.",
    trameP1: "Con il suo letto in ferro nero a baldacchino, le pareti dal bianco caldo e le locandine d’epoca, Trame è un omaggio alla storia, alla cultura e alla memoria visiva.",
    trameP2: "Ogni dettaglio sembra custodire un racconto, un’immagine, un frammento di tempo; ogni elemento invita a soffermarsi, osservare e lasciarsi accompagnare da atmosfere sospese tra eleganza e nostalgia.",
    trameP3: "È la stanza più narrativa di CROSSING: un luogo in cui passato e presente si intrecciano con naturale raffinatezza, trasformando il soggiorno in un piccolo viaggio dentro la memoria.",
    trameP4: "Trame parla di storie che si incontrano, di epoche che dialogano e di una bellezza silenziosa che prende forma attraverso dettagli, immagini e suggestioni.",
    trameBath: "<strong>Bagno:</strong> raffinato bagno privato con <strong>doccia walk-in</strong>.",
    trameBed: "<strong>Dimensioni del letto:</strong> 160 × 200 cm.",
    sabbiaP1: "Calda, intima e raffinata, Sabbia è la suite dell’approdo. Le tonalità fango e sabbia, i quadri antichi e lo specchio dorato creano un’atmosfera avvolgente, preziosa e silenziosa, in cui la materia si fa morbida e la luce assume riflessi caldi e raccolti.",
    sabbiaP2: "Dopo il movimento del viaggio, Sabbia accoglie con la sua quiete naturale: un rifugio elegante dove ritrovare tempo, equilibrio e bellezza, nella dimensione più intima e luminosa dell’arrivo.",
    sabbiaP3: "È la stanza del riposo profondo, della calma ritrovata, del piacere di sentirsi finalmente a destinazione, circondati da dettagli che parlano di memoria, eleganza e accoglienza.",
    sabbiaBath: "<strong>Bagno:</strong> bagno privato con <strong>box doccia angolare</strong>.",
    sabbiaBed: "<strong>Dimensioni del letto:</strong> 160 × 200 cm.",
    backToRooms: "Torna alle camere ↑",

    servicesKicker: "Comfort inclusi",
    servicesTitle: "Essenziale, chiaro, senza pensieri.",
    s1t: "Quattro stanze",
    s1p: "Quattro camere curate, luminose e confortevoli.",
    s2t: "Balcone privato",
    s2p: "Tutte le camere sono dotate di balcone privato.",
    s3t: "Camere non fumatori",
    s3p: "Ambienti pensati per garantire comfort e benessere.",
    s4t: "Wi‑Fi gratuito",
    s4p: "Connessione veloce per lavoro, viaggio e relax.",
    s5t: "Aria condizionata",
    s5p: "Comfort climatico in ogni camera.",
    s6t: "Ascensore",
    s6p: "Il palazzo è munito di ascensore.",
    s7t: "Accessibilità",
    s7p: "Le persone con mobilità ridotta devono effettuare il primo accesso in struttura durante gli orari di portineria per l’utilizzo del servoscala a piattaforma.",
    s8t: "Videosorveglianza",
    s8p: "Le aree comuni sono dotate di un sistema di videosorveglianza.",
    roomAmenitiesTitle: "In ogni camera",
    amenityHairdryer: "Phon",
    amenityKettle: "Bollitore per tè, tisane e caffè",
    amenityMiniFridge: "Mini frigo, con possibilità di richiedere bevande specifiche",
    amenityBathroom: "Bagno privato con bidet e doccia",
    amenityFireSafety: "Rivelatori antincendio in ogni camera e nelle aree comuni",
    amenityMattress: "Materassi ignifughi a molle insacchettate con topper",

    requestKicker: "Servizi su richiesta",
    requestTitle: "Ogni dettaglio del viaggio, organizzato con cura.",
    requestText: "Crossing Salerno può assisterti nell’organizzazione di servizi extra tramite partner selezionati. Tutti i servizi sono disponibili su richiesta, soggetti a disponibilità e da comunicare in anticipo contattando l'host.",
    r1t: "Transfer aeroportuali",
    r1p: "Transfer privato da/per Aeroporto di Napoli Capodichino e da/per Aeroporto Salerno Costa d’Amalfi.",
    r2t: "Biglietti traghetti",
    r2p: "Assistenza per biglietti verso Costiera Amalfitana, Capri, Ischia e Costiera Cilentana. Se richiesti in anticipo, possono essere fatti trovare direttamente in struttura.",
    r3t: "Biglietti teatro",
    r3p: "Supporto per la prenotazione di spettacoli ed eventi teatrali. Comunicandolo in anticipo, i biglietti possono essere preparati e lasciati direttamente in struttura.",
    r4t: "Palestra, sauna e personal trainer",
    r4p: "Accesso su richiesta a palestra convenzionata con sauna e possibilità di sessioni con personal trainer.",
    r5t: "Deposito bagagli",
    r5p: "Possibilità di lasciare i bagagli prima del check-in o dopo il check-out, su richiesta e in base alla disponibilità.",
    r6t: "Ceramiche vietresi",
    r6p: "Assistenza per facilitare acquisti di ceramiche vietresi presso rivenditori e botteghe selezionate.",
    r7t: "Noleggio auto, moto, e-bike, barche e gommoni",
    r7p: "Assistenza per il noleggio di auto, moto, biciclette elettriche, barche e gommoni, con o senza skipper.",
    r8t: "Garage coperto",
    r8p: "Possibilità di prenotare un posto auto in garage coperto, su richiesta e in base alla disponibilità.",
    r9t: "Colazione in bar convenzionato",
    r9p: "Possibilità di organizzare la colazione presso un bar convenzionato nelle vicinanze della struttura.",
    r10t: "Prenotazione spiaggia",
    r10p: "Assistenza per la prenotazione di ombrellone e lettini presso stabilimenti balneari, in base alla disponibilità.",
    r11t: "Convenzioni con ristoranti",
    r11p: "Assistenza per la prenotazione presso ristoranti convenzionati selezionati.",
    r12t: "Prenotazione parchi acquatici",
    r12p: "Assistenza per la prenotazione degli ingressi ai parchi acquatici, in base alla disponibilità.",

    expKicker: "Salerno awaits",
    expTitle: "Mare, centro storico e partenze verso la costa.",
    expText: "Passeggiare sul lungomare, scoprire il Duomo, raggiungere il porto, partire verso Amalfi, Positano, Capri, Ischia o Vietri sul Mare: Crossing Salerno è un punto di partenza elegante e centrale per vivere la città e il Mediterraneo.",

    locKicker: "Dove siamo",
    locTitle: "Nel cuore di Salerno.",
    locText: "Crossing Salerno si trova in Via Alberto Pirro 12, in una posizione comoda per raggiungere centro storico, lungomare, stazione e porto. Apri la mappa per calcolare il percorso direttamente da Google Maps.",
    openMaps: "Apri Google Maps",

    contactKicker: "Prenotazioni",
    contactTitle: "Scrivici per il tuo soggiorno.",
    contactText: "Compila il modulo o usa la prenotazione rapida. Ti risponderemo con disponibilità e migliori tariffe.",
    phName: "Nome e cognome",
    phEmail: "Email",
    phPhone: "Telefono",
    phMsg: "Date, numero ospiti e richieste",
    sendRequest: "Invia richiesta",

    extraServices: "Servizi su richiesta",
    modalTitle: "Completa la tua richiesta.",
    bookingNote: "Verificheremo personalmente la disponibilità e ti risponderemo con la migliore tariffa disponibile.",
    extraBreakfast: "Colazione in bar convenzionato",
    extraNaples: "Transfer Aeroporto Napoli",
    extraSalernoAirport: "Transfer Aeroporto Salerno Costa d’Amalfi",
    extraFerries: "Biglietti traghetti",
    extraTheatre: "Biglietti teatro",
    extraLuggage: "Deposito bagagli",
    extraGym: "Palestra, sauna e personal trainer",
    extraCeramics: "Ceramiche vietresi",
    extraRental: "Noleggio auto, moto, e-bike, barche e gommoni",
    extraGarage: "Garage coperto",
    extraBeach: "Prenotazione spiaggia",
    extraRestaurants: "Convenzioni con ristoranti",
    extraWaterParks: "Prenotazione parchi acquatici",
    notes: "Note",
    quickNotes: "Richieste particolari",
    sendWhatsApp: "Invia richiesta tramite WhatsApp",
    sendEmail: "Invia richiesta via email",

    noExtraServices: "Nessun servizio extra selezionato",
    bookingGreeting: "Buongiorno, desidero verificare la disponibilità presso Crossing Salerno.",
    requestedRoomLabel: "Camera richiesta",
    guestsLabel: "Ospiti",
    requestedServicesLabel: "Servizi richiesti",
    notesLabel: "Note",
    thankYou: "Grazie.",
    availabilitySubject: "Richiesta disponibilità - Crossing Salerno",
    contactRequestSubject: "Richiesta dal sito - Crossing Salerno",
    contactRequestGreeting: "Buongiorno, invio una richiesta tramite il sito di Crossing Salerno.",
    contactNameLabel: "Nome e cognome",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Telefono",
    contactMessageLabel: "Richiesta"
  },

  en: {
    siteTitle: "Crossing Salerno | Boutique B&B in central Salerno",
    siteDescription: "Crossing Salerno is an elegant boutique B&B at Via Alberto Pirro 12, in the heart of Salerno. Four rooms, private balconies, non-smoking rooms, a lift, accessibility and services on request.",
    brandHome: "Crossing Salerno, back to the home page",
    languageSelector: "Language selector",
    closeModal: "Close",
    mapTitle: "Map of Crossing Salerno - Via Alberto Pirro 12",

    navRooms: "Rooms",
    navServices: "Services",
    navExperiences: "Experiences",
    navLocation: "Location",
    navContacts: "Contacts",
    bookNow: "Book now",

    heroKicker: "Boutique B&B · Via Alberto Pirro 12",
    heroTitle: "Salerno, elegantly yours.",
    heroText: "Crossing Salerno welcomes guests in the heart of the city, where contemporary comfort, refined details and the authentic charm of the Mediterranean meet.",

    arrival: "Arrival",
    departure: "Departure",
    roomType: "Room",
    roomOptionDouble: "Double room",
    roomOptionQuad: "Quadruple room",
    roomOptionAny: "First available",
    guests: "Guests",
    requestAvailability: "Request availability",

    introKicker: "Crossing Salerno",
    introTitle: "A place where time slows down.",
    introCaption: "Hospitality, history and the authentic charm of Salerno.",
    introLead: "<strong>Crossing Salerno</strong> is a welcoming B&B, thoughtfully designed in every detail to offer a stay defined by comfort, tranquillity and a genuine art of hospitality.",
    introHistory: "The property is set in a prestigious early-twentieth-century building, where the charm of historic architecture meets bright, harmonious and functional interiors.",
    introRooms: "The rooms are designed to ensure rest and wellbeing throughout your stay, in an intimate and private atmosphere, ideal for guests who wish to feel welcomed with discretion and care.",
    introHighlightLabel: "In the heart of the city",
    introLocation: "At <strong>Via Alberto Pirro 12</strong>, between historic <strong>Piazza della Concordia</strong> and modern <strong>Piazza della Libertà</strong>, designed by <strong>Ricardo Bofill</strong>, beside the <strong>Maritime Station</strong> by <strong>Zaha Hadid Architects</strong>.",
    introExplore: "Crossing Salerno invites you to experience the area with ease. From <strong>Lungomare Trieste</strong> to the old town, from <strong>Via dei Mercanti</strong> to <strong>Salerno Cathedral</strong>, from the <strong>Villa Comunale</strong> to the <strong>Teatro Giuseppe Verdi</strong>, and on to the <strong>Minerva Garden</strong>, the historic <strong>Salerno Medical School</strong> and <strong>Arechi Castle</strong>, everything is only a few minutes away.",
    introNearby: "Nearby you will also find restaurants, cafés, shops and connections to the <strong>Amalfi Coast</strong>, <strong>Capri</strong>, <strong>Ischia</strong> and the <strong>Cilento Coast</strong>.",
    introClosing: "Our philosophy is grounded in understated elegance and genuine care for hospitality. Whether for a romantic break, a leisure holiday or a business trip, Crossing Salerno is an ideal choice for guests seeking comfort, tranquillity and a sincere welcome.",

    roomsKicker: "The rooms",
    roomsTitle: "Four spaces, four identities.",
    roomsIntro: "Each room has been designed to offer a different experience, inspired by the colours, materials and soul of Salerno.",
    roomCardMarea: "Inspired by the movement of the sea and the golden light of the Mediterranean, Marea is a <strong>SUPERIOR DOUBLE ROOM</strong>. Inspired by the movement of the sea and the golden light of the Mediterranean, it offers an elegant stay where time follows the slow rhythm of the waves.",
    roomCardUrban: "Textural, contemporary and full of character, Urban is a <strong>JUNIOR SUITE</strong>, perfect for a couple or a family. Textural, contemporary and full of character, it interprets Crossing's most dynamic soul through authentic materials and sophisticated atmospheres.",
    roomCardTrame: "A tribute to memory, culture and the details that tell stories. Trame is a <strong>DELUXE DOUBLE ROOM</strong>, designed for a couple. A tribute to memory and culture, it welcomes guests into an atmosphere suspended between elegance and timeless charm.",
    roomCardSabbia: "Sabbia is a <strong>SUITE</strong>, ideal for a couple or a family. Warm tones, soft light and natural materials create an intimate space designed to restore tranquillity and balance.",
    discoverRoom: "Discover the room →",

    roomDetailsKicker: "Room details",
    roomDetailsTitle: "Four atmospheres, four ways to experience your stay.",
    mareaP1: "A bright and enveloping room, inspired by the movement of the sea and the golden light that brushes the horizon. Shades of blue evoke the water, the sky and the depth of the Mediterranean, while golden details recall sunlight shimmering on the sea, like a promise of travel and discovery.",
    mareaP2: "Marea is the room of gentle movement, anticipation and the desire to set off: an elegant, fluid space designed to be crossed by light, silence and the natural rhythm of the waves.",
    mareaP3: "Here, your stay becomes an invitation to surrender to the beauty of the sea, following its slow, continuous breath.",
    mareaBath: "<strong>Bathroom:</strong> elegant private bathroom with a <strong>shower alcove fitted with sliding doors</strong>.",
    urbanP1: "Rich in texture, intense and contemporary, Urban interprets CROSSING's urban soul. Exposed brick, parquet, black and burgundy create a bold, warm and sophisticated atmosphere where industrial design meets welcoming comfort.",
    urbanP2: "It is the room of energy, character and urban movement: a deeper rhythm made of contrasts, texture and personality.",
    urbanP3: "In Urban, the city enters the space with its understated strength: the appeal of lived-in surfaces, the warmth of wood, the depth of dark tones and the contemporary energy of a setting designed for those who love authentic, dynamic atmospheres full of character.",
    urbanBath: "<strong>Bathroom:</strong> modern private bathroom with a <strong>walk-in shower</strong>.",
    urbanBed: "<strong>Bed dimensions:</strong> 160 × 200 cm.",
    trameP1: "With its black wrought-iron canopy bed, warm white walls and vintage posters, Trame is a tribute to history, culture and visual memory.",
    trameP2: "Every detail seems to preserve a story, an image, a fragment of time; each element invites you to pause, observe and be carried by atmospheres suspended between elegance and nostalgia.",
    trameP3: "It is CROSSING's most narrative room: a place where past and present intertwine with natural refinement, turning the stay into a small journey through memory.",
    trameP4: "Trame speaks of stories that meet, eras that converse and a quiet beauty that takes shape through details, images and impressions.",
    trameBath: "<strong>Bathroom:</strong> refined private bathroom with a <strong>walk-in shower</strong>.",
    trameBed: "<strong>Bed dimensions:</strong> 160 × 200 cm.",
    sabbiaP1: "Warm, intimate and refined, Sabbia is the suite of arrival. Mud and sand tones, antique paintings and a gilded mirror create an enveloping, precious and quiet atmosphere, where materials soften and the light takes on warm, intimate reflections.",
    sabbiaP2: "After the movement of the journey, Sabbia welcomes you with its natural calm: an elegant refuge where you can rediscover time, balance and beauty in the most intimate and luminous dimension of arrival.",
    sabbiaP3: "It is the room of deep rest, rediscovered calm and the pleasure of finally feeling at your destination, surrounded by details that speak of memory, elegance and hospitality.",
    sabbiaBath: "<strong>Bathroom:</strong> private bathroom with a <strong>corner shower enclosure</strong>.",
    sabbiaBed: "<strong>Bed dimensions:</strong> 160 × 200 cm.",
    backToRooms: "Back to the rooms ↑",

    servicesKicker: "Included comforts",
    servicesTitle: "Essential, clear, effortless.",
    s1t: "Four rooms",
    s1p: "Four curated, bright and comfortable rooms.",
    s2t: "Private balcony",
    s2p: "All rooms feature a private balcony.",
    s3t: "Non-smoking rooms",
    s3p: "Spaces designed to guarantee comfort and wellbeing.",
    s4t: "Free Wi‑Fi",
    s4p: "Fast connection for work, travel and relaxation.",
    s5t: "Air conditioning",
    s5p: "Climate comfort in every room.",
    s6t: "Lift",
    s6p: "The building is equipped with a lift.",
    s7t: "Accessibility",
    s7p: "Guests with reduced mobility must enter the property for the first time during concierge hours in order to use the platform stairlift.",
    s8t: "Video surveillance",
    s8p: "The common areas are equipped with a video surveillance system.",
    roomAmenitiesTitle: "In every room",
    amenityHairdryer: "Hairdryer",
    amenityKettle: "Kettle for tea, herbal infusions and coffee",
    amenityMiniFridge: "Mini fridge, with the option to request specific drinks",
    amenityBathroom: "Private bathroom with bidet and shower",
    amenityFireSafety: "Fire detectors in every room and in all common areas",
    amenityMattress: "Fire-retardant pocket-sprung mattresses with toppers",

    requestKicker: "Services on request",
    requestTitle: "Every detail of your journey, carefully arranged.",
    requestText: "Crossing Salerno can assist with extra services through selected partners. All services are available on request, subject to availability, and must be requested in advance by contacting the host.",
    r1t: "Airport transfers",
    r1p: "Private transfer from/to Naples Capodichino Airport and from/to Salerno Costa d’Amalfi Airport.",
    r2t: "Ferry tickets",
    r2p: "Assistance with ferry tickets to the Amalfi Coast, Capri, Ischia and the Cilento Coast. With advance notice, tickets can be prepared and found directly at the property.",
    r3t: "Theatre tickets",
    r3p: "Support for booking performances and theatre events. With advance notice, tickets can be prepared and left directly at the property.",
    r4t: "Gym, sauna and personal trainer",
    r4p: "Access on request to a partner gym with sauna and personal trainer sessions.",
    r5t: "Luggage storage",
    r5p: "Possibility to leave luggage before check-in or after check-out, on request and subject to availability.",
    r6t: "Vietri ceramics",
    r6p: "Assistance in arranging purchases of Vietri ceramics from selected shops and artisan boutiques.",
    r7t: "Car, motorbike, e-bike, boat and RIB hire",
    r7p: "Assistance with hiring cars, motorbikes, electric bicycles, boats and RIBs, with or without a skipper.",
    r8t: "Covered garage",
    r8p: "A parking space can be reserved in a covered garage, on request and subject to availability.",
    r9t: "Breakfast at a partner café",
    r9p: "Breakfast can be arranged at a partner café near the property.",
    r10t: "Beach booking",
    r10p: "Assistance with booking a parasol and sun loungers at local beach clubs, subject to availability.",
    r11t: "Partner restaurants",
    r11p: "Booking assistance at selected partner restaurants.",
    r12t: "Water park booking",
    r12p: "Assistance with booking admission to water parks, subject to availability.",

    expKicker: "Salerno awaits",
    expTitle: "Sea, old town and departures to the coast.",
    expText: "Stroll along the seafront, discover the Cathedral, reach the port, leave for Amalfi, Positano, Capri, Ischia or Vietri sul Mare: Crossing Salerno is an elegant and central starting point for experiencing the city and the Mediterranean.",

    locKicker: "Location",
    locTitle: "In the heart of Salerno.",
    locText: "Crossing Salerno is located at Via Alberto Pirro 12, in a convenient position for reaching the old town, seafront, train station and port. Open the map to calculate your route directly with Google Maps.",
    openMaps: "Open Google Maps",

    contactKicker: "Bookings",
    contactTitle: "Write to us about your stay.",
    contactText: "Fill in the form or use quick booking. We will reply with availability and our best rates.",
    phName: "Full name",
    phEmail: "Email",
    phPhone: "Phone",
    phMsg: "Dates, number of guests and requests",
    sendRequest: "Send request",

    extraServices: "Services on request",
    modalTitle: "Complete your request.",
    bookingNote: "We will personally check availability and reply with the best available rate.",
    extraBreakfast: "Breakfast at a partner café",
    extraNaples: "Naples Airport transfer",
    extraSalernoAirport: "Salerno Costa d’Amalfi Airport transfer",
    extraFerries: "Ferry tickets",
    extraTheatre: "Theatre tickets",
    extraLuggage: "Luggage storage",
    extraGym: "Gym, sauna and personal trainer",
    extraCeramics: "Vietri ceramics",
    extraRental: "Car, motorbike, e-bike, boat and RIB hire",
    extraGarage: "Covered garage",
    extraBeach: "Beach booking",
    extraRestaurants: "Partner restaurants",
    extraWaterParks: "Water park booking",
    notes: "Notes",
    quickNotes: "Special requests",
    sendWhatsApp: "Send request via WhatsApp",
    sendEmail: "Send request by email",

    noExtraServices: "No extra services selected",
    bookingGreeting: "Hello, I would like to check availability at Crossing Salerno.",
    requestedRoomLabel: "Requested room",
    guestsLabel: "Guests",
    requestedServicesLabel: "Requested services",
    notesLabel: "Notes",
    thankYou: "Thank you.",
    availabilitySubject: "Availability request - Crossing Salerno",
    contactRequestSubject: "Website enquiry - Crossing Salerno",
    contactRequestGreeting: "Hello, I am sending an enquiry through the Crossing Salerno website.",
    contactNameLabel: "Full name",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",
    contactMessageLabel: "Request"
  }
};

function hasOwnTranslation(dictionary, key) {
  return Object.prototype.hasOwnProperty.call(dictionary, key);
}

function setLanguage(lang, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(lang) || !translations[lang]) return;

  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.siteTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (hasOwnTranslation(t, key)) element.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (hasOwnTranslation(t, key)) element.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (hasOwnTranslation(t, key)) element.placeholder = t[key];
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (hasOwnTranslation(t, key)) element.setAttribute("content", t[key]);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;
    if (hasOwnTranslation(t, key)) element.setAttribute("title", t[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (hasOwnTranslation(t, key)) element.setAttribute("aria-label", t[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (persist) {
    try {
      localStorage.setItem("crossingSalernoLanguage", lang);
    } catch (error) {
      // Local storage can be unavailable when the page is opened from some local contexts.
    }
  }
}

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGUAGES.includes(queryLanguage)) return queryLanguage;

  try {
    const savedLanguage = localStorage.getItem("crossingSalernoLanguage");
    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) return savedLanguage;
  } catch (error) {
    // Ignore storage restrictions and keep the document default.
  }

  return SUPPORTED_LANGUAGES.includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "it";
}

const header = document.getElementById("header");
function updateHeader() {
  if (header) header.classList.toggle("scrolled", window.scrollY > 20);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const quickForm = document.getElementById("prenota");
const bookingModal = document.getElementById("bookingModal");
const modalForm = document.getElementById("modalBookingForm");

function openBookingModal() {
  if (!bookingModal) return;
  lastFocusedElement = document.activeElement;
  bookingModal.classList.add("open");
  bookingModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  bookingModal.querySelector(".modal-close")?.focus();
}

function closeBookingModal() {
  if (!bookingModal) return;
  bookingModal.classList.remove("open");
  bookingModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

document.querySelectorAll(".top-book").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!quickForm) return;
    event.preventDefault();
    quickForm.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

if (quickForm) {
  quickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    quickBookingData = Object.fromEntries(new FormData(quickForm));
    openBookingModal();
  });
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    closeBookingModal();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && bookingModal?.classList.contains("open")) {
    closeBookingModal();
  }
});

function getQuickBookingData() {
  if (quickBookingData) return quickBookingData;
  return quickForm ? Object.fromEntries(new FormData(quickForm)) : {};
}

function buildBookingMessage() {
  const t = translations[currentLang];
  const data = getQuickBookingData();
  const selectedServices = modalForm
    ? Array.from(modalForm.querySelectorAll('input[name="servizi"]:checked')).map(
        (input) => t[input.value] || input.value
      )
    : [];
  const servicesText = selectedServices.length
    ? selectedServices.map((service) => `• ${service}`).join("\n")
    : t.noExtraServices;
  const note = modalForm ? new FormData(modalForm).get("note") || "-" : "-";

  const roomTranslationKey = {
    double: "roomOptionDouble",
    quadruple: "roomOptionQuad",
    firstAvailable: "roomOptionAny"
  }[data.camera];
  const roomLabel = roomTranslationKey ? t[roomTranslationKey] : data.camera || "-";

  return [
    t.bookingGreeting,
    "",
    `📅 Check-in: ${data.arrivo || "-"}`,
    `📅 Check-out: ${data.partenza || "-"}`,
    `🛏 ${t.requestedRoomLabel}: ${roomLabel}`,
    `👥 ${t.guestsLabel}: ${data.ospiti || "-"}`,
    "",
    `${t.requestedServicesLabel}:`,
    servicesText,
    "",
    `📝 ${t.notesLabel}: ${note}`,
    "",
    t.thankYou
  ].join("\n");
}

if (modalForm) {
  modalForm.addEventListener("submit", (event) => event.preventDefault());
}

document.getElementById("sendWhatsappRequest")?.addEventListener("click", () => {
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(buildBookingMessage())}`;
  window.open(url, "_blank", "noopener");
});

document.getElementById("sendEmailRequest")?.addEventListener("click", () => {
  const t = translations[currentLang];
  const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(t.availabilitySubject)}&body=${encodeURIComponent(buildBookingMessage())}`;
  window.location.href = url;
});

const contactForm = document.getElementById("contactForm");

function buildContactMessage() {
  const t = translations[currentLang];
  const data = contactForm ? new FormData(contactForm) : new FormData();

  return [
    t.contactRequestGreeting,
    "",
    `${t.contactNameLabel}: ${data.get("name") || "-"}`,
    `${t.contactEmailLabel}: ${data.get("email") || "-"}`,
    `${t.contactPhoneLabel}: ${data.get("phone") || "-"}`,
    "",
    `${t.contactMessageLabel}:`,
    data.get("message") || "-"
  ].join("\n");
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const t = translations[currentLang];
    const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(t.contactRequestSubject)}&body=${encodeURIComponent(buildContactMessage())}`;
    window.location.href = url;
  });
}

setLanguage(getInitialLanguage(), false);
