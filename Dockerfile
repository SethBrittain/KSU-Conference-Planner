# Stage 1 - Build React project
FROM node:18 as build-stage1

WORKDIR /client

COPY Frontend/package*.json ./

RUN npm install

COPY Frontend/ ./

RUN npm run build

# Stage 2 - Build ASP.NET project
FROM mcr.microsoft.com/dotnet/sdk:8.0 as build-stage-2

WORKDIR /server

COPY Backend/ ./

RUN dotnet restore

COPY --from=0 /client/build/ /wwwroot/

RUN dotnet publish . -c Release -o out

# Stage 3 - Copy React build to wwwroot of asp project
FROM ubuntu/dotnet-aspnet:6.0-22.04_beta as build-stage3

COPY --from=1 /server/out .

# Https traffic
ENV ASPNETCORE_URLS="http://+:80"

EXPOSE 80

# Run ASP.NET app
ENTRYPOINT ["dotnet", "conference-planner.dll"]
