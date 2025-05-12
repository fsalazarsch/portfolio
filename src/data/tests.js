
export const testList = 
{
    en:
    [
        {
            "image": "curso_c.png",
            "title": "De que corno trata el repo",
            "body": "<Empresa> - <Empresa secundaria si existe> ",
            "tecnologias": "Angular, Python ....",
            "content": {
                "detail": "Descripcion rápida",
                "secondDetail": "Segunda descripcion",
                "codes":[
                    {
                    "code": "Introduction to C",
                    "technologias": "5:04",
                    "code" : "https://github.com/fsalazarsch/cursos_nullpointerex/blob/master/C/holamundo.c",
                    "available": true
                    },
                    {
                    "name": "Variables",
                    "time": "7:03",
                    "code": "",
                    "available": false
                    },
                ]
            }
        },
        {
            "image": "man_file_extension.png",
            "title": "Como hacer una página .man",
            "body": "lorem dolor sit ame",
            "date": "2023-11-20",
            "content": {
                "detail": "En este mini-tutorial aprenderás a crear una página de manual<br>\
                 (.man) personalizada para cualquier programa o script que desarrolles, <br>\
                 sin importar el lenguaje. Esto no solo mejora la presentación de tu <br>\
                 herramienta, sino que también permite a otros usuarios acceder a su \
                 documentación desde la terminal con un simple man.",
                "playlistId" : "",

            }

        }
    ],

    es:
    [
        {
            "image": "curso_c.png",
            "title": "Simulacion de Protafolios de Inversión",
            "body": "Proyecto Django para modelar y simular la evolución de portafolios de inversión con múltiples activos. Incluye carga de datos desde Excel, API REST para consultar métricas financieras y visualizaciones gráficas. Permite simular operaciones y seguir buenas prácticas con estructura basada en Django Styleguide.",
            "company": "Abaqus",
            "technologies": "Django, Python",
            "content": {
                "detail": '<kbd> <a href="https://abaquscl.notion.site/Pregunta-t-cnica-d00b3f926b0845edaec7f198919c83d4">Prueba original</a></kbd>\
                <hr><h5> Pregunta técnica</h5>\
<h6>Definiciones</h6>\
Un <b>portafolio</b> de inversión está compuesto por una combinación de <b>N activos</b>. En cada instante de tiempo <b>t</b> el monto en dólares para el activo <b>>i</b> viene dado por la variable <i>x<sub>{i,t}</sub></i> y por tanto el valor total del portafolio en tiempo t V<sub>t</sub> es equivalente a:<br>\
<br>V<sub>t</sub> = ∑<sup>N</sup><sub>i=1</sub> x<sub>i,t</sub><br><br>\
El <b>precio</b> de cada activo en el tiempo viene dado por <i>p<sub>{i,t}</sub></i> y la <b>cantidad</b> de cada activo en el tiempo viene dado por <i>c<sub>{i,t}</sub></i> de forma tal que se cumple que: <br>\
<br> x<sub>{i,t}</sub> = p<sub>{i,t}</sub> * c<sub>{i,t}</sub><br>\
<br>\
A su vez se conoce como <b>weight</b> <i>w<sub>{i,t}</sub></i> de cada activo al % que representa este sobre el portafolio total. En otras palabras se cumple que: <br>\
<br> w<sub>i,t</sub> = (x<sub>i,t</sub>) / V<sub>t</sub> = (p<sub>i,t</sub> × c<sub>i,t</sub>) / V<sub>t</sub>\
<br><br>\
Considere un portafolio que tiene su inicio en <i>t = 0</i> con valor inicial <i>V<sub>0</sub></i>.La cantidad invertida por activo (<i>c<sub>{i,0}</sub></i>) se puede calcular usando las definiciones anteriores lo que da como resultado:<br>\
<br>\
C<sub>{i,0}</sub> = w<sub>{i,0}</sub> * V<sub>0</sub> / P<sub>{i,0}</sub><br>\
<br> En el siguiente archivo:<br>\
<a href= "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f2b5eb3-eab2-48c8-a7bd-9efdbd3d16a2/datos.xlsx">datos.xlsx</a><br>\
 Se encuentran dos sets de datos separados por hoja:<br>\
- <b>Weights:</b> valores para w<sub>{i,0}</sub> de dos portafolios (1 y 2 en las columnas C y D respectivamente) donde el tiempo <i>t=0</i> equivale al 15/2/22 e <i>i = 1, 2 ...,17</i> corresponde a cada uno de los 17 activos invertibles<br>\
- <b>Precios:</b> valores para P<sub>{i,t}</sub> donde cada columna corresponde a cada uno de los 17 activos y cada fila corresponde al tiempo  <i>t = 15/2/22,... 16/2/23</i><br>\
<br>\
<h6>Preguntas</h6>\
<br>\
1. Cree un proyecto en <b>Django</b> que permita modelar la definición anterior. Esto es, activos, portafolios, precios, cantidades, weights, montos  y cualquier otro elemento que estime conveniente. Considere que el proyecto  debe permitir responder las siguientes preguntas<br>\
2. Genere una función tipo ETL que permita leer y cargar los datos del archivo <b>datos.xlsx</b> a la base de datos correspondiente al proyecto django mencionado en el punto anterior<br>\
3. Considere que tanto el portafolio 1 como el portafolio 2 tienen un valor inicial al 15/02/22 (<i>V<sub>0</sub></i>) de $1,000,000,000. Calcule las cantidades iniciales (<i>C<sub>{i,0}</sub></i>) para cada uno de los 17 activos en cada uno de los 2 portafolios.<br>\
4. A partir del 15/02/22 los valores de las cantidades se mantienen invariantes, <i>C<sub>{i,t}</sub> = c<sub>{i,0}</sub></i>, y por tanto los valores de <i>x<sub>{i,t}</sub></i> ; <i>w<sub>{i,t}</sub></i> y <i>V<sub>t</sub></i> evolucionan debido a la variación en el tiempo de los precios <i>p<sub>{i,t}</sub></i> y las definiciones explicitadas en el inicio del documento. Genere endpoints tipo API rest que reciban los parametros <b>fecha_inicio</b> y <b>fecha_fin</b> y entregue los valores entre esas fechas para <i>w<sub>{i,t}</sub></i> y <i>V<sub>t</sub></i>. Se espera uso del ORM de django para obtener los datos necesarios para los cálculos<br>\
5. <b>Bonus 1:</b> Genere un <b>view</b> que utilice la API anterior donde se pueda comparar de manera gráfica la evolución en el tiempo de las variables <i>w<sub>{i,0}</sub></i> y <i>V<sub>t</sub></i>. Para <i>w<sub>{i,t}</sub></i> se recomienda un grafico tipo “stacked area” y para <i>V<sub>t</sub></i> gráficos de linea.<br>\
6. <b>Bonus 2:</b> Considere ahora la creación de un metodo que permita procesar compra ventas de activos. La anterior debe permitir procesar que el día 15/05/2022 se realiza una operación de compra y venta, donde se venden $200,000,000 del activo EEUU y se compran $200.000.000 de Europa en el portafolio 1. Calcule el nuevo historial de  <i>c<sub>{i,t}</sub> ; x<sub>{i,t}</sub> ; w<sub>{i,t}</sub></i> y <i>V<sub>t</sub></i><br>\
7. <b>Bonus:</b> Estructurar el proyecto de Django siguiendo la siguiente guía de estilos: <a href="https://github.com/HackSoftware/Django-Styleguide">Django-Styleguide</a>."',
                "secondDetail": "Segunda descripcion",
                "codes":[
                    {
                    "title": "Implementacion Original (Django, Python)",
                    "code" : "https://bitbucket.org/fsalazarsch/abaqus-django/",
                    "available": true
                    },
                    {
                    "title": "Implmententacion en Laravel, PHP",
                    "code": "",
                    "available": false
                    },
                ]
            }
        },
    ]
}