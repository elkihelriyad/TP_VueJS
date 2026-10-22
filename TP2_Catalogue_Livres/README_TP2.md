# TP2 - Formulaires & événements (Vue.js 3)

## Fichiers

- `index.html` : formulaire et catalogue.
- `app.js` : état Vue, propriétés calculées et méthodes.
- `style.css` : styles de la page.
- `books.json` : données de départ (4 livres d'exemple).

## Exécution

1. Placer les quatre fichiers dans le même dossier, puis l'ouvrir dans VS Code.
2. Installer l'extension **Live Server** si nécessaire.
3. Faire un clic droit sur `index.html` et choisir **Open with Live Server**.
4. Une connexion Internet est nécessaire pour charger Vue 3 depuis le CDN.

## Tests

1. Vérifier que les quatre livres s'affichent.
2. Compléter titre et auteur : le bouton **Ajouter le livre** s'active.
   Avec `v-model.lazy` sur l'auteur, quitter le champ pour mettre à jour sa valeur.
3. Saisir un mot-clé et appuyer sur **Entrée**. Ajouter le même mot-clé une
   deuxième fois : il ne doit pas être dupliqué. Essayer de le retirer avec `×`.
4. Ajouter le livre : son id est nouveau et le formulaire est réinitialisé.
5. Cliquer sur une carte : son état favori change.
6. Cliquer sur **Supprimer** : la carte disparaît sans déclencher le favori
   (grâce à `@click.stop`).
7. Essayer un formulaire sans titre ou sans auteur : le bouton reste désactivé.

## Remarque

Les modifications existent uniquement en mémoire dans le navigateur. Un
rafraîchissement recharge les données initiales de `books.json` ; ce TP ne
demande ni serveur d'écriture ni base de données.
