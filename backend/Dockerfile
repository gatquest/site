FROM python:3.9-alpine

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

COPY . .

RUN mkdir /backend/mediafiles

#RUN apk add --update --no-cache --virtual .tmp-build-deps \
#        gcc libc-dev linux-headers postgresql-dev && \
#    pip install --no-cache-dir -r requirements.txt \

RUN pip install --no-cache-dir -r requirements.txt

RUN python manage.py migrate --no-input
RUN python manage.py makemigrations --no-input
RUN python manage.py collectstatic --no-input
