# Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MariaDB](https://mariadb.org/) (o MySQL como alternativa)

## Instalación

1. **Clona el Repositorio**

   git clone url_del_repositorio

2. **Instala las dependencias**

    npm install

3. **Configura las variables de entorno**

    Crea un archivo .env en la raíz del proyecto y completa con tus configuraciones de base de datos y puerto. Puedes usar el archivo .env.example de guia

4. **Configura la base de datos**

    *Accede a la Terminal de MariaDB/MySQL*
    Ejecuta el siguiente comando para iniciar la sesión en MariaDB/MySQL.
    - mysql -u tu_usuario -p
    Reemplaza tu_usuario con tu nombre de usuario de MariaDB y proporciona tu contraseña cuando se te solicite:

    *Crea la Base de Datos*
    crea la base de datos en la que quieres importar los datos.
    CREATE DATABASE nombre_base_de_datos;

    *Sal de la Terminal de MariaDB/MySQL*

5. **Importa el Archivo SQL**
    Desde la línea de comandos, importar el archivo dump.sql que está en la carpeta database.
    Asegúrate de estar en la raíz de tu proyecto, donde está la carpeta database.

    - mysql -u tu_usuario -p nombre_base_de_datos < database/dump.sql

### Iniciar

Despues de configurar el proyecto y la base de datos, inicia el servidor.
