AUDIT OVIN GDS 32-65 – VERSION 1.2 SUPABASE

PRINCIPE DE CETTE VERSION
- Aucune base métier Ovin n'est disponible : l'application est donc entièrement autonome.
- Aucun import CSV ou fichier troupeau n'est nécessaire ni prévu.
- Les exploitations sont créées manuellement.
- Les animaux observés ou lots représentatifs sont ajoutés manuellement dans chaque visite.
- Il n'y a pas de module de reproduction détaillé : seuls quelques indicateurs synthétiques peuvent être saisis s'ils sont connus (période d'agnelage, fertilité, prolificité, mortalité, avortements).

Projet Supabase préconfiguré :
https://ckylznynqsefqkmtjcjf.supabase.co

INSTALLATION
1. Dans Supabase > SQL Editor > New query, exécuter SUPABASE_SETUP_OVIN.sql une seule fois.
2. Dans GitHub, déposer à la racine : index.html, manifest.webmanifest, sw.js et SUPABASE_SETUP_OVIN.sql.
3. Ouvrir l'application > Sauvegarde.
4. L'URL du nouveau projet est déjà remplie.
5. Coller la clé publique/publishable Supabase puis cliquer sur Enregistrer Supabase.
6. Cliquer sur Tester la connexion puis Synchroniser maintenant.

IMPORTANT
- La table Ovin est ovin_backups : elle est séparée de Parage et de l'Audit bovin.
- Le stockage local auditOvinGDS_v1 est conservé pour éviter de perdre d'anciennes saisies locales.
- L'application reste utilisable hors connexion ; les saisies restent locales et sont synchronisées dès que possible.
- L'export/restauration JSON reste disponible comme sauvegarde de secours.

Fonctions : exploitations saisies manuellement, visites, sujets/lots saisis manuellement, mesures et seuils ovins, audit troupeau simplifié, alimentation, bâtiment/eau, analyse, plan d'action, rapport imprimable/PDF et sauvegarde JSON/Supabase.
