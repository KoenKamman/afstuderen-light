cd ./team-content/team-content-frontend
start /b npm run build:travel-shell:externals
start /b npm run build:travel-info:externals
cd ../../team-geo/team-geo-frontend
start /b npm run build:travel-map:externals
cd ../../team-suggest/team-suggest-frontend
start /b npm run build:travel-suggestions:externals
