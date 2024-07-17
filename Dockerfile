# Etapa 1: Compilación
FROM node:18 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación Angular
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Construir la aplicación para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/mariaenriqueta-system /usr/share/nginx/html

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 80

# Definir el punto de entrada para ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]
