# SEO Audit Report: Esthétique Auto Pascal Pilote

**Date:** 3 avril 2026
**URL:** https://esthetiqueautopascalpilote.ca
**Type de site:** SPA (React + Vite) — Site vitrine local

---

## Sommaire

**Score global: 7.5 / 10**

Le site est bien construit pour un site vitrine local. Les fondations SEO sont solides (meta tags, JSON-LD, sitemap, robots.txt), mais le fait d'être une SPA (Single Page Application) est le principal facteur limitant pour le référencement. Voici les 5 priorités:

1. **CRITIQUE** — Le site est un SPA: Google ne voit que le contenu de `index.html`, pas les pages individuelles
2. **IMPORTANT** — Les liens des services dans le footer pointent tous vers `/services` au lieu des pages individuelles
3. **IMPORTANT** — Les liens sociaux (Facebook/Instagram) pointent vers `#` (placeholder)
4. **MOYEN** — Chargement des polices Google bloquant le rendu (pas de chargement asynchrone)
5. **MOYEN** — Image OG en 1280x720 au lieu de 1200x630 recommandé

---

## Problèmes critiques (à corriger immédiatement)

| Problème | Impact | Détails | Correction |
|----------|--------|---------|------------|
| **SPA sans SSR** | CRITIQUE | Googlebot ne peut pas exécuter le JavaScript de façon fiable. Les `<title>`, `<meta description>` définis par `usePageMeta()` dans React ne sont PAS visibles pour les crawlers. Google ne voit que le titre et la description de `index.html` pour TOUTES les pages. | Migrer vers un framework SSR (Next.js, Astro, Remix) OU implémenter un pré-rendu statique (prerender.io, react-snap) |
| **Liens footer services → /services** | ÉLEVÉ | Les 3 liens de services dans le footer ("Lavage & Entretien esthétique", "Protection de peinture (PPF)", "Polissage & Nano-céramique") pointent tous vers `/services` au lieu de `/services/lavage`, `/services/ppf`, `/services/polissage`. Cela pénalise le maillage interne et le "link juice". | Corriger chaque lien pour pointer vers la page individuelle du service |
| **Liens sociaux placeholder (#)** | ÉLEVÉ | Facebook et Instagram dans le footer utilisent `href="#"`. Liens morts = mauvais signal de confiance + les utilisateurs ne peuvent pas trouver vos réseaux sociaux. `sameAs` dans le JSON-LD est aussi vide `[]`. | Ajouter les vraies URLs Facebook/Instagram et les inclure dans `sameAs` du JSON-LD |

---

## Améliorations à fort impact

| Problème | Impact | Détails | Correction |
|----------|--------|---------|------------|
| **Polices Google bloquant le rendu** | ÉLEVÉ | La balise `<link href="fonts.googleapis.com/..." rel="stylesheet">` est render-blocking. Cela retarde le LCP (Largest Contentful Paint). | Utiliser le chargement asynchrone: `rel="preload" as="style"` + `media="print" onload="this.media='all'"` |
| **Image OG mauvaises dimensions** | MOYEN | `opengraph.jpg` est en 1280x720 (120 Ko). Le standard recommandé est 1200x630. | Recadrer l'image en 1200x630px |
| **Page 404 en anglais** | MOYEN | La page 404 affiche "404 Page Not Found" et "Did you forget to add the page to the router?" en anglais, incohérent avec le site francophone. | Traduire en français et ajouter un lien de retour à l'accueil |
| **Alt text manquants sur certains hero** | MOYEN | Les images hero sur APropos, ServicesPage, RendezVous et GaleriePage ont `alt=""` (vide). | Ajouter des descriptions pertinentes en français |
| **Service "Par Pierre" absent du footer** | MOYEN | Le footer liste 3 services mais omet "Par Pierre". | Ajouter le lien vers `/services/par-pierre` |
| **Pas de `<lastmod>` dans le sitemap** | FAIBLE | Le sitemap utilise `<changefreq>` et `<priority>` mais pas `<lastmod>`. Google ignore `changefreq`/`priority` mais utilise `lastmod`. | Ajouter `<lastmod>` avec une date réelle |
| **Canonical statique** | MOYEN | Le `<link rel="canonical">` dans `index.html` pointe toujours vers `/` pour TOUTES les pages (puisque c'est un SPA). | Résolu automatiquement si migration SSR; sinon, ajouter canonical dynamique via `usePageMeta` |

---

## Gains rapides (Quick Wins)

| Opportunité | Impact potentiel |
|------------|-----------------|
| Corriger les liens footer services → pages individuelles | Meilleur maillage interne, expérience utilisateur |
| Ajouter les vraies URLs sociales + `sameAs` JSON-LD | Confiance Google, Knowledge Graph |
| Traduire la page 404 en français | Cohérence, expérience utilisateur |
| Ajouter alt text aux images hero manquantes | Accessibilité + SEO images |
| Charger les polices de façon asynchrone | Performance LCP |

---

## Analyse page par page

### Page d'accueil (/)
- **Title**: "Esthétique Auto Pascal Pilote | Détailing automobile à La Malbaie, Québec" (69 car.) — **Bon** mais légèrement long (idéal: 50-65 car.)
- **Meta Description**: 195 car. — **Trop long** (idéal: 150-160 car.)
- **H1**: "REDONNEZ DE L'ÉCLAT À VOTRE VÉHICULE" — **Bon**, accrocheur mais ne contient pas le mot-clé principal "esthétique automobile"
- **Score**: 7/10

### À propos (/a-propos)
- **Title**: "À propos | Esthétique Auto Pascal Pilote" (46 car.) — **Bon**
- **Meta Description**: 137 car. — **Bon**
- **H1**: Contient "NOTRE HISTOIRE" — **Acceptable**
- **Alt text hero**: Vide (`alt=""`) — **À corriger**
- **Score**: 7/10

### Services (/services)
- **Title**: "Nos services | Esthétique Auto Pascal Pilote" (48 car.) — **Bon**
- **Meta Description**: 155 car. — **Bon**
- **H1**: "NOS SERVICES D'EXCEPTION" — **Bon**
- **Alt text hero**: Vide — **À corriger**
- **Score**: 7/10

### Lavage (/services/lavage)
- **Title**: "Lavage Auto & Entretien de Luxe | Esthétique Auto Pascal Pilote" (65 car.) — **Bon**
- **Meta Description**: 132 car. — **Bon**
- **H1**: "LAVAGE AUTO & ENTRETIEN DE LUXE" — **Excellent**, correspond au service
- **Alt texts**: Tous remplis — **Bon**
- **Score**: 8/10

### PPF (/services/ppf)
- **Title**: "Protection de peinture PPF | Esthétique Auto Pascal Pilote" (60 car.) — **Bon**
- **Meta Description**: 150 car. — **Bon**
- **H1**: "PROTECTION DE PEINTURE PPF" — **Excellent**
- **Alt texts**: Tous remplis — **Bon**
- **Score**: 8/10

### Par Pierre (/services/par-pierre)
- **Title**: "Service Par Pierre | Esthétique Auto Pascal Pilote" (52 car.) — **Bon**
- **Meta Description**: 147 car. — **Bon**
- **H1**: "SERVICE PAR PIERRE" — **Bon**
- **Note**: Alt texts parfois répétitifs ("Service par pierre" x3) — Diversifier
- **Score**: 7/10

### Polissage (/services/polissage)
- **Title**: "Polissage & Nano-Céramique | Esthétique Auto Pascal Pilote" (60 car.) — **Bon**
- **Meta Description**: 148 car. — **Bon**
- **H1**: "POLISSAGE & NANO-CÉRAMIQUE" — **Excellent**
- **Score**: 8/10

### Galerie (/galerie)
- **Title**: "Galerie | Esthétique Auto Pascal Pilote" (41 car.) — **Court**, pourrait inclure plus de mots-clés
- **Meta Description**: 131 car. — **Bon**
- **Alt text hero**: Vide — **À corriger**
- **Alt text images galerie**: Aucune description individuelle — **À corriger** (toutes utilisent un alt générique)
- **Score**: 5/10

### Rendez-vous (/rendez-vous)
- **Title**: "Prendre un rendez-vous | Esthétique Auto Pascal Pilote" (55 car.) — **Bon**
- **Meta Description**: 143 car. — **Bon**
- **Alt text hero**: Vide — **À corriger**
- **Score**: 7/10

### Politique de confidentialité (/politique-de-confidentialite)
- **Title**: "Politique de confidentialité | Esthétique Auto Pascal Pilote" (61 car.) — **Bon**
- **Meta Description**: 131 car. — **Bon**
- **Score**: 8/10

---

## Ce qui est bien fait

- **robots.txt** correctement servi (vérifié via curl — pas de piège SPA)
- **sitemap.xml** correctement servi (vérifié via curl — XML valide)
- **JSON-LD AutoRepair** complet avec adresse, horaires, coordonnées GPS, zone desservie
- **OG tags et Twitter Cards** bien configurés dans `index.html`
- **`lang="fr"`** sur la balise `<html>`
- **Balises geo** (`geo.region`, `geo.placename`) présentes
- **`llms.txt`** pour l'IA — excellent et proactif
- **Structure H1 unique** par page — aucune page n'a de H1 en double
- **Hiérarchie de titres** cohérente (H1 → H2 → H3)
- **URLs propres**, en français, avec tirets, en minuscules
- **Toutes les pages à 2 clics** maximum de l'accueil
- **Favicon SVG** présent
- **Preconnect** aux serveurs Google Fonts
- **Maillage interne navbar** excellent (dropdown services avec liens individuels)
- **NAP cohérent** (Nom, Adresse, Téléphone) — identique partout

---

## Plan d'action priorisé

### 1. Corrections critiques (bloquant l'indexation)

**1a. Pré-rendu ou SSR** — Le plus gros levier SEO. Options:
- **Option rapide**: Utiliser `vite-plugin-ssr` ou `react-snap` pour générer des pages HTML statiques au build
- **Option robuste**: Migrer vers Astro ou Next.js pour un SSR natif
- **Option intermédiaire**: Utiliser un service de pré-rendu (prerender.io) qui sert du HTML pré-rendu aux bots

**1b. Corriger les liens footer** — Pointer chaque service vers sa page dédiée
**1c. Ajouter les URLs sociales réelles** — Facebook, Instagram + `sameAs` dans JSON-LD

### 2. Améliorations à fort impact (UX + SEO)

- Charger les polices Google de façon asynchrone (impact LCP)
- Recadrer l'image OG en 1200x630
- Traduire la page 404 en français avec lien retour accueil
- Ajouter les alt text manquants (hero images + galerie)
- Ajouter `<lastmod>` au sitemap

### 3. Gains rapides (faciles, bénéfice immédiat)

- Corriger le canonical dynamique (via `usePageMeta`)
- Diversifier les alt texts répétitifs (Par Pierre)
- Enrichir le titre de la galerie: "Galerie photos — Détailing automobile | Esthétique Auto Pascal Pilote"
- Raccourcir la meta description de l'accueil à ~155 caractères

### 4. Recommandations long terme

- Ajouter un blog (articles sur l'entretien auto) pour cibler des mots-clés informationnels
- Schema `FAQPage` sur les pages de services (les FAQ sont déjà en place, il suffit d'ajouter le markup)
- Créer une page Google Business Profile et la lier via `sameAs`
- Ajouter des `AggregateRating` au JSON-LD quand assez d'avis Google
- Considérer `hreflang` si un jour le site est bilingue (français/anglais)
