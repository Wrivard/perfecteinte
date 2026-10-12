# Envoi des soumissions avec Resend sur Vercel

Le formulaire appelle `POST /api/contact`, servi par la fonction Vercel `api/contact.ts`.
Il envoie deux courriels distincts dans une requête Resend :

1. **Notification au propriétaire**, à `RECIPIENT_EMAIL`, avec les coordonnées,
   le véhicule, les services demandés et le message. Le bouton « Répondre » de
   votre messagerie répond directement au client.
2. **Confirmation au client**, à l’adresse saisie dans le formulaire, avec le
   résumé de sa demande et le délai de réponse de **24 à 48 heures**. Une réponse
   à cette confirmation est adressée à `RECIPIENT_EMAIL`.

Les deux modèles HTML et texte sont intégrés dans
`artifacts/api-server/src/lib/email-templates.ts` : en-tête Perfecteinte noir et
orange, récapitulatif complet, boutons de contact et mise en page mobile.
Aucun modèle à créer
dans le tableau de bord Resend.

## Configuration

Dans **Vercel → Project → Settings → Environment Variables**, ajouter :

| Variable | Valeur |
| --- | --- |
| `RESEND_API_KEY` | Clé privée créée dans https://resend.com/api-keys |
| `RESEND_FROM_EMAIL` | `bonjour@kua.quebec` |
| `RECIPIENT_EMAIL` | Adresse qui doit recevoir les soumissions |

Configurer ces variables pour **Production**, et pour **Preview** si les
déploiements de prévisualisation doivent aussi envoyer des courriels.
Ne pas utiliser de préfixe `VITE_` : ces valeurs doivent rester côté serveur.
Redéployer après l’ajout ou la modification des variables.

Le domaine **kua.quebec** doit être vérifié dans Resend, et la clé API doit
autoriser l’envoi depuis ce domaine. Le code refuse un autre expéditeur ainsi
qu’une configuration manquante ou un destinataire invalide.

L’adresse de contact publique de Perfecteinte reste inchangée : la configuration
Resend ne remplace pas les coordonnées affichées sur le site.

## Routage et vérification

Le projet Vercel doit utiliser la **racine du dépôt**, où se trouvent
`vercel.json` et `api/contact.ts`. Le fichier `vercel.json` existant ne contient
pas de réécriture SPA qui pourrait intercepter `/api/contact`.

La version de production est fixée à **Node.js 22.x** par `engines.node` dans
le `package.json` racine. Choisir également **22.x** dans les paramètres Vercel
« Settings → Build and Deployment → Node.js Version ». Les fonctions TypeScript
utilisent le builder Node natif de Vercel : ne pas réintroduire l’ancien override
`runtime: "@vercel/node@5.1.0"`, qui peut refuser les versions Node plus récentes.

Après configuration, envoyer une soumission de test avec une adresse de client
que vous contrôlez. Vérifier :

- la notification reçue par le destinataire configuré;
- la confirmation reçue par le client;
- l’expéditeur `Perfecteinte <bonjour@kua.quebec>`;
- les adresses de réponse des deux courriels;
- les deux envois dans le tableau de bord Resend.

Un succès signifie que Resend a accepté les deux messages, pas que la livraison
en boîte de réception est garantie. En cas de rejet de Resend, le formulaire
affiche une erreur et conserve les renseignements pour permettre de réessayer.

## Références officielles

- SDK Node.js : https://resend.com/docs/send-with-nodejs
- Envoi groupé : https://resend.com/docs/api-reference/emails/send-batch-emails
