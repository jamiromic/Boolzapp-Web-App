// ARRAY DI OGGETTI DEI VARI CONTATTI E MESSAGGI
let contacts = [
    {
    id: 0,
    name: 'Michele',
    avatar: './img/avatar_1.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Ricordati di stendere i panni',
    status: 'sent'
    },
    {
    date: '10/01/2020 16:15:22',
    message: 'Tutto fatto!',
    status: 'received'
    }
    ],
    },
    {
    id: 1,
    name: 'Fabio',
    avatar: './img/avatar_2.jpg',
    visible: true,
    messages: [
    {
    date: '12/03/2020 16:30:00',
    message: 'Ciao come stai?',
    status: 'sent'
    },
    {
    date: '12/03/2020 16:30:55',
    message: 'Bene grazie! Stasera ci vediamo?',
    status: 'received'
    },
    {
    date: '12/03/2020 16:35:00',
    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
    status: 'sent'
    }
    ],
    },
    {
    id: 2,
    name: 'Samuele',
    avatar: './img/avatar_3.jpg',
    visible: true,
    messages: [
    {
    date: '11/03/2020 10:10:40',
    message: 'La Marianna va in campagna',
    status: 'received'
    },
    {
    date: '11/03/2020 10:20:10',
    message: 'Sicuro di non aver sbagliato chat?',
    status: 'sent'
    },
    {
    date: '11/03/2020 16:15:22',
    message: 'Ah scusa!',
    status: 'received'
    }
    ],
    },
    {
    id: 3,
    name: 'Alessandro B.',
    avatar: './img/avatar_4.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Lo sai che ha aperto una nuova pizzeria?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Si, ma preferirei andare al cinema',
    status: 'received'
    }
    ],
    },
    {
    id: 4,
    name: 'Alessandro L.',
    avatar: './img/avatar_5.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ricordati di chiamare la nonna',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Va bene, stasera la sento',
    status: 'received'
    }
    ],
    },
    {
    id: 5,
    name: 'Claudia',
    avatar: './img/avatar_6.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ciao Claudia, hai novità?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Non ancora',
    status: 'received'
    },
    {
    date: '10/01/2020 15:51:00',
    message: 'Nessuna nuova, buona nuova',
    status: 'sent'
    }
    ],
    },
    {
    id: 6,
    name: 'Federico',
    avatar: './img/avatar_7.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Fai gli auguri a Martina che è il suo compleanno!',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Grazie per avermelo ricordato, le scrivo subito!',
    status: 'received'
    }
    ],
    },
    {
    id: 7,
    name: 'Davide',
    avatar: './img/avatar_8.jpg',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ciao, andiamo a mangiare la pizza stasera?',
    status: 'received'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:51:00',
    message: 'OK!!',
    status: 'received'
    }
    ],
    }
    ]

    // CREAZIONE OGGETTO VUE
    const app = new Vue({
        el: '#app',
        data: {
            // PORTO DENTRO L'OGGETTO VUE L'ARRAY DI OGGETTI CONTACTS
            contacts: contacts,
            // CREO UN CONTATORE PER GESTIRE I CONTATTI IN MODO DINAMICO
            activeContact: 0,
            // INIZIALIZZO VARIABILE VUOTA PER UTILIZZARLA IN FUNZIONE CHE CREERA' NUOVO MESSAGGIO, SERVIRA' PER PULIRE IL CAMPO INPUT SUCCESSIVAMENTE
            newMessage: '',
             // INIZIALIZZO VARIABILE VUOTA PER UTILIZZARLA IN FUNZIONE DI FILTRO PER I CONTATTI, SERVIRA' PER PULIRE IL CAMPO INPUT SUCCESSIVAMENTE
            searchContact: '',
        },
        methods: {
            // CREO FUNZIONE CHE MI DARA' LE DATE IN FORMATO ORA:MINUTI
            isHour(date) {
                dayjs(date).format('DD.MM.YYYY.HH:mm')
                return dayjs(date).format('HH:mm')
            },
            // CREO LA FUNZIONE PER AVERE ORA:MINUTI NEL MESSAGGIO CHE ANDREMO A CREARE TRAMITE INPUT
            currentTimeH() {
                return dayjs().format('HH:mm')
            },
            // CREO LA FUNZIONE CHE ABBINO ALL'EVENT LISTENER IN CUI IL CONTATTO CLICCATO DIVENTERA' ACTIVE E AGGIORNERA' IL CONTATORE
            selectedContact(Idcontact) {
                let contactSelected = Idcontact;
                this.activeContact = contactSelected;
            },
            // CREO LA FUNZIONE CHE MI PERMETTE DI CREARE MESSAGGIO E RISPONDERE IN AUTOMATICO AL MESSAGGIO INVIATO
            addMessage() {

                let newMessage = this.newMessage

                newMessage = newMessage.trim();

                const messagesContact = this.contacts[this.activeContact].messages;

                if(newMessage === '') {
                    return
                } else {

                    messagesContact.push
                    (
                        {
                            date: dayjs(),
                            message: newMessage,
                            status: 'sent',
                        }, 
                    )
                    this.newMessage = '';

                    setTimeout(() => {

                        messagesContact.push
                    (
                        {
                            date: dayjs(),
                            message: 'Ok',
                            status: 'received',
                        }, 
                    )
                    },1000)
                }    
            },
            // CREO LA FUNZIONE PER CONVERTIRE LA STRINGA NOME CONTATTO E DATO INPUT IN MINUSCOLO E CREO IL FILTRO PER LA RICERCA CONTATTO
            toLower(word) {

                let lowerCaseInput = word.toLowerCase();

                this.contacts.forEach(element => {

                    let nameContact = element.name.toLowerCase();

                    if (nameContact.indexOf(lowerCaseInput) >= 0){

                        element.visible = true;
                        
                    } else {
                        element.visible = false;
                    }
                    
                });

                
            },

        },
        
        
    })





    


