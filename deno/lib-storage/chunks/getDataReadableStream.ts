import { Buffer } from "https://deno.land/std@0.119.0/node/buffer.ts";
import { Buffer } from "https://deno.land/std@0.119.0/node/buffer.ts";

export async function* getDataReadableStream(data: ReadableStream): AsyncGenerator<Buffer> {
  // Get a lock on the stream.
  const reader = data.getReader();

  try {
    while (true) {
      // Read from the stream.
      const { done, value } = await reader.read();
      // Exit if we're done.
      if (done) return;
      // Else yield the chunk.
      yield Buffer.from(value);
    }
  } catch (e) {
    throw e;
  } finally {
    // release the lock for reading from this stream.
    reader.releaseLock();
  }
}
