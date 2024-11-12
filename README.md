
# AluraGeek - E-commerce React App

AluraGeek es una aplicación de comercio electrónico desarrollada en React que permite a los usuarios agregar, editar y eliminar productos. Los productos se almacenan en una base de datos en tiempo real utilizando Firebase. La aplicación tiene un sistema de paginación para mostrar los productos y una interfaz de usuario interactiva con un diseño moderno.

## Características

- **Vista de productos**: Muestra productos con su nombre, precio e imagen.
- **Agregar producto**: Permite agregar nuevos productos a la tienda.
- **Editar producto**: Los usuarios pueden editar el nombre, precio y la imagen de los productos.
- **Eliminar producto**: Los usuarios pueden eliminar productos existentes.
- **Paginación**: Los productos se muestran en un sistema de paginación con un máximo de 6 productos por página.
- **Base de datos en tiempo real**: Utiliza Firebase para almacenar y gestionar los productos.

## Tecnologías utilizadas

- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **Tailwind CSS**: Framework de CSS para diseño y estilización.
- **Firebase**: Base de datos en tiempo real para almacenar productos.
- **React Icons**: Para agregar íconos de interacción como editar y eliminar.
- **Framer Motion**: Para animaciones en el fondo de la página.

## Instalación

### Requisitos

Asegúrate de tener instalados:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **Yarn** o **npm**: Para gestionar dependencias.

### Pasos para la instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/alurageek.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd alurageek
   ```

3. Instala las dependencias:

   Si usas npm:

   ```bash
   npm install
   ```

   O si usas Yarn:

   ```bash
   yarn install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales de Firebase:

   ```bash
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_DATABASE_URL=your_database_url
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

   **Nota**: Asegúrate de tener una cuenta en Firebase y crear un proyecto.

5. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   O si usas Yarn:

   ```bash
   yarn start
   ```

   Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Estructura del Proyecto

```
├── public/                  # Archivos públicos como el index.html
├── src/
│   ├── components/          # Componentes reutilizables como Form, Card, etc.
│   ├── pages/               # Páginas de la aplicación (Home, etc.)
│   ├── services/            # Lógica de servicios, como Firebase
│   ├── types/               # Tipos de TypeScript
│   └── App.tsx              # Componente principal de la aplicación
├── .env                      # Variables de entorno para Firebase
├── tailwind.config.js        # Configuración de Tailwind CSS
└── package.json              # Dependencias y scripts del proyecto
```

## Contribuir

Si quieres contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama (`git checkout -b nombre-de-la-rama`).
3. Haz tus cambios y crea un commit (`git commit -am 'Añadí una nueva funcionalidad'`).
4. Empuja los cambios a tu rama (`git push origin nombre-de-la-rama`).
5. Abre un Pull Request describiendo tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

Gracias por visitar este proyecto. ¡Disfruta contribuyendo y mejorando la aplicación! 😊
