FROM node:18-bullseye-slim

LABEL maintainer="Anmol Agarwal <anmol17agarwal@gmail.com>"

WORKDIR /meeting-room-allotment/

WORKDIR /meeting-room-allotment/meeting_room_allotment_webui
COPY ./meeting_room_allotment_webui/package.json .
RUN npm install --location=project

WORKDIR /meeting-room-allotment/meeting_room_allotment_api
COPY ./meeting_room_allotment_api/package*.json .
RUN npm install --location=project

WORKDIR /meeting-room-allotment
