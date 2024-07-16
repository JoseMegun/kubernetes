# Etapa 1: Compilación
FROM maven:3.8.4-openjdk-17 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo pom.xml y descargar las dependencias de Maven
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el código fuente y compilar la aplicación
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Imagen final
FROM openjdk:17-jdk-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo JAR generado desde la etapa de construcción
COPY --from=build /app/target/enriqueta-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 8080

# Definir el punto de entrada para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
