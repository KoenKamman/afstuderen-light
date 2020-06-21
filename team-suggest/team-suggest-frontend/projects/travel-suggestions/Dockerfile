FROM node:12.18.1-alpine AS builder
COPY . ./team-suggest-frontend
WORKDIR /team-suggest-frontend
RUN npm ci
RUN npm run build:travel-suggestions:externals

FROM nginx:1.19.0-alpine
COPY --from=builder /team-suggest-frontend/dist/travel-suggestions/ /usr/share/nginx/html
RUN rm -v /etc/nginx/nginx.conf
COPY ./projects/travel-suggestions/nginx.conf /etc/nginx/
