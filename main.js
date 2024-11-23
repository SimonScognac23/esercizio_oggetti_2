


let agenda = {
    contacts: [
        { nome: 'Ciro', telefono: '3331111111' },
        { nome: 'Gianluca', telefono: '3332222222' },
        { nome: 'Roberta', telefono: '3333333333' },
        { nome: 'Sara', telefono: '3334444444' },
        { nome: 'Cloud', telefono: '3334444444' },
        { nome: 'LionElJonson', telefono: '33345454444' },
        { nome: 'GhazghkullMagUrukThraka', telefono: '33345454444' },
        { nome: 'Yoda', telefono: '33345454444' },
        { nome: 'Anna', telefono: '33345454444' }
    ],




    // Mostrare tutti i contatti
    mostraContatti: function () {
        if (this.contacts.length == 0) {  // se la lunghezza dell'array è pari a 0 stampa "no contatti", altrimenti mostrameli tutti tramite il forEach
            console.log('Non ci sono contatti nella rubrica');
        } else {
            this.contacts.forEach(contatto => console.log(contatto));  //funzione di ordine superiore, quindi callback!
        }
    },





    // Mostrare un singolo contatto
    mostraContatto: function (nome) {
        // .map() Clona l'array e lo salva dentro (let nomi) in modo da poter usare indexOf per cercare un nome specifico su nomi, Questo metodo è utile perché indexOf funziona solo su array di valori primitivi (come stringhe o numeri)
        // toLowerCase(): converte la stringa del nome in minuscolo, in modo da rendere case-insensitive la stringa che gli passiamo
        let nomi = this.contacts.map(contatto => contatto.nome.toLowerCase());
        let index = nomi.indexOf(nome.toLowerCase());  //  // indexOf mi restituisce l'indice del primo elemento che trova anche se ci sono dei doppioni
        if (index !== -1) {     // questa condizione mi serve perchè se il nome inserito non è presente in rubrica l'indice che uscirà fuori tramite indexOf sarà di -1 e perciò posso creare una condizione per vedere se il contatto è presente oppure no
            console.log(`Nome: ${this.contacts[index].nome}, Telefono: ${this.contacts[index].telefono}`);
        } else {
            console.log(`Il contatto ${nome} non è stato trovato`);
        }
    },





    // Eliminare un contatto
    eliminaContatto: function (nomeRimosso) {
        let nome = this.contacts.map(contatto => contatto.nome.toLowerCase());
        let index = nome.indexOf(nomeRimosso.toLowerCase());
        if (index >= 0) {  // Cerchiamo l'indice del nome rimosso
            this.contacts.splice(index, 1);  // una volta trovato l'indice nel array clonato, fai lo splice su quello originale di array e non su quello clonato
            console.log(`Il Contatto "${nomeRimosso}" è stato eliminato`);
        } else {
            console.log(`Il contatto "${nomeRimosso}" non è stato trovato`);
        }
    },






    // Aggiungere un nuovo contatto
    aggiungiContatto: function (nomeAggiunto, telefono) {
        this.contacts.push({ nome: nomeAggiunto, telefono: telefono }); // .push() aggiunge un elemento alla fine dell'array
        console.log(`Il contatto "${nomeAggiunto}" è stato aggiunto.`);
    },






    // Modificare un contatto esistente
    modificaContatto: function (nomeVecchio, nuovoNome, nuovoTelefono) {
        let contatto = this.contacts.find(n => n.nome.toLowerCase() === nomeVecchio.toLowerCase());  // Confronta correttamente con nomeVecchio

        if (contatto) {
            contatto.nome = nuovoNome;
            contatto.telefono = nuovoTelefono;
            console.log(`Contatto "${nomeVecchio}" modificato in "${nuovoNome}"`);
        } else {
            console.log('Contatto non trovato');
        }
    }
};






agenda.mostraContatti();
console.log("\n");

agenda.mostraContatto('ghazghkullmagurukthraka');
console.log("\n");


agenda.modificaContatto('Cloud', 'Sephiroth', '3336666666');
console.log("\n");



agenda.eliminaContatto('Yoda');
console.log("\n");



agenda.aggiungiContatto('Giulia', '3335555555');
console.log("\n");


agenda.mostraContatti();  // controllo finale per vedere se i metodi sono stati scritti in maniera corretta
console.log("\n");
