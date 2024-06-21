# Adopte un stagiaire

### ℹ️ Description

Ce projet a pour but de développer une application web pour que des candidats trouvent des stages en
entreprise.

### Équipe
- [heitzjulien](https://github.com/heitzjulien)
- [Kobrae-San](https://github.com/Kobrae-San)
- [LineinLove](https://github.com/LinelinLove)
- [Nyoote](https://github.com/Nyoote)
- [ValentinMachefaux](https://github.com/ValentinMachefaux)
- [j-renevier](https://github.com/j-renevier)
- [MattisAvec2T](https://github.com/MattisAvec2T)
- [FlowXII](https://github.com/FlowXII)


## Getting started

### ⚙️ Prerequisites

Assurez-vous que les éléments suivants sont installés avant de poursuivre :

- [Node.js](https://nodejs.org/en) (v21)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop/) pour Windows / [Orbstack](https://orbstack.dev/) pour Mac

### 🚦 Run the project

Suivez les étapes suivantes pour exécuter le projet localement :

1. **Cloner les depôts:**

   ```bash
   git clone https://github.com/HETIC-WEB2-Hackathon-2024/violet-aus.git
   git clone https://github.com/HETIC-WEB2-Hackathon-2024/aus-database.git
   ```
  > [!NOTE]
> `violet-aus` correspond à l'application, `aus-database` correspond à la base de données



2. **Lancer le projet:**

> [!IMPORTANT]
> 2 méthodes pour lancer le back et le front

  - 1 **Via un script:**

  Rendez-vous à la racine du projet

   ```bash
   cd violet-aus
   ```

  Executez ce script

   ```bash
  chmod +x setup.sh
  ./setup.sh all
   ```
##
  - 2 **Via Docker:**

    - 1. Rendez-vous à la racine du projet:
      ```bash
        cd violet-aus
        ```

    - 2. Executez les containers:
      ```bash
        docker compose up -d
         ```

## Après cela: 
- Le front devrait être disponible sur le port `5173` et accessible via [http://localhost:5173](http://localhost:5173).
- Le back devrait etre disponible sur le port `3000` et accessible via [http://localhost:3000](http://localhost:3000).

##

- 3 **Lancer la base de données:**

  - 1. Dans une autre fenêtre du terminal rendez vous sur le dossier `aus-database` puis dans `postgresql`
  ```bash
    cd aus-database/postgresql
  ```
  - 2. Lancer avec docker 
  ```bash
  docker compose up -d
  ```
## Après cela: 
- La base de données devrait être disponible sur le port `5010` et accessible via [http://localhost:5010](http://localhost:5010).
