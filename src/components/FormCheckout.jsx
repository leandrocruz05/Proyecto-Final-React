import { useState } from "react"

function FormCheckout(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        props.handleCheckout(formData)
    }

    function handleChange(e) {
        const inputName = e.target.name;
        const value = e.target.value;

        const newFormData = { ...formData }
        newFormData[inputName] = value
        setFormData(newFormData)
    }

    function clearForm() {
        setFormData({
            name: "",
            email: "",
            phone: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulario de Checkout</h2>
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <button type="submit">Finalizar Compra</button>
            <button onClick={clearForm} type="button">Limpiar Formulario</button>
        </form>
    )
}

export default FormCheckout