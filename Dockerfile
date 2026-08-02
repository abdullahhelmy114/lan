FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
# استخدام الأمر المباشر للتأكد من استقبال الوسائط
CMD ["npx", "vite", "preview", "--port", "3000", "--host", "0.0.0.0"]