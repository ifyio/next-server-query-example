import { Addon, ActionError } from 'next-server-query'
import { ZodError, ZodSchema } from 'zod'

export function ensureArgsMatch(schema: ZodSchema) {
  const addon: Addon = {
    execute: ({ action }) => {
      return async (...args: any[]) => {
        try {
          schema.parse(args[0])
          return await action(...args)
        } catch (error) {
          if (error instanceof ZodError) {
            throw new ActionError({
              message: 'The supplied args are invalid',
              type: 'validation',
              issues: error.issues,
            })
          }
        }
      }
    },
  }
  return addon
}
