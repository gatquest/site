FROM nginx
USER root
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
WORKDIR /client
COPY . .

RUN #chmod 777 /frontend

