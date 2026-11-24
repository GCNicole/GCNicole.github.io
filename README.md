Este repositorio esta hecho por Nicole Goya, estudiante de ingeniería informática de la universidad UNIR. 
Anteriormente, estudié la carrera de ADE, de ahí mi interés por el tema de las finanzas, he querido juntar ese conocimiento e interés a esta actividad de mi nueva carrera para hacer un blog sobre finanzas básicas. 

# Finanzas en Claro

Como he mencionado antes, este será un blog sobre educación financiera creado para la Actividad 1: Creación de un blog) de la asignatura Desarrollo de Aplicaciones en Red del Grado en Ingeniería Informática (UNIR).

Para ver el blog hay que ir al siguiente enlace: https://gcnicole.github.io

## Tecnologías
Las herramientas que se han usado en la creación de este blog son las siguientes:
- **Jekyll** como generador de sitios estáticos
- **GitHub Pages** para publicar la web
- **HTML5** con etiquetas semánticas (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`)
- **CSS3** propio, ha sido usado para colocar elementos en la pagina como en la portada u organizando cada tarjeta en una columna (Grid, Flexbox, transiciones, transformaciones y media queries)
- **JavaScript** esta herramienta ha sido usada, ya que quería meter algo interactivo en el blog, por lo que para el consejo financiero aleatorio de la portada es necesario. 

## Estructura del proyecto

```
├── _config.yml             Configuración del sitio
├── _layouts/
│   ├── default.html        Plantilla principal: cabecera, menú y pie
│   └── entrada.html        Plantilla de cada entrada
├── _includes/
│   └── tarjeta.html        Tarjeta para resumir cada una de las entradas
├── _posts/                 Entradas del blog en Markdown para hacerlo más fácil
├── categorias/             Se usa para clasificar cada entrada en diferentes categorias, como Ahorro, Inversión y Deudas
├── assets/
│   ├── css/estilos.css     Hoja de estilos
│   ├── js/consejos.js      Script del consejo financiero
│   └── img/                Imágenes de las entradas
└── index.html              Página de inicio
```

## Entradas

| Entrada | Categoría |
|---------|-----------|
| La regla 50/30/20: cómo repartir tu sueldo | Ahorro |
| El fondo de emergencia: tu colchón para imprevistos | Ahorro |
| El interés compuesto: por qué empezar pronto marca la diferencia | Inversión |
| Hipoteca fija o variable: ¿cuál me conviene? | Deudas |

## Cómo añadir una entrada nueva

1. Crear un archivo en `_posts/` con el formato `AAAA-MM-DD-titulo.md`.
2. Añadir el front matter con `layout: entrada`, `title`, `category`, `resumen` e `imagen`.
3. Subir la imagen a `assets/img/`.

Las imágenes son de Unsplash y Pexels (uso gratuito).

---
Hecho por Nicole · 2026
