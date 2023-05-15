# Translatr

1. Crear un nuevo proyecto con el comando: `yarn create next-app` (Elegir Typescript, Tailwind CSS)
2. Crear los componentes basado en el Wireframe: https://whimsical.com/translatr-3UbwyTE9u6DZEeD4yJ21Yn
3. Crear `utils/debounce.ts`
4. Crear `hooks/useTranslator.ts`
5. Actualizar el `pages/index.tsx` para usar `useTranslator`
6. Actualizar `components/Textarea.tsx`
7. Crear `hooks/useDebounce.ts`
8. Crear la variable `characterCount` y actualizar el `components/Label.tsx` y `utils/constants.ts` para definir la constante `MAX_COUNT` y `DEFAULT_LANGUAGE_TO_TRANSLATE`
9. Crear `.env.local` y establecer el valor de `OPENAI_API_KEY`
10. Revisar la documentación de **Chat completion**: https://platform.openai.com/docs/guides/chat/instructing-chat-models
11. Abrir el playground: https://platform.openai.com/playground/p/default-chat?mode=chat (Asegurar seleccionar el modo Chat).
12. Instalar `yarn add openai`
13. Crear el archivo `pages/api/translate.ts`
14. Crear el archivo `helpers/buildMessages.ts`
15. Crear un cache en memoria.

## Testing con Vitest
16. Instalar las dependencias `yarn add -D vitest @testing-library/react jsdom @vitejs/plugin-react` y configurar el archivo `vitest.config.ts`
17. Crear tests para el componente `Label.tsx`
18. Crear tests para el componente `Textarea.tsx`
19. Crear tests para el page `index.tsx`, instalar dependencias `yarn add -D vite-tsconfig-paths`y actualizar `vitest.config.ts`
20. Habilitar el coverage, instalar dependencia `@vitest/coverage-c8`
21. Crear tests para el archivo de `constants.ts`
22. Crear tests para el archivo `debounce.ts`
23. Crear tests para el archivo `useTranslator.ts`
24. Crear la primera página dummy `app/translate/[from]/page.tsx`
25. Crear el root layout `app/layout.tsx`
26. Crear la implementación de `[from]/page.tsx`
27. Crear la implementación de `[from]/[to]/page.tsx` y `OutputArea.tsx`
28. Implementar el `isSelected` del Tab.
29. Implementar rutas paralelas.
30. Implementar solución "final".