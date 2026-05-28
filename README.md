# twelve-projet
- Pré-requis : 
Avoir docker installer sur la machine.

# Lancement de l'application :
1 - Clôner le repository
"git clone <url-du-repo>"
cd twelve-projet

2- Construire l'image Docker
```bash
docker build  --tag user_name/twelve-prod .
```

3- Lancer le container
```bash
docker run -d -p 1212:80 user_name/twelve-prod
```

# Port :
8080

# Conteneur : 
80

# Protocole
TCP

4- Accéder à l'application
Ouvrir le projet dans un naviguateur et aller sur => http://localhost:1212

# Arrêter le container 
docker stop twelve-projet

# Supprimer le container
docker rm twelve-projet



