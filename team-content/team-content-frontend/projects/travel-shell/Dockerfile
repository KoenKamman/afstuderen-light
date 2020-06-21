FROM node:12.18.1-alpine AS builder
COPY . ./team-content-frontend
WORKDIR /team-content-frontend
RUN npm ci
RUN npm run build:travel-shell:externals

FROM nginx:1.19.0-alpine
COPY --from=builder /team-content-frontend/dist/travel-shell/ /usr/share/nginx/html
