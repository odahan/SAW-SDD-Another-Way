# Atelier 4 — Peut-on fermer ce lot

Durée : 14 minutes (8 en groupes, 6 de correction).

Scénario pédagogique fictif : LOT-001 est Ready-to-close. L’utilisateur demande « Ferme le lot en cours. ».

## Dossier présenté

SPEC : REQ-001-001 Copy complet et source inchangée ; REQ-001-002 Replace uniquement dans la fenêtre capturée ; REQ-001-003 échec sûr avec résultat copiable. Ces exigences sont actives.

Résultat : candidat B, produit après une modification du chemin de collage. A était la version évaluée précédemment.

GATES : G-001-001 AUTO PASS sur A, pas d’examen d’impact après B. G-001-002 HUMAN PASS, avec « confirmé par Alice », sans date ni résultat identifié.

FINDINGS : F-001-001 OPEN — message d’échec incompréhensible ; destination « on verra plus tard ». Aucun lot destinataire n’existe.

CONVERGENCE provisoire : TOTAL ; REQ-001-001 et REQ-001-002 satisfaites. Aucune conclusion sur REQ-001-003. Résultat obtenu : un chemin vers un fichier mutable, sans version ni copie distinguant A et B.

## Travail demandé

1. Identifier les causes de refus.
2. Proposer les actions et écritures nécessaires en préservant les traces.
3. Distinguer les actions documentaires des décisions ou validations humaines.
4. Dire quand Ready-to-close puis Closed deviennent possibles.

Ne pas inventer date, verdict ou autorisation manquants. Correction : script formateur, slides 60 et 61.
