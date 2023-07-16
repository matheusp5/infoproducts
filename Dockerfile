FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root2023
ENV MYSQL_DATABASE=infoproducts

COPY ./mysql/db.sql /docker-entrypoint-initdb.d/