docker compose down
docker volume rm ksu-conference-planner_postgres
docker build --file ./Dockerfile . -t sethbrittain/conferenceplanner:1.0.0
docker compose up -d
npm install @mui/material @emotion/react @emotion/styled
