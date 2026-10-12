---
name: TypeScript et fonctions Vercel
description: Options héritées et exports workspace TypeScript dans un packaging Vercel natif.
---

Pour les fonctions Vercel, déclarer les options de module explicitement dans leur configuration TypeScript, plutôt que compter uniquement sur celles héritées du workspace.

**Why:** le builder injectait ses valeurs NodeNext avant la résolution des options héritées, provoquant des erreurs d’exports et d’extensions malgré des vérifications workspace réussies.

**How to apply:** vérifier le packaging réel du handler, pas seulement son exécution avec tsx. La compilation peut réussir alors que Node ne peut pas charger le résultat.

Les imports exécutés par Node doivent résoudre des fichiers JavaScript. Un export de package workspace visant une source `.ts` peut devenir invalide lorsque Vercel renomme les fichiers tracés en `.js` sans réécrire les métadonnées du package.

**Why:** le chargement du handler packagé a échoué pour cette raison après une compilation réussie. Le service de soumission utilise donc directement les schémas générés, sans modifier leur code généré ni le contrat de validation.

**How to apply:** conserver ce choix tant que le déploiement utilise le tracing natif de Vercel. Si le packaging est remplacé par un bundling complet, réévaluer cette contrainte plutôt que la maintenir aveuglément.
