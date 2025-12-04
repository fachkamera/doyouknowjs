import { createGroqBuilder, makeSafeQueryRunner } from 'groqd'
import { sanityClient } from './sanityClient'
import type * as SanityTypes from '../data/sanity.types.ts'

export const runQuery = makeSafeQueryRunner((query) =>
  sanityClient.fetch(
    query,
    {},
    {
      next: {
        revalidate: 86400,
      },
    },
  ),
)

type SchemaConfig = {
  schemaTypes: SanityTypes.AllSanitySchemaTypes
  referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo
}
export const q = createGroqBuilder<SchemaConfig>({})
