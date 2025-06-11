document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-presupuesto');
    const producto = document.getElementById('producto');
    const plazo = document.getElementById('plazo');
    const extras = document.querySelectorAll('input[name="extra"]');
    const totalOutput = document.getElementById('total');
    const errorMessages = document.querySelectorAll('.error-message');

    // Validación en tiempo real
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            validateField(input);
        });
    });

    // Cálculo automático del presupuesto
    [producto, plazo, ...extras].forEach(element => {
        element.addEventListener('change', calcularPresupuesto);
    });

    // Función de validación
    function validateField(field) {
        const errorSpan = field.nextElementSibling;
        
        if (!field.checkValidity()) {
            errorSpan.textContent = field.title;
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';
        }
    }

    // Función de cálculo
    function calcularPresupuesto() {
        let total = parseFloat(producto.value) || 0;
        
        // Descuento por plazo
        const dias = parseInt(plazo.value);
        if (dias > 7) total *= 0.9; // 10% de descuento
        
        // Extras
        extras.forEach(extra => {
            if (extra.checked) total += parseFloat(extra.value);
        });
        
        totalOutput.textContent = `${total.toFixed(2)}€`;
    }

    // Validación al enviar
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        form.querySelectorAll('[required]').forEach(field => {
            validateField(field);
            if (!field.checkValidity()) isValid = false;
        });
        
        if (isValid) {
            alert('Presupuesto enviado correctamente. Nos pondremos en contacto pronto.');
            form.reset();
            totalOutput.textContent = '0€';
        }
    });
});