FROM golang:1.14.4-alpine3.12

ARG PORT
ARG LOG
ARG DB_URL
ARG KEY

ENV BANK_BIND_ADDR=$PORT
ENV BANK_LOG_LEVEL=$LOG
ENV BANK_DATABASE_URL=$DB_URL
ENV BANK_SESSION_KEY=$KEY


RUN mkdir -p app


ADD . /app

WORKDIR /app

RUN go build main.go

EXPOSE 8040


CMD /app/main
