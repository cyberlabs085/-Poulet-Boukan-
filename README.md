# Ô Poulet Boukané — site vitrine

Projet réalisé dans le cadre du module **Versioning** (ESITEC, Licence 1 Génie Informatique). Site web statique en binôme, évalué sur la démarche Git et la collaboration plutôt que sur le design.

## Sujet choisi

Site vitrine d'une petite entreprise fictive : **Ô Poulet Boukané**, une enseigne de restauration rapide à Dakar spécialisée dans le poulet fumé et grillé façon boukané, avec plusieurs points de vente (Plateau, Sacré-Cœur, Almadies, Parcelles Assainies).

## Structure des fichiers

```
o-poulet-boukane/
├── index.html      Page d'accueil
├── about.html       Histoire et valeurs de l'enseigne
├── menu.html        Carte du menu, filtrable par catégorie
├── contact.html      Adresses, horaires et formulaire de contact
├── style.css        Feuille de style commune à toutes les pages
├── script.js        Menu mobile, filtre du menu, validation du formulaire
├── README.md        Ce fichier
└── .gitignore        Fichiers exclus du suivi Git
```

## Fonctionnalités interactives (script.js)

- **Menu de navigation responsive** : bouton hamburger qui ouvre/ferme la navigation sur mobile.
- **Filtre du menu par catégorie** (page `menu.html`) : Tout / Grillades / Accompagnements / Boissons / Desserts, sans rechargement de page.
- **Validation du formulaire de contact** (page `contact.html`) : vérification du nom, de l'adresse e-mail et de la longueur du message, avec messages d'erreur inline.

## Répartition des rôles

| Membre A — *[Serigne Modou Sow]* | Membre B — *[Abdoulaye Seye Dieng]* |
|---|---|
| `index.html` (accueil) | `menu.html` (page de contenu) |
| `about.html` (à propos) | `contact.html` |
| Structure HTML globale + navigation | `style.css` (CSS global et responsive) |
| `script.js` | `README.md` |

> À compléter avec les prénoms réels avant le premier commit — ils servent aussi de base aux noms de branches (`feature/prenom-a`, `feature/prenom-b`).

## Workflow Git

Chaque membre travaille sur sa branche (`feature/prenom-a` / `feature/prenom-b`), avec un minimum de 5 commits chacun. Synchronisation via `git fetch origin` + `git merge` (pas de `git pull` direct). Deux conflits volontaires sont provoqués et résolus sur `style.css` et `README.md`, avec des commits préfixés `resolve:`, avant fusion finale dans `main`.
