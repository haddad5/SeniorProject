FROM tomcat
WORKDIR /home
RUN ls
RUN apt-get update
RUN apt-get install -y npm
RUN npm install --global react-scripts
COPY frontend/package.json /home
RUN npm install
COPY frontend/public public
COPY frontend/src src
COPY backend/build/backend.war /usr/local/tomcat/webapps/camping.war
COPY backend/camping.db camping.db
CMD  catalina.sh start; npm start
