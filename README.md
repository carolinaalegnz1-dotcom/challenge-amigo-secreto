# challenge-amigo-secreto
Este proyecto es una aplicación web simple para organizar sorteos de "Amigo Secreto" entre amigos. Permite agregar nombres a una lista, validar que no haya duplicados y sortear un amigo de manera aleatoria.

## Tabla de Contenidos

*   [Descripción](#descripción)
*   [Instalación](#instalación)
*   [Uso](#uso)
*   [Dependencias](#dependencias)
*   [Posibles Problemas y Soluciones](#posibles-problemas-y-soluciones)
*   [Créditos](#créditos)

## Descripción

La aplicación "Amigo Secreto" permite a los usuarios:

*   Agregar nombres de amigos a una lista.
*   Validar que no se agreguen nombres duplicados.
*   Sortear un amigo de manera aleatoria de la lista.
*   Mostrar el resultado del sorteo en la página.

## Instalación

1.  Clona este repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2.  Abre el archivo `index.html` en tu navegador web.

## Uso

1.  Abre el archivo `index.html` en tu navegador web.
2.  Ingresa el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir".
3.  Repite el paso anterior para agregar todos los amigos que desees.
4.  Haz clic en el botón "Sortear amigo" para seleccionar un amigo al azar.
5.  El resultado del sorteo se mostrará en la página.

## Dependencias

Este proyecto no tiene dependencias externas. Solo requiere un navegador web moderno que soporte JavaScript.

## Posibles Problemas y Soluciones

*   **Problema:** El sorteo no funciona.

    *   **Solución:** Asegúrate de haber agregado al menos un nombre a la lista antes de hacer clic en el botón "Sortear amigo".

*   **Problema:** Se agregan nombres duplicados a la lista.

    *   **Solución:** La aplicación está diseñada para evitar que se agreguen nombres duplicados. Si esto ocurre, verifica que no haya errores en el código JavaScript.

*   **Problema:** La lista de amigos no se muestra al cargar la página.

    *   **Solución:** Asegúrate de que el archivo `app.js` esté correctamente vinculado en el archivo `index.html` y que el código JavaScript se esté ejecutando correctamente.

## Créditos

Este proyecto fue creado por Carolina Alejandra Gonzalez.
