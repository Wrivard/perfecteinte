# Domaine public de Perfecteinte

Le domaine canonique du site est **https://perfecteinte.ca**, sans `www`.

Les URL publiques sont :

- Accueil : https://perfecteinte.ca/
- Soumission : https://perfecteinte.ca/rendez-vous
- Confidentialité : https://perfecteinte.ca/politique-de-confidentialite
- Sitemap : https://perfecteinte.ca/sitemap.xml
- Robots : https://perfecteinte.ca/robots.txt
- Informations pour les assistants : https://perfecteinte.ca/llms.txt

Les liens canoniques, les variantes linguistiques, les métadonnées sociales,
les URL des images de partage et les données structurées utilisent ce domaine.
Le sitemap est régénéré à la compilation et ne contient ni la 404, ni les
anciennes pages Services / À propos, ni les points d’entrée API.

## Activation dans Vercel

1. Ajouter `perfecteinte.ca` et `www.perfecteinte.ca` au projet Vercel.
2. Configurer les DNS avec les valeurs indiquées par Vercel.
3. Redéployer après les modifications du dépôt.

`vercel.json` contient une redirection permanente de `www.perfecteinte.ca`
vers `https://perfecteinte.ca`, en conservant le chemin. Les domaines de
prévisualisation ne sont pas redirigés.

Cette redirection dépend de Vercel : elle n’est pas appliquée par le serveur
Vite local. Après publication, vérifier le domaine sans `www`, la redirection
depuis `www` et l’accès au sitemap. La configuration du dépôt ne modifie pas
les DNS et n’ajoute pas les domaines au compte Vercel.

Le domaine d’envoi Resend reste `kua.quebec` et l’expéditeur reste
`bonjour@kua.quebec`; il ne faut pas les remplacer par le domaine du site.
