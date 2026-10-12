---
name: Validation des redirections Vercel
description: Limite du serveur local pour les redirections conditionnées par le domaine.
---

Les redirections Vercel utilisant une condition `has` doivent être vérifiées sur un déploiement Vercel, pas dans l’aperçu Replit ou dans `vercel dev`.

**Why:** la documentation officielle Vercel indique que les conditions `has` ne fonctionnent pas localement, mais fonctionnent une fois déployées. Une absence de redirection locale ne démontre donc pas une erreur de configuration.

**How to apply:** valider la configuration et les URL générées localement; distinguer cette validation d’une vérification HTTP du domaine publié. Ne pas annoncer une redirection comme active avant le déploiement et le rattachement des domaines.

Vérifier les redirections de domaine du projet Vercel avant d’ajouter une redirection canonique dans le dépôt. Préférer une seule source de configuration pour leur direction.

**Why:** une redirection du domaine racine vers `www` dans Vercel, combinée à la redirection inverse dans le dépôt, a empêché le chargement du CSS, des scripts et des images. La configuration du domaine et le DNS réel peuvent aussi diverger pendant la propagation.

**How to apply:** consulter les domaines du projet via l’intégration Vercel et tester chaque domaine et une URL de ressource avec des requêtes HTTP. Ne pas déduire de « verified » que le DNS répond déjà chez Vercel partout.

Les URL SEO doivent utiliser le domaine canonique servi directement, en cohérence avec le domaine primaire Vercel.

**Why:** Google documente les URL d’un autre hôte, y compris une différence `www`, comme non autorisées dans un sitemap sans configuration de soumission intersites adaptée. Un HTTP 200 obtenu hors Google ne prouve pas que Google lui-même peut récupérer le fichier.

**How to apply:** aligner les URL du sitemap, sa déclaration robots.txt et les métadonnées de toutes les pages, y compris celles générées pendant le build. Pour un « Couldn't fetch » persistant, obtenir le résultat « Page fetch » du test en direct de Search Console au lieu de conclure que le délai ou le XML est forcément en cause.
