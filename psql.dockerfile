FROM postgres:latest
ENV POSTGRES_PASSWORD=nodejs
EXPOSE 5432
#COPY init.db.sh /tmp/
