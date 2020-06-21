cd ./team-content/team-content-frontend
docker build --rm -t travel-shell-frontend:latest -f projects/travel-shell/Dockerfile .
docker build --rm -t travel-info-frontend:latest -f projects/travel-info/Dockerfile .
cd ../../team-geo/team-geo-frontend
docker build --rm -t travel-map-frontend:latest -f projects/travel-map/Dockerfile .
cd ../../team-suggest/team-suggest-frontend
docker build --rm -t travel-suggestions-frontend:latest -f projects/travel-suggestions/Dockerfile .
