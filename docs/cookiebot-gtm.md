# Cookiebot et Google Tag Manager

Le premier script du `<head>` initialise le consentement Google en mode refusé,
charge Cookiebot, puis charge GTM une fois Cookiebot chargé. En cas d’échec du
chargement de Cookiebot, GTM reste désactivé et le site continue à fonctionner.
Localhost, les adresses de boucle locale et les domaines contenant `replit`
ne chargent aucun de ces scripts.

La déclaration Cookiebot est affichée dans la politique de confidentialité,
à l’endroit prévu dans la page plutôt que dans le `<head>`. Le fallback GTM
`noscript` est ajouté immédiatement après `<body>` au pré-rendu de production,
et ne figure pas dans le HTML servi en développement.

La carte Google est explicitement exemptée du blocage Cookiebot, conformément
au choix du site de la maintenir visible en permanence.

## Réglages à confirmer dans les comptes externes

- Enregistrer `perfecteinte.ca` et, si nécessaire, `www.perfecteinte.ca` dans
  le groupe de domaines Cookiebot fourni. Configurer une bannière française,
  avec choix explicite, pour les visiteurs du Québec.
- Laisser Cookiebot gérer les signaux Consent Mode v2. Ne pas ajouter une
  deuxième installation Cookiebot à l’intérieur du conteneur GTM.
- Dans GTM, activer la vue d’ensemble du consentement, vérifier les consentements
  requis pour **chaque balise**, puis publier le conteneur.
- Pour bloquer entièrement les balises avant consentement (mode basique),
  demander les consentements additionnels appropriés, y compris pour les
  balises Google, et utiliser l’événement `cookie_consent_update`. Les contrôles
  Google intégrés peuvent envoyer des signaux sans cookies lorsque le consentement
  est refusé; un simple état « denied » ne signifie pas « aucun envoi réseau ».
- Ne pas configurer de pixels sans contrôle de consentement dans le fallback
  `noscript`, puisqu’il n’exécute pas le gestionnaire de consentement JavaScript.
- Après le déploiement Vercel, effectuer un scan Cookiebot et vérifier en navigation
  privée le refus, l’acceptation, le changement des choix et les balises GTM.

Les tests locaux (`pnpm test:consent`) simulent le chargement et vérifient les
identifiants, les exclusions de développement, l’ordre d’initialisation et les
erreurs réseau. Ils ne certifient ni la configuration des comptes externes, ni
la conformité légale globale du site.

Références :
- https://support.cookiebot.com/hc/en-us/articles/360016047000-Implementing-Google-Consent-Mode
- https://support.cookiebot.com/hc/en-us/articles/360003793854-Google-Tag-Manager-deployment
