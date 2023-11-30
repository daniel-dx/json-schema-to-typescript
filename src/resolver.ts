import $RefParser = require('@bcherny/json-schema-ref-parser')
import {JSONSchema} from './types/JSONSchema'
import {log} from './utils'

export type DereferencedPaths = WeakMap<$RefParser.JSONSchemaObject, string>

export async function dereference(
  schema: JSONSchema,
  {cwd, $refOptions}: {cwd: string; $refOptions: $RefParser.Options}
): Promise<{dereferencedPaths: DereferencedPaths; dereferencedSchema: JSONSchema}> {
  log('green', 'dereferencer', 'Dereferencing input schema:', cwd, schema)
  const parser = new $RefParser()
  const dereferencedPaths: DereferencedPaths = new WeakMap()
  let dereferencedSchema = undefined
  try {
    dereferencedSchema = (await parser.dereference(cwd, schema as any, {
      ...$refOptions,
      dereference: {
        ...$refOptions.dereference,
        onDereference($ref, schema) {
          dereferencedPaths.set(schema, $ref)
        }
      }
    })) as any // TODO: fix types
  } catch (e) {
    /**
     * FIXME: The following circular reference JSONSchema is not supported by json-schema-ref-parser, so temporarily set the node to any
     * {"type":"object","properties":{"checkedNodes":{"type":"array","items":{"$id":"Node","type":"object","properties":{"children":{"type":"array","items":{"$ref":"Node"}}}}}}}
     */
    console.warn(e)
    dereferencedSchema = JSON.parse(
      JSON.stringify(schema, (key, value) => {
        key
        if (value?.$ref) {
          // remote it to avoid exceptions
          delete value?.$ref
        }
        if (value?.$id) {
          // remove it to avoid generating independent interfaces
          delete value?.$id
        }
        return value
      })
    )
  }

  return {dereferencedPaths, dereferencedSchema}
}
