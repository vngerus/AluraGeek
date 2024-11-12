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

## Estructura del Proyecto

```
├── public/                  # Archivos públicos como el index.html
├── src/
│   ├── components/          # Componentes reutilizables como Form, Card, etc.
│   ├── lib/                 # Contenido de cn
│   ├── pages/               # Páginas de la aplicación (Home, etc.)
│   ├── services/            # Lógica de servicios, como Firebase
│   ├── types/               # Tipos de Interfaces
│   └── App.tsx              # Componente principal de la aplicación
├── .env                      # Variables de entorno para Firebase
├── tailwind.config.js        # Configuración de Tailwind CSS
└── package.json              # Dependencias y scripts del proyecto
```

