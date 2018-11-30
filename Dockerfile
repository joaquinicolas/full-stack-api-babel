FROM node as builder

WORKDIR /app

COPY . .

# Build project
RUN npm install
RUN npm test
RUN npm run build

# Release stage
FROM node:alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY --from=builder /app/ .

# Instll dep
RUN npm install

# copy dist
COPY --from=builder /app/dist ./dist/

ENV PORT=8080

EXPOSE ${PORT}

CMD [ "node", "dist/server/index.js"]