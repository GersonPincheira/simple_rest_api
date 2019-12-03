# Establece la imagen base
FROM node




# Crear directorio de trabajo
RUN mkdir /src

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
#RUN npm install nodemon -g --quiet
# Se estable el directorio de trabajo
WORKDIR /src

COPY package*.json /src/
# Instala los paquetes existentes en el package.json
RUN npm install



# Copia la Aplicación
COPY . /src/

# Expone la aplicación en el puerto 3000
EXPOSE 3000

# Inicia la aplicación al iniciar al contenedor
CMD node index.js