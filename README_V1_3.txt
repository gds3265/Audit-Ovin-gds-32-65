AUDIT OVIN GDS 32-65 — v1.3

- Application autonome : aucune base métier / aucun CSV obligatoire.
- Reproduction volontairement simplifiée.
- Connexion Supabase Auth ajoutée.
- Les mêmes comptes e-mail / mot de passe que l'Audit Bovin sont réutilisés.
- Les rôles proviennent de public.profiles.
- Les données Ovin restent séparées dans public.ovin_backups.
- Fonctionnement local hors connexion conservé après authentification.
- PATCH_SECURITE_OVIN_V1_3.sql : à exécuter si la v1.2 a déjà créé ovin_backups.
