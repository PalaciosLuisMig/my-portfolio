---
title: "Increíbles extensiones para Visual Studio Code | Parte 1"
description: "Te presento 3 extensiones imprescindibles para Visual Studio Code que mejorarán tu experiencia de desarrollo :) "
pubDate: "Mar 17 2024"
updatedDate: "Mar 17 2024"
heroImage: "/blogs/extensiones-vscode-p1.webp"
badge: "Visual Studio Code"
tags: ["Extrensiones","Productividad", "IntelliCode","Console Ninja","SonarLint"]
url: "extensiones-vscode-parte-1"
---
A continuación se presentan tres increíbles extensiones para Visual Studio Code.

# 1. IntelliCode

<div class="flex flex-col items-start">
    <img src="https://visualstudioexptteam.gallerycdn.vsassets.io/extensions/visualstudioexptteam/vscodeintellicode/1.3.1/1710471924319/Microsoft.VisualStudio.Services.Icons.Default" height="100" width="100" alt="Logo de IntelliCode" class="mb-0"/>
    <a href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode"  class="btn btn-link p-0 hover:scale-105" target="_blank">Descargar IntelliCode</a>
</div>

La extensión Visual Studio IntelliCode proporciona funciones de desarrollo asistidas por IA para desarrolladores de Python, TypeScript/JavaScript y Java en Visual Studio Code, con información basada en la comprensión del contexto de su código combinada con el aprendizaje automático.

* **Autocompletado de líneas completas:** IntelliCode puede predecir hasta una línea completa de código basada en el contexto actual para Python, JavaScript y TypeScript, lo que facilita y acelera la escritura de código.
* **Ejemplos de uso de API:** La función IntelliCode API Usage Examples permite acceder a ejemplos de más de 100,000 API diferentes con solo un clic, ayudando a comprender cómo otros desarrolladores han utilizado una función específica en proyectos reales.
* **Recomendaciones de IntelliSense mejoradas por IA:** IntelliCode proporciona recomendaciones mejoradas de IntelliSense mostrando elementos de completado recomendados en la parte superior de la lista, basados en el contexto de tu código y prácticas desarrolladas en proyectos de alta calidad en GitHub.

Para comenzar a utilizar la extensión, se requiere Visual Studio Code October 2018 Release <code>1.29.1 o posterior</code> . Las instrucciones específicas para cada lenguaje de programación son proporcionadas en la sección "Getting Started" de la extensión.

En resumen, Visual Studio IntelliCode mejora significativamente la productividad y la experiencia de desarrollo en Visual Studio Code, ofreciendo herramientas avanzadas impulsadas por inteligencia artificial. ¡Descubre cómo esta extensión puede llevar tu desarrollo al siguiente nivel!

# 2. Console Ninja

<div class="flex flex-col items-start">
    <img src="https://wallabyjs.gallerycdn.vsassets.io/extensions/wallabyjs/console-ninja/1.0.291/1710555190196/Microsoft.VisualStudio.Services.Icons.Default" height="100" width="100" alt="Logo de IntelliCode" class="mb-0"/>
    <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja"  class="btn btn-link p-0 hover:scale-105" target="_blank">Descargar IntelliCode</a>
</div>

Console Ninja es una extensión de VS Code que muestra la salida de <code>console.log</code> y los errores de tiempo de ejecución directamente en su editor desde su navegador o aplicación de nodo en ejecución. Es como la pestaña de la consola de herramientas de desarrollo de su navegador o la salida de terminal de su aplicación de nodo, pero en lugar de tener que cambiar de contexto, los valores se conectan a su código y se muestran ergonómicamente en su editor.

Ofrece dos conjuntos de funciones: **Community** y **PRO**. La versión Community es gratuita y ofrece características esenciales como mostrar la salida de console.log y los errores de tiempo de ejecución en el editor, así como ver todos los registros y errores en el visor de registros. Por otro lado, la versión PRO (de pago) incluye todas las funciones de Community y muchas características avanzadas adicionales.

Las **tecnologías compatibles** con Console Ninja incluyen Vite, Webpack, Next.js, Nest.js, Remix, Nuxt, Astro, Shopify Hydrogen, Qwik, Serverless Offline, Jest, Cypress.io, http-server, live-server y las extensiones Live Server y Live Preview de VS Code.

Para empezar, simplemente instala la extensión en VS Code, abre tu proyecto y ejecuta los comandos habituales para iniciar tu aplicación en modo de desarrollo. Console Ninja se **integra de manera transparente** y te permite ver las salidas de console.log y errores directamente en tu editor.

Las funciones incluyen son:
* **console.log**
* **console.trace**
* **console.time**
* **tooltip de información al pasar el cursor**
* **visor de registros**, y mucho más. 


# 3. SonarLint

<div class="flex flex-col items-start">
    <img src="https://sonarsource.gallerycdn.vsassets.io/extensions/sonarsource/sonarlint-vscode/4.4.1/1710260170386/Microsoft.VisualStudio.Services.Icons.Default" height="100" width="100" alt="Logo de IntelliCode" class="mb-0"/>
    <a href="https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode"  class="btn btn-link p-0 hover:scale-105" target="_blank">Descargar SonarLint</a>
</div>

SonarLint de Sonar es una extensión IDE gratuita que le permite **solucionar problemas de codificación antes de que existan**. Más que un linter, SonarLint detecta y resalta problemas que pueden provocar errores, vulnerabilidades y code smells "olores de código" a medida que crea su código. Ofrece una guía de solución clara y ayuda educativa, para que pueda solucionar problemas antes de que se confirme el código. Fuera de la caja, SonarLint en VS Code admite el análisis de código JS/TS, Python, PHP, Java, C, C++, C#, Go e IaC localmente en su IDE.

De forma predeterminada, SonarLint para VSCode analiza los archivos abiertos en el IDE. Cuando se combina con **SonarQube** o **SonarCloud** en modo conectado, SonarLint forma una potente plataforma de calidad de código de extremo a extremo para enriquecer el proceso de **CI/CD**, garantizando que cualquier edición o adición de código en todo el proyecto esté limpia. En el modo conectado, su equipo puede compartir conjuntos de reglas de lenguaje comunes, configuraciones de análisis de proyectos y más.

**¿Cómo funciona?**

Simplemente abra cualquier archivo fuente, comience a codificar y comenzará a ver los problemas informados por SonarLint. Los problemas se resaltan en su código y también se enumeran en el panel "Problemas".

Puede acceder a la descripción detallada de la regla directamente desde su editor, utilizando el menú contextual proporcionado.

Mire el <a href="https://www.youtube.com/embed/m8sAdYCIWhY?si=2lIYld-rrvaRlyvb"  class="btn btn-link p-0 hover:scale-105" target="_blank">vídeo</a> de SonarLint para VSCode para explorar las funciones de SonarLint.


## Reglas de análisis estático

SonarLint verifica automáticamente su código con las siguientes reglas:

* Reglas del Administrador de recursos de Azure
* Reglas C
* Reglas de C++
* Reglas de C#
* Reglas de formación de la nube
* Reglas CSS
* Reglas Docker
* Reglas Go
* Reglas HTML
* Reglas Java
* Reglas JavaScript
* Reglas Kubernetes
* Reglas Python y IPython
* Reglas PHP
* Reglas secrteas
* Reglas de TypeScript

La lista completa de idiomas y reglas admitidos está disponible en la <a href="https://docs.sonarsource.com/sonarlint/vs-code/using-sonarlint/rules/"  class="btn btn-link p-0 hover:scale-105" target="_blank">documentación oficial</a>.
