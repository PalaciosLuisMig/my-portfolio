---
title: "Link in Bio con Kiro"
description: "App Link in Bio con métricas en vivo, construida con Kiro y desarrollo guiado por especificaciones, desplegada en AWS con CDK."
pubDate: "Nov 14 2026"
important: true
badge: "SDD"
heroImage: "/projects/kiro-link-in-bio.webp"
github: "https://github.com/PalaciosLuisMig/kiro-link-in-bio"
# website: ""
tags: ["Front-end","Back-end","Serverless","IA","AWS","Kiro","Lambda","SDD","Cloud"]
skills: [{"logo":"amazonwebservices","name":"Kiro"},{"logo":"typescript","name":"TypeScript"},{"logo":"nodedotjs","name":"Node.js"},{"logo":"amazonwebservices","name":"AWS"},{"logo":"awslambda","name":"Lambda"},{"logo":"amazondynamodb","name":"DynamoDB"},{"logo":"amazons3","name":"S3"},{"logo":"vitest","name":"Vitest"},{"logo":"git","name":"Git"},{"logo":"github","name":"GitHub"}]
---

Proyecto que construí como demo para mi charla **"Menos vibe coding, más specs"** en el **AWS Student Community Day Cuenca 2026**. El objetivo: mostrar cómo pasar de "prompt y a ver qué sale" a construir software con intención, trazabilidad y calidad usando **Kiro** y **desarrollo guiado por especificaciones (SDD)**.

📝 **<a href="/blog/aws-student-community-day-cuenca-2026-menos-vibe-coding-mas-specs">Leer el resumen de la charla</a>**

## 🚀 Acerca del proyecto

Una página pública de enlaces (*Link in Bio*), pensada para móvil, con un panel privado para el propietario que muestra las métricas en tiempo real. Es un proyecto pequeño pero completo: frontend, backend, tiempo real, infraestructura como código y pruebas de carga, suficiente para recorrer todas las fases del SDD sin perderse.

- **Página pública:** lista de enlaces, mobile first y muy liviana (5,2 KB comprimida, con un límite de 30 KB).
- **Panel del propietario:** clics y visitas totales, clics por minuto, canales de origen (`?src=`), feed de actividad y gestión de enlaces (crear, editar, ordenar, activar y desactivar, hasta 10 enlaces).
- **Tiempo real:** el panel se actualiza solo por WebSocket, con un máximo de un mensaje por segundo.
- **Privacidad por construcción:** sin IPs ni cookies. El token de acceso nunca se escribe en logs ni viaja en una URL.

## 🧭 Cómo se construyó: SDD con Kiro

Todo el trabajo se guió con specs que viven en el repositorio (`.kiro/`), versionadas y revisables en un PR como el código:

- **Steering** (`.kiro/steering/`): `product.md`, `tech.md` y `structure.md` con la visión, el stack y las convenciones.
- **Specs** (`.kiro/specs/`): requisitos, diseño y tareas que Kiro genera y ejecuta, con puntos de control humanos en cada paso.
- **Hooks** (`.kiro/hooks/`): al guardar un archivo `.ts` se ejecutan `npm run lint` y `npm test`.

El nivel de SDD aplicado es *spec-anchored*: la spec no se descarta al terminar, se mantiene y evoluciona con el código.

## 🪜 6 fases, 6 ramas

| Fase | Rama | Qué se hizo |
|---|---|---|
| 0 · Steering | `fase-0-steering` | Contexto permanente: producto, stack y convenciones. |
| 1 · Requirements | `fase-1-requirements` | 17 requisitos verificables escritos con EARS. |
| 2 · Design | `fase-2-design` | Arquitectura, 17 decisiones documentadas y 18 propiedades de corrección. |
| 3 · Tasks | `fase-3-tasks` | Plan de 17 tareas de dentro hacia fuera, cada una citando sus requisitos. |
| 4 · Implementation | `fase-4-implementacion` | Tarea a tarea, con un commit por tarea y tests. |
| 5 · Deployment | `fase-5-deployment` | Despliegue en AWS con CDK y prueba de carga. |

Cada rama contiene la fase ya completada, así que puedes replicar cualquiera partiendo de la anterior. Cada una tiene su guía en `docs/` con "Cómo reproducir esta fase".

## 🏗️ Arquitectura

Todo vive en un único stack de **AWS CDK** en `us-east-1`, con 74 recursos y pago por uso:

- **CloudFront** como única entrada pública (web y API en el mismo dominio, sin CORS) sobre un **S3 privado** al que solo accede CloudFront (OAC).
- **API Gateway HTTP** para la API y **API Gateway WebSocket** para el tiempo real.
- **4 funciones Lambda** con permisos mínimos: `public-api`, `admin-api`, `notify-panel` y el manejador del WebSocket.
- **DynamoDB** con tabla única y TTL. Cada clic es un único `UpdateItem` con `ADD` atómico que suma todos los contadores.
- **DynamoDB Streams** avisa a `notify-panel`, que envía la instantánea actualizada al panel.
- **SSM Parameter Store** guarda el token del propietario. El WebSocket se abre con un ticket de un solo uso de 60 segundos.

El código sigue una **arquitectura hexagonal**: el dominio (contar clics, normalizar canales, validar enlaces) no depende de AWS, por lo que sus tests corren en milisegundos y sin cuenta de AWS.

## ✅ Calidad y resultados

- **812 tests** en 50 archivos, incluyendo *property-based testing* con fast-check (por ejemplo, normalizar un canal dos veces da lo mismo que una).
- **Mutación manual:** rompí el código a propósito para comprobar que algún test fallaba, y así aparecieron tests débiles que se corrigieron.
- **Prueba de carga:** 500 clics en 10 segundos. Resultado: **500/500 clics confirmados**, con sumas exactas por canal (qr 250 · instagram 125 · tiktok 125).
- **Rendimiento:** p95 de **221 ms** en la respuesta (requisito: menos de 1 s) y **762 ms** del clic al panel (requisito: menos de 3 s).
- Cada número se verifica contra un criterio EARS concreto, por ejemplo 12.1, 12.4 u 8.1.

## 🎤 Demo en vivo

Durante la charla el público escaneó códigos QR desde sus celulares, uno por canal, y vio subir los contadores del panel en tiempo real.

## 🔁 Cómo replicarlo

```bash
# Ejemplo: replicar la fase 2
git clone https://github.com/PalaciosLuisMig/kiro-link-in-bio.git
git switch -c fase-2-design origin/fase-1-requirements
# ...trabaja con Kiro...
git diff fase-2-design origin/fase-2-design -- .kiro/
```

Para desplegar: `npx cdk diff` para revisar, `npx cdk deploy` para crear el stack, `npm run smoke` para comprobar que responde y `npx cdk destroy` para borrar todo al terminar.
