# Use official nginx image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files to nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx will automatically start
