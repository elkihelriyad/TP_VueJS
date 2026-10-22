
function livreVide() {
    return {
        title: '',
        author: '',
        year: new Date().getFullYear(),
        genre: 'Roman',
        isFav: false,
        keywords: []
    };
}

const app = Vue.createApp({
    data() {
        return {
            books: [],
            newBook: livreVide(),
            nouveauMotCle: '',
            chargement: true,
            erreur: ''
        };
    },

    computed: {
        
        formulaireValide() {
            return this.newBook.title.trim() !== '' &&
                   this.newBook.author.trim() !== '';
        },

        totalLivres() {
            return this.books.length;
        },

        totalFavoris() {
            return this.books.filter(book => book.isFav).length;
        }
    },

    methods: {
        ajouterLivre() {
            if (!this.formulaireValide) return;

            const nouvelId = Math.max(0, ...this.books.map(book => book.id)) + 1;

            
            this.books.push({
                ...this.newBook,
                id: nouvelId,
                keywords: [...this.newBook.keywords]
            });

            this.newBook = livreVide();
            this.nouveauMotCle = '';
        },

        supprimerLivre(book) {
            this.books = this.books.filter(livre => livre.id !== book.id);
        },

        toggleFavori(book) {
            book.isFav = !book.isFav;
        },

        ajouterMotCle() {
            const mot = this.nouveauMotCle.trim();

            if (mot !== '' && !this.newBook.keywords.some(
                ancien => ancien.toLowerCase() === mot.toLowerCase()
            )) {
                this.newBook.keywords.push(mot);
            }

            this.nouveauMotCle = '';
        },

        retirerMotCle(index) {
            this.newBook.keywords.splice(index, 1);
        }
    },

    async mounted() {
        try {
            const reponse = await fetch('./books.json');
            if (!reponse.ok) throw new Error('books.json introuvable');

            const donnees = await reponse.json();
            if (!Array.isArray(donnees)) throw new Error('Le JSON doit contenir une liste');
            this.books = donnees;
        } catch (e) {
            this.erreur = 'Impossible de charger books.json. Ouvre le projet avec Live Server.';
            console.error(e);
        } finally {
            this.chargement = false;
        }
    }
});

app.mount('#app');
