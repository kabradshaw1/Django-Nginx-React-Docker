FROM python:3.11-alpine3.17

ENV PYTHONUNBUFFERED 1
COPY . .
WORKDIR /django

RUN python -m venv /py && \
  /py/bin/pip install --upgrade pip && \
  apk add --update --no-cache postgresql-client jpeg-dev && \
  apk add --update --no-cache --virtual .tmp-build-deps \
      build-base postgresql-dev musl-dev zlib zlib-dev linux-headers && \
  /py/bin/pip install -r /requirements.txt

VOLUME /backend/static

