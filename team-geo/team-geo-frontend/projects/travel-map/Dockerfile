FROM node:12.18.1-alpine AS builder
COPY . ./team-geo-frontend
WORKDIR /team-geo-frontend
RUN npm ci
RUN npm run build:travel-map:externals

FROM nginx:1.19.0-alpine
COPY --from=builder /team-geo-frontend/dist/travel-map/ /usr/share/nginx/html
RUN rm -v /etc/nginx/nginx.conf
COPY ./projects/travel-map/nginx.conf /etc/nginx/
