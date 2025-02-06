export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skCcPnG8QggiXTqCvhAtP0FO71v6W1mQKp1uH1Ylq2CLWQmbmCY4b4M646QmzZJpkcwmnFw3Cvh1IA3DzUBBQu4pY7AQim30stCNApzaqWzmX2mmXkumCV3Kl9c3nxYxeKq3qlBhCDQpOqlbMoGXc41ZbPGWHKbg3goD5ChIhHCIRAw4iM0C",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
