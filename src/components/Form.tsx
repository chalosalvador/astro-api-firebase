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
				<label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value="value" />

				{/* Lastname */}
				<label htmlFor="lastname">Lastname</label>
				<input type="text" name="lastname" id="lastname" value="value" />

				{/* Email */}
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" value="value@gmail.com" />
				
				{/* City */}
				<label htmlFor="city">City</label>
				<select name="city" id="city">
					<option value="1">New York</option>
					<option value="2">Los Angeles</option>
					<option value="3">Chicago</option>
				</select>

				{/* Message */}
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message">Message</textarea>


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
