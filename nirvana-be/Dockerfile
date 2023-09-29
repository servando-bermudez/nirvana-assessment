FROM node:18.15.0

WORKDIR /opt/app/nirvana-backend

COPY . /opt/app/nirvana-backend

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start:dev"]