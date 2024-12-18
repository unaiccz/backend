# TeacherHub Database
## Api **Node** ***Mongodb***
## Todo:
-bbdd [x]
-Forms  [ ]

## Tabla: Apuntes

| Campo     | Tipo          | Descripción                          |
|-----------|---------------|--------------------------------------|
| id        | INT           | Identificador único                  |
| Asignatura| VARCHAR(100)  | Nombre de la asignatura              |
| Tema      | VARCHAR(100)  | Tema específico                      |
| Apuntes   | TEXT          | Contenido de los apuntes             |

## Tabla: Examenes

| Campo      | Tipo          | Descripción                          |
|------------|---------------|--------------------------------------|
| id         | INT           | Identificador único                  |
| Fecha      | DATE          | Fecha del examen                     |
| Asignatura | VARCHAR(100)  | Nombre de la asignatura              |
| Temas      | TEXT          | Temas que abarca el examen           |

## Tabla: Tareas

| Campo        | Tipo          | Descripción                          |
|--------------|---------------|--------------------------------------|
| id           | INT           | Identificador único                  |
| Asignatura   | VARCHAR(100)  | Nombre de la asignatura              |
| Tareas       | TEXT          | Descripción de la tarea              |
| FechaLimite  | DATE          | Fecha límite para completar la tarea |
| DatosInteres | TEXT          | Datos adicionales de interés         |


@unaiccz
