# AYCP Developer Portfolio

Portfolio personal de **Alexander Yosimar Cervantes Pineda** - Desarrollador FullStack.

## Estructura del Proyecto

```
src/
├── assets/                    # Recursos estáticos
│   ├── assets.js             # Exportación de imágenes y videos
│   ├── aycpdeveloper-photos/ # Fotos del perfil y CV
│   ├── background-footer/     # Imagen de fondo del footer
│   ├── coding-algorithms/      # Videos de código y algoritmos
│   └── tech-stack/            # Imágenes de Frontend y Backend
├── components/                # Componentes reutilizables
│   ├── button/               # Botón con efectos blob
│   ├── buttons-context/      # Context API para estado de botones
│   ├── download-cv/          # Descarga del CV
│   ├── dynamic-text/         # Texto animado con Typewriter
│   ├── footer/               # Footer con recursos recomendados
│   ├── get-to-know-me/       # Modal de foto de perfil
│   ├── image/                # Componente de imagen con lazy loading
│   ├── navbar/               # Barra de navegación
│   ├── title/                # Título con estilo degradado
│   ├── view-cv/              # Visualizador del CV con zoom
│   ├── whatsapp/             # Enlace a WhatsApp
│   └── word-changer/        # Animación de palabras cambiantes
├── exports/                   # Archivo de exportaciones centralizado
│   └── exports.js           # Exporta todos los componentes
├── routes/                    # Páginas/Rutas de la aplicación
│   ├── root/                 # Layout principal
│   ├── start/                # Página de inicio
│   ├── who-am-i/             # Sección "¿Quién soy?"
│   ├── tech-stack/           # Sección de Tech Stack
│   ├── coding/               # Sección de Codificación
│   ├── technologies/          # Sección de Tecnologías
│   └── formation/            # Sección de Formación
├── sass/                      # Estilos SCSS
├── App.jsx                    # Componente principal
└── main.jsx                  # Punto de entrada
```

## Tecnologías Utilizadas

### Frontend
- **React 19** - Framework principal
- **Vite** - Build tool y servidor de desarrollo
- **SASS** - Preprocesador de CSS

### Librerías
- **typewriter-effect** - Efecto de máquina de escribir
- **react-bootstrap-icons** - Iconos de Bootstrap
- **file-saver** - Descarga de archivos
- **react-whatsapp** - Integración con WhatsApp

### Testing
- **Vitest** - Framework de testing
- **React Testing Library** - Testing de componentes React
- **jsdom** - Simulación de DOM para testing

## Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Ejecutar tests
npm test

# Linting
npm run lint
```

## Componentes Principales

### Components

| Componente | Descripción |
|------------|-------------|
| `Button` | Botón animado con efecto blob |
| `Title` | Título con degradado azul |
| `Image` | Imagen con lazy loading y estado de carga |
| `DynamicText` | Texto animado tipo máquina de escribir |
| `WordChanger` | Animación cíclica de palabras |
| `Navbar` | Barra de navegación con menú de contacto |
| `Whatsapp` | Enlace directo a WhatsApp |
| `Footer` | Footer con recursos recomendados |
| `DownloadCV` | Botón para descargar CV |
| `ViewCV` | Modal para visualizar CV con zoom |
| `GetToKnowMe` | Modal para ver foto de perfil |
| `ButtonsContext` | Context API para visibilidad de botones |

### Routes

| Ruta | Descripción |
|------|-------------|
| `Start` | Página principal con presentación |
| `WhoAmI` | Información personal |
| `TechStack` | Pila tecnológica preferida |
| `Coding` | Videos de codificación y algoritmos |
| `Technologies` | Grid de tecnologías dominadas |
| `Formation` | Formación académica y cursos |
| `Root` | Layout principal de la aplicación |

## Características

- Diseño responsive
- Animaciones CSS para elementos interactivos
- Efectos de texto typewriter
- Modal para visualizar CV con zoom
- Integración con WhatsApp
- Descarga de CV en imagen
- Sección de recursos recomendados (MDN, GeeksforGeeks, W3Schools, etc.)
- Canales de YouTube recomendados (OpenBootcamp, freeCodeCamp, TheNetNinja)
- Bootcamps recomendados (UltraCamp, freeCodeCamp, Fireship)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 3000)
npm run dev

# Ejecutar tests
npm test
```

## Autor

**Alexander Yosimar Cervantes Pineda**

- GitHub: [@aycpdeveloper](https://github.com/aycpdeveloper)
- WhatsApp: [+52 5533845872](https://wa.me/5533845872)

## Licencia

Copyright © 2026 - Todos los derechos reservados
