import { useState } from "react"

export default function AddUser() {
    const [user, setUser] = useState({
        name: "Mona",
        email: "hello@gmail.com"
    })

    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null
    })

    const handleChange = (event) => {
        if (event.target.name === "name") {
            setUser({ ...user, name: event.target.value })
        } else if (event.target.name === "email") {
            setUser({ ...user, email: event.target.value })
        }

        if (event.target.name === "name") {
            setErrors({
                ...errors,
                nameError: (event.target.value.lenght === 0)
                    ? "This field is required"
                    : (event.target.value.lenght > 10)
                        ? "Charachres is required"
                        : null
            })
        }
    }


    return (
        <>
            <div className="mb-3">
                <label className="form-label" htmlFor="fromGroupExampleInput">
                    Name
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.nameError ? "border-danger" : ""}`} placeholder="Enter your name"
                    value={user.name}
                    name="name"
                    onChange={(e) => { handleChange(e) }}
                />
                <small className="text-danger">{errors.nameError}</small>
            </div>
            <div className="mb-3">
                <label htmlFor="fromGroupExampleInput" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                    value={user.email}
                    name="email"
                    onChange={(e) => { handleChange(e) }}
                />
            </div>
        </>
    )
}

