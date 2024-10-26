export default defineNuxtRouteMiddleware((to) => {
  const id = to.params.id
  const intId = Number(id)
  if (!Number.isInteger(intId)) {
    return abortNavigation(createError({
      statusCode: 404,
      statusMessage: `Invalid id: it should be an integer, got \`${id}\` 😔. Please try something like \`42\``,
      fatal: true,
    }))
  }
})
