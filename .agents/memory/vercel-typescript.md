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

Déclarer explicitement le format ESM du package qui contient le handler compilé; ne pas compter sur la détection automatique du runtime.

**Why:** le premier test de chargement réussissait sous Node avec détection automatique, mais le même handler échouait lorsque cette détection était désactivée. Tester uniquement un import local permissif masquait donc un risque de démarrage.

**How to apply:** conserver un test strict du handler packagé et y inclure une requête valide avec fournisseur simulé. Distinguer une validation locale de la confirmation du fonctionnement d’un déploiement réel.
