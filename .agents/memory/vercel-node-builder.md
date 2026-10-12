---
name: Compatibilité du builder Node Vercel
description: Un builder Node ancien peut refuser une version Node pourtant supportée par Vercel.
---

Ne pas confondre la compatibilité de la plateforme Vercel avec celle d’un builder `@vercel/node` explicitement épinglé.

**Why:** un déploiement a terminé le build du site, puis échoué au packaging des fonctions avec « invalid Node.js Version: 24.x » alors que Node 24 était officiellement supporté par Vercel. Le projet forçait un ancien builder Node.

**How to apply:** privilégier le builder Node natif sélectionné par Vercel pour les fonctions TypeScript standard. Vérifier les overrides de runtime et la version de `engines.node` avant de modifier l’application ou ses dépendances à cause d’une erreur de packaging.
