FROM node:20
WORKDIR /data
RUN git clone -q https://github.com/alexeymorin/shoppinglist.git /data/shoppinglist
WORKDIR /data/shoppinglist
RUN npm install > /dev/null
EXPOSE 3000
CMD ["npm", "start"]
