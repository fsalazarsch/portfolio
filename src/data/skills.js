/*
•	Python (5)
escripción	Nivel de Experticia (1 al 5)
Lenguajes de Programación 	•	Python (5)
•	Java (5)
•	TS/JS (5)
•	PHP(5)
•	Kotlin (4)
•	C#(3)
•	Golang(2)
Base de Datos	•	Oracle 5
•	SQL Server 5
•	MySQL 5
•	SQLite 4
•	PortgreSQL 5
•	MongoDB 4
•	Redis
Frameworks	•	 PHP: Codeigniter 5, Slim 5, Laravel 5, ZendPHP 3, Cake 3, Yii/Yii_2 (5), Lumin 4
•	JS/TS: Angular 5, React 3, Vue 4
Plataforma Cloud	•	AWS (3)
•	GCP (1)
Sistemas Operativos 	•	UBUNTU Server (5)
•	RH /Fedora Workstation (5)
•	CentOs (4)
•	Android
Pruebas/ QA	•	Karma / Jasmine (4)

•	Pytest (5)
•	PHPTest (2)
Seguridad	•	Ethical hacking (2)
•	Pentest (2)
Gestión de Configuración	•	Maven 5
•	Gradle 5
•	PIP 5
•	Git 5
Gestión de Almacenamiento	•	Docker 4
•	Kubernetes 3

*/ 


export const skillsData = 
    
    {
      en : [
        {
          icon: ["devicon-python-plain", "devicon-django-plain colored", "devicon-flask-original colored", "devicon-fastapi-plain colored", "devicon-pytest-plain colored"],
          title: "Python",
          detail: "<table><tr><td>Django</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>Flask</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>FastAPI</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>CherryPy</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>PyTest</td><td>🟩🟩🟩🟩🟩</td></tr></table>",
        }, //•	Python (7)•	Django, Flask, Cherrypy, FastAPI &#9724; 🟩 🟨 ⬜
        {
          icon: ["devicon-java-plain", "devicon-spring-original colored", "devicon-junit-plain colored"],
          title: "Java",
          detail: "<table><tr><td>SpringBoot</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Play</td><td>🟩🟩⬜⬜⬜</td></tr>\
          <tr><td>JUnit</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>Mockito</td><td>🟩🟩🟩🟨⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-javascript-plain colored", "devicon-express-original colored", "devicon-nodejs-plain-wordmark", "fab fa-react","devicon-jasmine-original colored"],
          title: "Javascript",
          detail: "<table><tr><td>NodeJs</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Express</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>Jasmine</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>React</td><td>🟩🟩🟩🟨⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-typescript-plain colored", "fab fa-angular","devicon-karma-plain colored", "devicon-vuejs-plain colored"],
          title: "Typescript",
          detail: "<table><tr><td>NodeJs</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Angular</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Kharma</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>VueJS</td><td>🟩🟩🟨⬜⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-androidstudio-plain colored", "devicon-kotlin-plain colored", "devicon-flutter-plain colored"],
          title: "Android",
          detail: "<table><tr><td>Kotlin</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Flutter</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Ionic</td><td>🟩🟩🟩🟩⬜</td></tr>\
          <tr><td>Jetpack Compose</td><td>🟩🟩🟩🟨⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-php-plain colored", "devicon-laravel-original colored", "devicon-codeigniter-plain colored", "devicon-yii-plain colored", "devicon-zend-original colored" ], //poner cake "devicon-cakephp-plain colored",
          title: "PHP",
          detail: "<table><tr><td>Laravel</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Codeigniter</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Yii/Yii2</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Zend</td><td>🟩🟩⬜⬜⬜</td></tr>\
          <tr><td>SlimPHP</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>TestPHP</td><td>🟩🟩🟩🟩⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-html5-plain colored", "devicon-css3-plain colored", "devicon-bootstrap-plain colored", "devicon-tailwindcss-original colored", "devicon-bower-plain colored"],
          title: "HTML/CSS",
          detail: "<table><tr><td>HTML</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>CSS</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>Bootstrap</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>Tailwind</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Bower</td><td>🟩🟩🟩🟨⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-dotnetcore-plain colored","devicon-csharp-plain colored", "devicon-xamarin-original colored"],
          title: ".NET",
          detail: "<table><tr><td>HTML</td><td>🟩🟩🟩⬜⬜</td></tr>\
          <tr><td>C#</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>Entity Framework</td><td>🟩🟩🟩⬜⬜</td></tr>\
          <tr><td>XUnit</td><td>🟩🟩🟩⬜⬜</td></tr>\
          <tr><td>Xamarin</td><td>🟩🟨⬜⬜⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-git-plain colored", "devicon-bash-plain colored", "devicon-docker-plain colored", "devicon-jenkins-line"],
          title: "Other",
          detail: "<table><tr><td>GIT</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>Bash</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>Docker</td><td>🟩🟩🟩⬜⬜</td></tr>\
          <tr><td>Jenkins</td><td>🟩🟩🟩⬜⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-oracle-original colored", "devicon-microsoftsqlserver-plain colored", "devicon-mysql-original colored", "devicon-postgresql-plain colored", "devicon-sqlite-plain colored"],
          title: "SQL",
          detail: "<table><tr><td>Oracle DB</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>MSSQL</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>MySQL</td><td>🟩🟩🟩🟩🟩</td></tr>\
          <tr><td>PostgreSQL</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>SQLite</td><td>🟩🟩🟩🟩⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-mongodb-plain colored", "devicon-redis-plain colored"],
          title: "No-SQL",
          detail: "<table><tr><td>Mongo DB</td><td>🟩🟩🟩🟩🟨</td></tr>\
          <tr><td>Redis</td><td>🟩🟩🟨⬜⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-amazonwebservices-plain-wordmark colored","devicon-googlecloud-plain colored"],
          title: "Cloud",
          detail: "<table><tr><td>AWS</td><td>🟩🟩🟩🟨⬜</td></tr>\
          <tr><td>GCP</td><td>🟩🟨⬜⬜⬜</td></tr>\
          </table>",
        },
        {
          icon: ["devicon-c-plain colored", "devicon-arduino-plain colored", "devicon-ruby-plain colored", "devicon-rails-plain colored"],
          title: "Tech Trials",
          detail: "<table><tr><td>C</td><td>🟩🟩🟩⬜⬜</td></tr>\
          <tr><td>Arduino</td><td>🟩🟩⬜⬜⬜</td></tr>\
          <tr><td>Ruby</td><td>🟩🟩🟨⬜⬜</td></tr>\
          <tr><td>RoR</td><td>🟩🟩⬜⬜⬜</td></tr>\
          </table>",
        },


      ],
    };
  