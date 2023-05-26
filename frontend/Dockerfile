FROM nginx:1.21-alpine

COPY frontend/build /usr/share/nginx/html

# # Add the Node.js Alpine repository and install Node.js
# RUN apk add --update nodejs npm

# WORKDIR /app

# COPY frontend ./

# RUN npm install && \
#     npm run build && \
#     cp -R build/* /usr/share/nginx/html/ && \
#     rm -rf /app

# # Remove Node.js and clean up
# RUN apk del nodejs npm && rm -rf /var/cache/apk/*