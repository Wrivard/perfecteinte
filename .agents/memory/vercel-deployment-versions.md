---
name: Vérifier la version Vercel testée
description: Distinguer une URL de déploiement figée d’une URL de branche ou de production.
---

Avant de modifier encore le code après une erreur persistante sur Vercel, vérifier que le navigateur teste le nouveau déploiement, et pas une ancienne URL avec hash.

**Why:** les URLs uniques désignent un déploiement précis et restent associées à ce commit. Un push ou un redéploiement ne met pas à jour cette ancienne URL, contrairement aux alias de branche et de production.

**How to apply:** comparer les URLs des requêtes visibles dans les captures. Ouvrir le dernier déploiement Ready correspondant au commit attendu depuis Vercel → Deployments → Visit. Rafraîchir une ancienne URL ne change pas la version servie.

Référence : https://vercel.com/docs/deployments/generated-urls

Ne pas utiliser la liste d’alias d’un ancien déploiement pour conclure que ces alias servent encore cette version.

**Why:** l’API Vercel peut présenter les mêmes alias de projet sur les détails d’un ancien déploiement et du plus récent. Les URLs uniques et les commits source permettent de distinguer les versions.

**How to apply:** comparer les métadonnées du déploiement précis avec le déploiement actuel du projet. Pour vérifier l’API publique sans envoyer de courriel, utiliser GET et un POST vide : ils doivent renvoyer une erreur de méthode ou de validation, pas un échec de démarrage.
