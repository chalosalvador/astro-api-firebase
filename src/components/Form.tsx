import { useState } from "react"

export default function Form() {
  const [formResponse, setFormRes] = useState<Map<"POST" | "PUT", any>>(new Map())

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={async (e) => {
          e.preventDefault()

          const formData = new FormData(e.target as HTMLFormElement)

          const res = await fetch("/api", {
            method: "POST",
            body: formData,
          })

          const responseJson = await res.json()

          setFormRes(new Map([["POST", responseJson]]))
        }}
      >
        <input type="text" name="name" value="value" readOnly />

        <button type="submit">POST</button>

        <pre style={{ color: "white" }}>{JSON.stringify(formResponse.get("POST"), null, 2)}</pre>
      </form>

      <form
        encType="multipart/form-data"
        onSubmit={async (e) => {
          e.preventDefault()

          const formData = new FormData(e.target as HTMLFormElement)

          const res = await fetch("/api", {
            method: "PUT",
            body: formData,
          })

          const responseJson = await res.json()

          setFormRes(new Map([["PUT", responseJson]]))
        }}
      >
        <input type="text" name="name" value="value" readOnly />

        <button type="submit">PUT</button>

        <pre style={{ color: "white" }}>{JSON.stringify(formResponse.get("PUT"), null, 2)}</pre>
      </form>
    </>
  )
}
