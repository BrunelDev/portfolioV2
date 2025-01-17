# Étape 1 : Utiliser une image Linux légère avec Bun
FROM oven/bun:latest AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json, bun.lockb et autres nécessaires
COPY package.json bun.lockb ./

# Installer les dépendances
RUN bun install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN bun run build

# Étape 2 : Créer une image finale
FROM oven/bun:latest

# Définir le répertoire de travail
WORKDIR /app

# Copier l'application construite
COPY --from=builder /app ./

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Démarrer l'application avec Bun
CMD ["bun","run", "start"]
