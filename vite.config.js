import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ITVIEC/', // 🔥 Thay "your-repo-name" bằng tên repo GitHub của bạn

})
