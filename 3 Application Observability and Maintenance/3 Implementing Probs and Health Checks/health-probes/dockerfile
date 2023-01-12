FROM mcr.microsoft.com/dotnet/aspnet AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk AS build
ENV ASPNETCORE_ENVIRONMENT=Production
WORKDIR /src
COPY health-probes.csproj .
RUN dotnet restore health-probes.csproj
COPY . .
RUN dotnet build health-probes.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish health-probes.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
RUN apt-get update \
    && apt-get install -y curl
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "health-probes.dll"]```