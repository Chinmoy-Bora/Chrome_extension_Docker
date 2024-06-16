
FROM node:16-alpine




# Copy package files and install dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

# Copy the rest of the application files
COPY index.js index.js

# Expose the necessary port
EXPOSE 8000

# Start the Node.js application
CMD ["node", "index.js"]
