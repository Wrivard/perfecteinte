---
name: Validation des redirections Vercel
description: Limite du serveur local pour les redirections conditionnées par le domaine.
---

Les redirections Vercel utilisant une condition `has` doivent être vérifiées sur un déploiement Vercel, pas dans l’aperçu Replit ou dans `vercel dev`.

**Why:** la documentation officielle Vercel indique que les conditions `has` ne fonctionnent pas localement, mais fonctionnent une fois déployées. Une absence de redirection locale ne démontre donc pas une erreur de configuration.

**How to apply:** valider la configuration et les URL générées localement; distinguer cette validation d’une vérification HTTP du domaine publié. Ne pas annoncer une redirection comme active avant le déploiement et le rattachement des domaines.
