# GitHub Copilot Instructions

## Contexto del proyecto
Este repositorio contiene una aplicación construida con **Vite + React** y usa **Tailwind CSS** como framework principal de UI.

## Objetivos de desarrollo
- Mantener una arquitectura clara, modular y fácil de escalar.
- Priorizar componentes reutilizables y composición sobre duplicación.
- Escribir código idiomático de React con funciones puras y hooks cuando corresponda.
- Favorecer una experiencia de usuario rápida, accesible y legible.

## Convenciones de frontend
- Usar **React funcional** con hooks.
- Mantener los componentes pequeños y con una sola responsabilidad.
- Colocar lógica compartida en hooks, utilidades o componentes reutilizables.
- Preferir TypeScript si ya está presente en el proyecto; si no, seguir el estilo existente.
- Evitar complejidad innecesaria y dependencias pesadas si no son estrictamente necesarias.

## Estilos y UI
- Usar **Tailwind CSS** como sistema principal de estilos.
- Priorizar una interfaz con **fondos claros**, alto contraste suficiente y excelente legibilidad.
- Diseñar pantallas limpias, modernas y fáciles de leer.
- Mantener consistencia visual en espaciado, tipografía, sombras, bordes y estados interactivos.
- Usar clases utilitarias de Tailwind antes que CSS personalizado, salvo cuando haya una razón clara.
- Si se requiere tematización, el tema por defecto debe ser claro.

## Responsividad
- Todas las vistas y componentes deben ser **responsivos**.
- Diseñar primero para pantallas pequeñas y luego escalar a tablet y desktop.
- Usar breakpoints de Tailwind de forma consistente.
- Asegurar que navegación, grids, formularios y paneles funcionen correctamente en pantallas de cualquier tamaño.

## Animaciones y gráficos
- Cuando se necesiten animaciones visuales o ilustraciones dinámicas, **preferir Canvas sobre SVG**.
- Evitar SVG para animaciones complejas si una implementación con Canvas es viable.
- Mantener animaciones fluidas, ligeras y no intrusivas.
- Respetar preferencias de accesibilidad como `prefers-reduced-motion` cuando aplique.

## Accesibilidad
- Usar HTML semántico siempre que sea posible.
- Garantizar contraste adecuado, foco visible y navegación por teclado.
- Añadir etiquetas accesibles a controles interactivos.
- No depender únicamente del color para comunicar estados.

## Buenas prácticas
- Crear componentes presentacionales limpios y desacoplados.
- Validar estados vacíos, loading, error y éxito en las interfaces.
- Mantener nombres de archivos, componentes y variables descriptivos.
- Agregar comentarios solo cuando aporten contexto útil y no evidente.
- Proponer soluciones simples, mantenibles y alineadas con la estructura existente del repositorio.

## Al generar o modificar código
- Respetar la estructura actual del proyecto.
- Reutilizar componentes y utilidades existentes antes de crear nuevos.
- Si introduces una nueva sección visual, debe verse bien en móvil, tablet y desktop.
- Si introduces animaciones, implementarlas preferentemente con Canvas y cuidando el rendimiento.
- Si defines estilos nuevos, mantener una apariencia clara, limpia y fácil de leer.
