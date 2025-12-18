<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# La Historia de Pol

Aplicación interactiva creada con React, TypeScript y Vite.

## 🚀 Ejecutar Localmente

**Prerequisitos:** Node.js 20+

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar API Key:**
   - Crea o edita el archivo `.env.local`
   - Añade tu clave de Gemini:
     ```
     GEMINI_API_KEY=tu_clave_aqui
     ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   La app estará disponible en `http://localhost:3000`

## 📁 Estructura de Imágenes

Las imágenes deben colocarse en la carpeta `public/images/`:
```
public/
  images/
    foto1.jpg
    foto2.png
```

Úsalas en tu código así:
```tsx
<img src="/images/foto1.jpg" alt="Descripción" />
```

## 🌐 Desplegar en GitHub Pages

### Configuración Inicial

1. **Ve a tu repositorio en GitHub**
2. **Settings → Pages**
3. **Source:** Selecciona "GitHub Actions"

4. **Configura el secreto de la API:**
   - Ve a **Settings → Secrets and variables → Actions**
   - Click en **New repository secret**
   - Name: `GEMINI_API_KEY`
   - Secret: Tu clave de Gemini API
   - Click **Add secret**

### Deploy Automático

Una vez configurado, cada push a la rama `main` desplegará automáticamente tu app.

**URL de tu app:** `https://gabrieloliveiracarballo-cmd.github.io/web-app-pol/`

### Deploy Manual (alternativa)

Si prefieres desplegar manualmente:

```bash
npm run build
```

Luego sube la carpeta `dist/` a tu hosting.
