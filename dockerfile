# Use official Alpine-based Nginx image
FROM nginx:1.25-alpine

# Set environment variables
ENV NGINX_ENVSUBST_TEMPLATE_DIR=/etc/nginx/templates \
    NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d

# Install security updates and tools
RUN apk update && \
    apk upgrade --no-cache && \
    apk add --no-cache bash openssl && \
    rm -rf /var/cache/apk/*

# Create non-root user
RUN adduser -D -u 1000 -g 'www' www-user && \
    chown -R www-user:www-user /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx

RUN mkdir -p /var/run && chown -R www-user:www-user /var/run

# Set the working directory in the container to /portfolio-app
WORKDIR /portfolio-app

# Copy the portfolio-app.html file into the container
COPY portfolio-app.html /usr/share/nginx/html/index.html

# Remove default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY security-headers.conf /etc/nginx/security-headers.conf

# Set permissions
RUN chown -R www-user:www-user /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER www-user

# Expose port
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
