# Maquettes des projets d'exemple

Les visuels des 6 projets fictifs (`public/projects/…`) sont dessinés en HTML/CSS dans
`mockups.html`, une maquette par identifiant (`?id=lagune-home`, `?id=ayaba-cover`…).

- Voir une maquette : ouvrez `mockups.html?id=lagune-home` dans le navigateur
  (`?id=list` affiche la liste des identifiants et des tailles).
- Régénérer les PNG : `powershell -File render.ps1 -OutDir out`
  (ou `-Ids "lagune-cover,mono-cover"` pour quelques-unes seulement).
- Les PNG sont ensuite convertis en JPG dans `public/projects/<slug>/`.

Ces projets sont fictifs : ils ne servent qu'à visualiser le site et ne sont jamais publiés en ligne
(statut `demo`). Remplacez-les par vos vrais projets avant la mise en ligne.
